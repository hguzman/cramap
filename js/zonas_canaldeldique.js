// JavaScript Document

var map; 
	function handle_clicks(poly, html) {
		GEvent.addListener(poly, "click", function(overlay) {
			 map.openInfoWindowHtml(overlay, html);
		});	
	}


	function get_color(margin) {	
	  if (margin > 20) { color = "#2166ac"; }
	  else if (margin > 10) { color = "#4393c3"; }
	  else if (margin > 0) { color = "#92c5de"; }
	  else if (margin > -10) { color = "#f4a582"; }
	  else if (margin > -20) { color = "#d6604d"; }
	  else { color = "#b2182b"; }		
	  return color;
	}

	function initialize(source/*archivo xml*/, target/*capa en la que se cargaran los datos tabulados*/, del /*op eliminar*/) {
	  if (GBrowserIsCompatible()) {
		//outside a function, you can only reference local variables that are not declared with the var keyword
		//no var for map variable
		document.getElementById('precarga').innerHTML = 'Cargando Puntos Canal del Dique.....';
		
		map = new GMap2(document.getElementById("map_canvas"), {draggableCursor: 'crosshair'});
		map.addControl (new GSmallMapControl());
		map.addControl (new GMenuMapTypeControl());
		map.addControl(new GScaleControl());
		map.addControl(new GOverviewMapControl());
		map.setMapType(G_NORMAL_MAP);

//		var mapZoom = "10";
//		var sX = "-75.112152";
//		var sY = "10.533720";

		mapZoom=document.getElementById('valorz').innerText;		
		if (mapZoom==""){
			mapZoom="10";
		}
		sX=document.getElementById('valorcx').innerText;		
		if (sX==""){
			sX = "-75.112152";
		}
		sY=document.getElementById('valorcy').innerText;		
		if (sY==""){
			sY = "10.533720";
		}

		map.setCenter(new GLatLng(sY, sX),parseInt(mapZoom));
		//map.setCenter(new GLatLng(10.556672,-75.124512),9);
		// ****
		//var point1 = new GPoint (-74,919572,10,832136);
	    var point = new GPoint (sX,sY);
		var marker = new GMarker(point); 
    	map.addOverlay(marker); 
      
			GEvent.addListener(marker, "click", function(point) {
	   			var html = "<div style='width: 208px; height: 100px'><strong>Coordenadas:</strong><br/> x="+point.x.toFixed(6)+"<br/> y="+point.y.toFixed(6)+"</div>";
				marker.openInfoWindowHtml(html);
			});

			GEvent.addListener(map, "click", function (overlay,point){
			 if (point){
				marker.setPoint(point);
			 }
		  }); 

			GEvent.addListener(map, "mousemove", function (mev){
				document.getElementById('valorx').innerHTML =mev.lng().toFixed(6);
				document.getElementById('valory').innerHTML =mev.lat().toFixed(6);
				// Centro Mapa
				document.getElementById('valorcx').innerHTML =map.getCenter().lng().toFixed(6);
				document.getElementById('valorcy').innerHTML =map.getCenter().lat().toFixed(6);
				// ZOOM
				document.getElementById('valorz').innerHTML =map.getZoom();
			});
		//****************
		GDownloadUrl(source, function (data, status) {
		  if (status==200) { 
			  var xml = GXml.parse(data);
			  var records = xml.getElementsByTagName("poly");
			  var tit = (del == 1)?'<td></td>':'';
			  var side_html = '<table style="border-collapse: collapse" border="1" cellpadding="1"> \
						<thead> \
						  <tr style="background-color:#e0e0e0"> \
							<td><b>Nombre de la Zona</b></td> \
							<td><b>Datomio</b></td> \
							<td><b>Dato2</b></td> \
							<td><b>Dato3</b></td> \
							<td><b>Dato4</b></td> '+tit+'\
						  </tr> \
						</thead> \
						<tbody>';

			  var contador=0;
			  var npuntos=0;

			  for (var i = 0; i < records.length; i++) {
				  contador++;
				  //get the ith record from the array
				  var rec = records[i];
				  //obtain the value of an attribute for the record currently being processed
				  var dato1 = rec.getAttribute("dato1");
				  var name = rec.getAttribute("zona");
				  var dato2= rec.getAttribute("dato2");
				  var dato3= rec.getAttribute("dato3");
				  var dato4= rec.getAttribute("dato4");
				  var color= rec.getAttribute("color");
				 /* var obama = parseInt(rec.getAttribute("Obama"));
				  var mccain = parseInt(rec.getAttribute("McCain"));
				  var other = parseInt(rec.getAttribute("other"));
				  //calculations for display
				  var total_votes = obama + mccain + other;
				  var obama_percent = obama / total_votes * 100;
				  var mccain_percent = mccain / total_votes * 100;
				  var other_percent = other / total_votes * 100;
				  var margin = obama_percent - mccain_percent;
					*/
				
				  var det = (del == 1)?"<td><img src='img/eliminar.png' alt='Eliminar ubicacion.' onclick=\"valBorrarZona('"+name+"')\"></td>":''; 
				  side_html += '<tr><td>' + name + '</td><td>' + dato1 + '</td><td>' + dato2 + '</td><td>' + dato3 + '</td><td>' + dato4 + '</td>' + det + '</tr>';		
				  var verts = rec.getElementsByTagName("vertices");
				  var pts = [];
				  //obtain the coordinates for the polygon for the record currently being processed
				  for (var j = 0; j < verts.length; j++) {
					  npuntos++;
					  var vert = verts[j];
					  var lat = parseFloat(vert.getAttribute("y"));
					  var lng = parseFloat(vert.getAttribute("x"));	
					  pts[j] = new GLatLng(lat,lng);
				  }

				  //var color = get_color(margin);
				  //clickable by default
				  var poly = new GPolygon(pts,"#333333",2,1,color,0.5);

				  var html = '<div style="width:220px; height:auto; overflow:auto"> \
						<strong>Zona &nbsp;' + name + '</strong><br /> \
						Pomca:&nbsp;' + dato1 + '&nbsp;<br /> \
						Poligono:&nbsp;' + dato2 + '&nbsp;<br /> \
						Departamento:&nbsp;' + dato3 + '&nbsp;</div>';
				  handle_clicks(poly, html);
				  map.addOverlay(poly);
		
					document.getElementById('precarga').innerHTML = 'Canal del Dique: <strong>'+ contador + '</strong> Poligonos y <strong>'+ npuntos+'</strong> Puntos Cargados';


					//creo la marca
					//var punto_marca = new GPoint (-74.95472,10.98778); 
					//var marca = new GMarker(punto_marca); 
					//muestro la marca
					//map.addOverlay(marca);
					
					//creo el evento clic sobre la marca, que se ejecuta llamando a la función ocultar_mostrar_poligono
					//GEvent.addListener(marca, "click", ocultar_mostrar_poligono);
		
			  }
			  side_html += '</tbody></table>';
			  document.getElementById(target).innerHTML = side_html;
		  } else {
			  alert("Problem loading XML data.");
		  }
		}
		);
	  }
	}
