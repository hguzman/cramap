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
		   try
		   {		
			
			$pol->parentNode->removeChild($pol);
			echo "borrado";
		   }catch (Exception $e)
		   {
			   echo $e->getMessage();
		   }
			break;
	   }
	   $cont++;
	}

	 $doc->save('xml/zonas_custom.xml');	
?> 
