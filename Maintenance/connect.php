<?php
	$db = new mysqli('127.0.0.1', 'aabergeb_mainten','1989Mff2008','aabergeb_maintenance');
	
	if($db->connect_errno){
		echo $db->connect_error;
		die('<br> Sorry, we are having some problems.');
	}
?>