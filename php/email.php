<?php
require_once 'PHPMailer/PHPMailerAutoload.php';

if(isset($_POST['name'],$_POST['email'], $_POST['message'])){
	
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	//Create a new PHPMailer instance
	$mail = new PHPMailer;
	$mail->CharSet = 'utf-8';
	ini_set('default_charset', 'UTF-8');

	//Set who the message is to be sent from'
	$mail->setFrom("post@aabergebrudesalong.no", $name);
	//Set an alternative reply-to address
	$mail->addReplyTo($email, $name);
	//Set who the message is to be sent to
	$mail->addAddress("vegard.aaberge@gmail.com", "Vegard Aaberge");
	//Set the subject line
	$mail->Subject  = "Epost fra nettside (". $name .")";
	$mail->Body     = "Navn:". $name ."\nEpost:". $email ."\n\n" . $message;
	
	//send the message, check for errors
	if (!$mail->send()) {
	    echo "Mailer Error: " . $mail->ErrorInfo;
	} else {
	    echo "1";
	}
	
}
?>