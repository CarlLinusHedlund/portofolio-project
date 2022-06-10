<?php 
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from = 'linus.hedlund96@outlook.com';
    $email_subject = "$subject";

    $email_body = "Username: $name.\n".
                    "User Email: $visitor_email.\n".
                        "User message: $message.\n".

    $to = "linus.hedlund96@hotmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
?>