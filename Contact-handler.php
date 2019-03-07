<?php
	$name = $_POST['fname'];
	$name = $_POST['lname'];
	$visitor_email = $_POST['email'];
	$message = $_POST['subject'];

	$email_from = $visitor_email;
	$email_subject = "New Form Submission";
	$email_body = "User Name: $fname.\n".
					"User Name: $lname.\n".
						"User Email: $visitor_email.\n"
							"User Message: $subject.\n"

	$to = "ajbest91@gmail.com"
	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $visitor_email \r\n";
	mail($to, $email_subject, $email_body, $headers);

	header("Location: Contact.html")
?>