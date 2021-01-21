<?php

function jsonParse($fileName) {
	$content = file_get_contents($fileName, FILE_USE_INCLUDE_PATH);
	return json_decode($content);
}

?>