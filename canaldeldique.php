<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>POMCA Canal del Dique</title>
<LINK REL="SHORTCUT ICON" HREF="img/cra.ico" />
<!--This google maps key is for https://phpdb.aset.psu.edu/phpqrt100/-->

<META HTTP-EQUIV="Cache-Control" CONTENT="no-store"> 
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Expires" CONTENT="0"> 

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=true_or_false&amp;key=ABQIAAAAbBqYnTFvhur-o7ybLtHEnhRqhOqGTIFMeadjv5BgkY6OQ2gHthRupduC4NdiCp7y38JQ6MrLXBisjA" type="text/javascript"></script>
<script src="js/jquery-1.6.3.min.js" language="javascript"></script>
<script src="js/zonas_canaldeldique.js" language="javascript"></script>
<script src="pro_dropdown_2/stuHover.js" type="text/javascript"></script>


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
				<div id="div1" style="top:100px; left:100px;">
				<div align="center"><strong>CANAL DEL DIQUE</strong></div><br/>
				  <table>
					<tr><td colspan="2"><div align="center"><strong>Convenciones</strong></div></td>
					</tr>
					<tr><td>Produccion</td><td><img src="img/canaldique/ZP.png"/></td></tr>
					<tr><td>Rehab. Productiva</td><td><img src="img/canaldique/ZRP.png"/></td></tr>
					<tr><td>Multiple Restringido</td><td><img src="img/canaldique/ZMR.png"/></td></tr>
					<tr><td>Rec. Ambiental</td><td><img src="img/canaldique/ZRA.png"/></td></tr>
					<tr><td>Eco. Estrategico</td><td><img src="img/canaldique/ZEE.png"/></td></tr>
					<tr><td>Infraestructura</td><td><img src="img/canaldique/ZI.png"/></td></tr>
					<tr><td colspan="2"><div align="center"><strong>Posici&oacute;n del mouse</strong></div></td></tr>
					<tr><td><div align="center">X</div></td><td><label id="valorx"></label></td></tr>
					<tr><td><div align="center">Y</div></td><td><label id="valory"></label></td></tr>
					<tr><td colspan="2"><div align="center"><strong>Centro Mapa</strong></div></td></tr>
					<tr><td><div align="center">X</div></td><td><label id="valorcx"></label></td></tr>
					<tr><td><div align="center">Y</div></td><td><label id="valorcy"></label></td></tr>
					<tr><td><div align="center">ZOOM</div></td><td><div align="center">
					  <label id="valorz"></label>
					  </div></td></tr>
					<tr><td colspan="2"><div align="center"><strong><a href="Documentos/Mallorquin/POM_Cuenca_Cienaga_Mallorquin.zip">Plan de Ordenamiento</a></strong></div></td></tr>
					<tr><td colspan="2"><strong>Ocultar Poligonos</strong><input type="checkbox" id="chk" onClick="preload();" /></td></tr>
				  </table>
				</div>

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