//función para ocultar o mostrar el polígono al pulsar la marca.
function ocultar_mostrar_poligono(){
	if (poly.isHidden()){
		//alert("Estaba oculto");
		poly.show();
	}else{
		//alert("Estaba mostrandose");
		poly.hide();
	}
}


function enviarCoords()
{
	
	var nombre = ($('#nom').val() == "")?"usuario":$('#nom').val();
	var x = $('#x').val();
	var y = $('#y').val();
	
	if (x == "")
	{
		$('#x').focus();
		alert("Indique la coordenada X o selecionela en el mapa.");
		return;
	}
	
	if (y == "")
	{
		$('#y').focus();
		alert("Indique la coordenada Y o selecionela en el mapa.");
		return;
	}
	

	
$.ajax
	({
		type: "POST",
		url: "adminXML.php",
		data: "nom="+nombre+"&x="+x+"&y="+y,
		success: function(msg) 
		{
			preload();
			//alert(msg);
  		},
		error: function(){alert("se presento un error enviando los datos al servidor");}
	});
}


function limpiar()
{
	preload();
	$('#x').val("");
	$('#y').val("");
	$('#nom').val("");
	$('#x').focus();
	$('#chk').checked = false;
}

function preload()
{	
	if (document.getElementById('chk').checked == true){
		initialize('xml/default.xml','side_bar',0);
	}else{
		initialize('xml/zonas_canal_dique.xml','side_bar',0);
		carga();
	}
}

// Codigo para el dragdrop de la ventana
var scrollDivs=new Array();
scrollDivs[0]="div1";
scrollDivs[1]="div";

function carga()
{
	posicion=0;
	
	// IE
	if(navigator.userAgent.indexOf("MSIE")>=0) navegador=0;
	// Otros
	else navegador=1;

	registraDivs();
}

function registraDivs()
{
	for(divId in scrollDivs)
	{
		document.getElementById(scrollDivs[divId]).onmouseover=function() { this.style.cursor="move"; }
		document.getElementById(scrollDivs[divId]).onmousedown=comienzoMovimiento;
	}
}

function evitaEventos(event)
{
	// Funcion que evita que se ejecuten eventos adicionales
	if(navegador==0)
	{
		window.event.cancelBubble=true;
		window.event.returnValue=false;
	}
	if(navegador==1) event.preventDefault();
}

function comienzoMovimiento(event)
{
	var id=this.id;
	elMovimiento=document.getElementById(id);
	
	 // Obtengo la posicion del cursor
	 
	if(navegador==0)
	 {
	 	cursorComienzoX=window.event.clientX+document.documentElement.scrollLeft+document.body.scrollLeft;
		cursorComienzoY=window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop;
	}
	if(navegador==1)
	{    
		cursorComienzoX=event.clientX+window.scrollX;
		cursorComienzoY=event.clientY+window.scrollY;
	}
	
	elMovimiento.onmousemove=enMovimiento;
	elMovimiento.onmouseup=finMovimiento;
	
	elComienzoX=parseInt(elMovimiento.style.left);
	elComienzoY=parseInt(elMovimiento.style.top);
	// Actualizo el posicion del elemento
	elMovimiento.style.zIndex=++posicion;
	
	evitaEventos(event);
}

function enMovimiento(event)
{  
	var xActual, yActual;
	if(navegador==0)
	{    
		xActual=window.event.clientX+document.documentElement.scrollLeft+document.body.scrollLeft;
		yActual=window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop;
	}  
	if(navegador==1)
	{
		xActual=event.clientX+window.scrollX;
		yActual=event.clientY+window.scrollY;
	}
	
	elMovimiento.style.left=(elComienzoX+xActual-cursorComienzoX)+"px";
	elMovimiento.style.top=(elComienzoY+yActual-cursorComienzoY)+"px";

	evitaEventos(event);
}

function finMovimiento(event)
{
	elMovimiento.onmousemove=null;
	elMovimiento.onmouseup=null;
}

//window.onload=carga;

