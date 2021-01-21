<?php

function replaceBeauf($banalware) {
	$prenomBeauf = Array (
		Array("gilou", 1),
		Array("gros", 1),
		Array("dédé", 1),
		Array("claude", 1),
		Array("roger", 1),
		Array("albert", 2),
		Array("martine", 0)
	);

	$prenomBeaufDeterminant = Array (
		"la ",
		"le ",
		"l'"
	);

	$currentPrenomBeauf = $prenomBeauf[rand(0, count($prenomBeauf) - 1)];

	$banalware = str_replace("%prenomBeauf%", $currentPrenomBeauf[0], $banalware);
	$banalware = str_replace("%prenomBeaufDeterminant%", $prenomBeaufDeterminant[$currentPrenomBeauf[1]], $banalware);
	return $banalware;
}

function replaceActionImprobable($banalware) {
	$actionImprobable = Array (
		"pense par lui même",
		"réfléchie",
		"prend le temps de vivre",
		"ne fais pas le mouton"
	);

	$currentActionImprobable = $actionImprobable[rand(0, count($actionImprobable) - 1)];
	$banalware = str_replace("%actionImprobable%", $currentActionImprobable, $banalware);
	return $banalware;
}

?>