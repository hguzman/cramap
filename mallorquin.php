<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>POMCA Cienaga de Mallorquin</title>
<LINK REL="SHORTCUT ICON" HREF="img/cra.ico" />
<!--This google maps key is for https://phpdb.aset.psu.edu/phpqrt100/-->
<META HTTP-EQUIV="Cache-Control" CONTENT="no-store">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Expires" CONTENT="0">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" >
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=true_or_false&amp;key=ABQIAAAAbBqYnTFvhur-o7ybLtHEnhRqhOqGTIFMeadjv5BgkY6OQ2gHthRupduC4NdiCp7y38JQ6MrLXBisjA" type="text/javascript"></script>
<script src="js/jquery-1.6.3.min.js" language="javascript"></script>
<script src="js/zonas_mallorquin.js" language="javascript"></script>
<script src="pro_dropdown_2/stuHover.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery.reveal.js"></script>

<link href="Site.css" type="text/css" rel="stylesheet" />
<link href="pro_dropdown_2/pro_dropdown_2.css" type="text/css" rel="stylesheet" />
<link rel="stylesheet" href="reveal.css">	

<style type="text/css">
<!--
body,td,th {
	font-size: 0.8em;
}
-->
</style>
<script language="JavaScript" type="text/JavaScript">
<!--
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
//-->
</script>

</head>

<body onload="preload();" onunload="GUnload()">
<?php
$mensaje="Este es el 
		 mensaje";
?>
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
				<div align="center"><strong>CIENAGA DE MALLORQUIN</strong></div><br/>
				  <table>
					<tr><td colspan="2"><div align="center"><strong>Convenciones</strong></div></td>
					</tr>
 						
					<tr><td><a href="#" class="big-link" data-reveal-id="myModal">ZEE<?php $mensaje="Otro dato" ?></a></td><td><img src="img/convenciones/ZEE.png"/></td></tr>
					<tr><td>ZIP</td><td><img src="img/convenciones/ZIP.png"/></td></tr>
					<tr><td>ZISD</td><td><img src="img/convenciones/ZISD.png"/></td></tr>
					<tr><td>ZP</td><td><img src="img/convenciones/ZP.png"/></td></tr>
					<tr><td>ZRA</td><td><img src="img/convenciones/ZRA.png"/></td></tr>
					<tr><td>ZRHP</td><td><img src="img/convenciones/ZRHP.png"/></td></tr>
					<tr><td>ZUMR</td><td><img src="img/convenciones/ZUMR.png"/></td></tr>
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
<br></br>
		<div id="myModal" class="reveal-modal">
			<h1>ZONA ECOSISTEMA ESTRATEGICO</h1>
			<p><?php echo $mensaje ?></p>
			<a class="close-reveal-modal">&#215;</a>
		</div>

</body>
</html>
