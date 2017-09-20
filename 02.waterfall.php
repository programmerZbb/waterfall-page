<?php
	$jsonarr = file_get_contents("info/data.json");
	$arrtotal = json_decode($jsonarr);
	$keyarr = array_rand($arrtotal,10);
//	echo json_encode($keyarr);
	$arr = array();
	for($i=0;$i<count($keyarr);++$i){
		$arr[$i] = $arrtotal[$keyarr[$i]];
	}
	echo json_encode($arr);
?>