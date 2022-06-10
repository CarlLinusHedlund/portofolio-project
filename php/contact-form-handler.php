<!-- I will run this code later when i use another hosting.
     At the moment im using netlify, but netlify doesn't 
     run php code on the server at browse time.
     Because lack of time i need to prioritize other stuff on the
     page at the moment. 
     But the validation works for now at least.
-->

<?php 
    if (isset($_POST['submit'])){
        $name = $_POST['name'];
        $visitor_email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
    }
    $mailTo = "carllinushedlund@snowydays.casa";
    $headers = "From: ".$visitor_email;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
?>