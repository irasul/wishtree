<?php
    
    $content = file_get_contents("php://input");
    $data = json_decode($content);

    $bname=$data["brideName"];
    $gname=$data["groomName"];
    $email=$data["email"];
    $phone=$data["phone"];
    $eventDate=$data["eventDate"];
    $message=$data["body"];
    
    if ( ($bname=="")||($gname=="")||($message=="") || ($email=="") || ($phone=="")) {
            echo "{data :{success: false, msg:'Please complete the mandatory fileds.' }}";
    }
    else {        
        $from="From: $bname<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
        $body = "Bride's Name: $bname\r\nGroom's Name: $gname\r\nEvent Date: $eventDate\r\nPhone: $phone\r\n$message";
        mail("info@wishtree-cinemas.com", $subject, $body, $from);
        echo "{data: {success: true, msg: 'Thank you! We will get back to you soon.' }}";
    }
  
?>
