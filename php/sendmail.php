<?php

$email = addcslashes($_REQUEST['q']) ;

$name = $_POST['name'];
$clientEmail = $_POST['email'];
$message = $_POST['message'];

//Compose email

$emailFrom = 'octavian@octavianjohnson.com';
$emailSubject = 'Octopus Form Submission';
$emailBody = "You have recieved a new message from the user $name. : \n". "Here ya go: \n $message"; 


#Receive user input
$email_address = $_POST['email_address'];
$feedback = $_POST['feedback'];

#Filter user input
function filter_email_header($form_field) {  
return preg_replace('/[nr|!/<>^$%*&]+/','', $form_field);
}

$email_address  = filter_email_header($email_address);

#Send email
$headers = "From: $email_addressn";
$sent = mail('you@domain.com', 'Feedback Form Submission', $feedback, $headers);

#Thank user or notify them of a problem
if ($sent) {

?><html>
<head>
<title>Thank You</title>
</head>
<body>
<h1>Thank You</h1>
<p>Thank you for your feedback.</p>
</body>
</html>
<?php

} else {

?><html>
<head>
<title>Something went wrong</title>
</head>
<body>
<h1>Something went wrong</h1>
<p>We could not send your feedback. Please try again.</p>
</body>
</html>
<?php
}
?>