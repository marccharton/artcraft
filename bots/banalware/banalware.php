<?php


include 'replace.php';
include 'file.php';

function getRandomBanalware() {
	$banalwareList = jsonParse("banalwareList.json");
	return $banalwareList[rand(0, count($banalwareList) - 1)];
}

function generateBanalware() {
	$banalware = getRandomBanalware();

	if (strstr($banalware, "%prenomBeauf%")) {
		$banalware = replaceBeauf($banalware);
	}
	if (strstr($banalware, "%actionImprobable%")) {
		$banalware = replaceActionImprobable($banalware);
	}
	echo $banalware;
}

?>