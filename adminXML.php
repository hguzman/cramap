<?php 
	$doc = new DOMDocument('1.0'); 
	$doc->load('xml/zonas_custom.xml'); 
	
	$array = $doc->getElementsByTagName("poly");
	$cont=0;
	$existe = 0;
	while ($cont < $array->length)
	{
	   $pol = $array->item($cont);  
	   if ($pol->getAttribute('zona')==$_POST['nom'])
	   {		   
			$nuevoElem = $doc->createElement("vertices");
			$res = $pol->appendChild($nuevoElem);
			$attrX = $res->setAttributeNode(new DOMAttr('x', $_POST['x']));
			$attrY = $res->setAttributeNode(new DOMAttr('y', $_POST['y']));
			
			$existe = 1;		   
			break;
	   }else
		$existe = 0;
	   $cont++;
	}


	if ($existe == 0)
	{
		$array = $doc->getElementsByTagName("poligonos");
		$base = $array->item(0);

		$nodo = $doc->createElement("poly");
		$nodo->setAttributeNode(new DOMAttr('zona', $_POST['nom']));
		$nodo->setAttributeNode(new DOMAttr('dato1', 'usuario'));
		$nodo->setAttributeNode(new DOMAttr('dato2', 'usuario'));
		$nodo->setAttributeNode(new DOMAttr('dato3', 'usuario'));
		$nodo->setAttributeNode(new DOMAttr('dato4', 'usuario'));
		$nodo->setAttributeNode(new DOMAttr('color', '#3A4E3D'));
		$nodo->setAttributeNode(new DOMAttr('punto', ''));
		
		$nuevoElem = $doc->createElement("vertices");
		$res = $nodo->appendChild($nuevoElem);
		$attrX = $res->setAttributeNode(new DOMAttr('x', $_POST['x']));
		$attrY = $res->setAttributeNode(new DOMAttr('y', $_POST['y']));
		
		$base->appendChild($nodo);		

	}

	 $doc->save('xml/zonas_custom.xml');	
?> 
