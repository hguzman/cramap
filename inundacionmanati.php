<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>POMCA</title>
<LINK REL="SHORTCUT ICON" HREF="img/cra.ico" />
<!--This google maps key is for https://phpdb.aset.psu.edu/phpqrt100/-->

<META HTTP-EQUIV="Cache-Control" CONTENT="no-store"> 
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Expires" CONTENT="0"> 

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=true_or_false&amp;key=ABQIAAAAbBqYnTFvhur-o7ybLtHEnhRqhOqGTIFMeadjv5BgkY6OQ2gHthRupduC4NdiCp7y38JQ6MrLXBisjA" type="text/javascript"></script>
<script src="js/jquery-1.6.3.min.js" language="javascript"></script>
<script src="js/zonas2.js" language="javascript"></script>


<link href="Site.css" type="text/css" rel="stylesheet" />
<link href="pro_dropdown_2/pro_dropdown_2.css" type="text/css" rel="stylesheet" />

<style type="text/css">
<!--
body,td,th {
	font-size: 0.8em;
}
-->
</style></head>

<body onload="preload();" onunload="GUnload()">
<!-- wrap Inicia la Estructura -->
<div id="info" style="position:absolute; left:100px; top:120px; width:280px; height:43px; z-index:1; "></div>
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
				 ¿Necesitas Convertir tus coordenadas Geograficas en planas? <a href="http://www.earg.gov.ar/kruger.htm" target="_blank">Clik Aquí</a>
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
</html>
