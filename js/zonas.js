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
		document.getElementById('precarga').innerHTML = 'Cargando Puntos.....';
		
		map = new GMap2(document.getElementById("map_canvas"), {draggableCursor: 'crosshair'});
		map.addControl (new GSmallMapControl());
		map.addControl (new GMenuMapTypeControl());
		map.addControl(new GScaleControl());
		map.addControl(new GOverviewMapControl());
		map.setMapType(G_NORMAL_MAP);

		var mapZoom = ($('#mapZoom').val() == "")?9:$('#mapZoom').val();
		var sX = ($('#sX').val() == "")?"-75.124512":$('#sX').val();
		var sY = ($('#sY').val() == "")?"10.556672":$('#sY').val();
		
		map.setCenter(new GLatLng(sY, sX),parseInt(mapZoom));
		//map.setCenter(new GLatLng(10.556672,-75.124512),9);
		// ****
		//var point1 = new GPoint (-74,919572,10,832136);
	    var point = new GPoint (sX,sY);
		var marker = new GMarker(point); 
    	map.addOverlay(marker); 
      
		  GEvent.addListener(map, "click", function (overlay,point){
			 if (point){
				marker.setPoint(point);
				document.posicion.x.value=point.x
				document.posicion.y.value=point.y
				$('#mapZoom').val(map.getZoom());
				$('#sX').val(point.x);
				$('#sY').val(point.y);
				
			 }
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


			  for (var i = 0; i < records.length; i++) {
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
						Dato1&nbsp;' + dato1 + '&nbsp;<br /> \
						Dato2&nbsp;' + dato2 + '&nbsp;<br /> \
						Dato3&nbsp;' + dato3 + '&nbsp;</div>';
				  handle_clicks(poly, html);
				  map.addOverlay(poly);
		
					document.getElementById('precarga').innerHTML = 'Listo';


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
	initialize('xml/default.xml','side_bar',0);

	if (document.getElementById('chk').checked == true)
		initialize('xml/zonas.xml','side_bar',0);
		
	if (document.getElementById('chk1').checked == true)
		initialize('xml/zonas_mar_caribe.xml','side_bar',0);

	if (document.getElementById('chk2').checked == true)
		initialize('xml/zonas_rio_magdalena.xml','side_bar',0);

	if (document.getElementById('chk3').checked == true)
		initialize('xml/zonas_canal_dique.xml','side_bar',0);
	
  	//	initialize('xml/zonas_custom.xml','pos',1);
}

function valBorrarZona(zona)
{
	if (!confirm("Realmente desea eliminar la zona "+zona+"?"))
		return;
	$.ajax
	({
		type: "POST",
		url: "borrarZona.php",
		data: "nom="+zona,
		success: function(msg) 
		{
			preload();
			//alert(msg);
  		},
		error: function(){alert("se presento un error enviando los datos al servidor");}
	});
}
