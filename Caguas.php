<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title>Sectores Productivos Industrias</title>
	<LINK REL="SHORTCUT ICON" HREF="img/cra.ico" />

<META HTTP-EQUIV="Cache-Control" CONTENT="no-store"> 
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Expires" CONTENT="0"> 

<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=true_or_false&amp;key=ABQIAAAAbBqYnTFvhur-o7ybLtHEnhRqhOqGTIFMeadjv5BgkY6OQ2gHthRupduC4NdiCp7y38JQ6MrLXBisjA" type="text/javascript"></script>
    <script src="http://gmaps-utility-library.googlecode.com/svn/trunk/mapiconmaker/1.0/src/mapiconmaker.js" type="text/javascript"></script> 
    <script type="text/javascript">
    //<![CDATA[

    var locations = {};

    function load() {
      var map = new GMap2(document.getElementById("map_canvas"));
      map.setCenter(new GLatLng(10.556672,-75.124512), 9);
		map.addControl (new GSmallMapControl());
		map.addControl (new GMenuMapTypeControl());
		map.addControl(new GScaleControl());
		map.addControl(new GOverviewMapControl());
		map.setMapType(G_NORMAL_MAP);

      GDownloadUrl("xml/markerdataaguas.xml", function(data) {
        var xml = GXml.parse(data);
        var markers = xml.documentElement.getElementsByTagName("marker");
        for (var i = 0; i < markers.length; i++) {
          var name = markers[i].getAttribute("name");
          var address = markers[i].getAttribute("address");
          var type = markers[i].getAttribute("type");
          var latlng = new GLatLng(parseFloat(markers[i].getAttribute("lat")),
                                  parseFloat(markers[i].getAttribute("lng")));
          var store = {latlng: latlng, name: name, address: address, type: type};
          var latlngHash = (latlng.lat().toFixed(6) + "" + latlng.lng().toFixed(6));
          latlngHash = latlngHash.replace(".","").replace(".", "").replace("-","");
          if (locations[latlngHash] == null) {
            locations[latlngHash] = []
          }
          locations[latlngHash].push(store);
        }
        for (var latlngHash in locations) {
          var stores = locations[latlngHash];
          if (stores.length > 1) {
            map.addOverlay(createClusteredMarker(stores));
          } else {
            map.addOverlay(createMarker(stores));
          }
         }
      });
    }

    function createMarker(stores) {
      var store = stores[0];
      var newIcon = MapIconMaker.createMarkerIcon({width: 32, height: 32, primaryColor: "#000066"});
      var marker = new GMarker(store.latlng, {icon: newIcon});
      var html = "<b>" + store.name + "</b> <br/>" + store.address + "<br/>" + store.type;
      GEvent.addListener(marker, 'click', function() {
        marker.openInfoWindowHtml(html);
      });
      return marker;
    }

    function createClusteredMarker(stores) {
      var newIcon = MapIconMaker.createMarkerIcon({width: 44, height: 44, primaryColor: "#000066"});
      var marker = new GMarker(stores[0].latlng, {icon: newIcon});
      var html = "";
      for (var i = 0; i < stores.length; i++) {
        html += "<b>" + stores[i].name + "</b> <br/>" + stores[i].address + "<br/>";
      }
      GEvent.addListener(marker, 'click', function() {
        marker.openInfoWindowHtml(html);
      });
      return marker;
    }
    //]]>
  </script>
<link href="Site.css" type="text/css" rel="stylesheet" />
<link href="pro_dropdown_2/pro_dropdown_2.css" type="text/css" rel="stylesheet" />

  </head>
<body onload="load()" onunload="GUnload()">
<!-- wrap Inicia la Estructura -->
<div id="wrap">
<!-- Encabezado -->
	<div id="header">
		<img src="img/titulo.png"/>
	</div>
<!-- Navegación en el Menu -->	
	<div id="menu">
		<?php include "menuh.php" ?>
	</div>
<!-- Contenido de la estructura -->	
	<div id="content-wrap">
		<div id="main">
				<div id="map_canvas"></div>
				 <div id="precarga"></div>
		</div>
	</div>
</div>
<!--<div id="side_bar"></div>
<div id="side_bar2">
<div class="titulo">Parametros de usuario</div>
    <div id="pos"></div>
</div> -->
<br></br>

</body>

<!--  <body style="font-family:Arial, sans serif" onload="load()" onunload="GUnload()">
    <div id="map" style="float:left; width: 600px; height: 500px; border: 1px solid black"></div>
  </body>-->
</html>