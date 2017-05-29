<?php
    
    $content = file_get_contents("php://input");
    $data = json_decode($content,true);
    

    $bname=filter_var($data['data']["brideName"],FILTER_SANITIZE_STRING);
    $gname=filter_var($data['data']["groomName"],FILTER_SANITIZE_STRING);
    $email=filter_var($data['data']["email"],FILTER_SANITIZE_EMAIL);
    $phone=filter_var($data['data']["phone"],FILTER_SANITIZE_NUMBER_INT);
    $eventDate=filter_var($data['data']["eventDate"],FILTER_SANITIZE_STRING);
    $message=$data['data']["body"];
    

    if ( ($bname=="")||($gname=="")||($message=="") || ($email=="") || ($phone=="") ) {
            echo "{data :{success: false, msg:'Please complete the mandatory fileds.' }}";
    }
    else {
        $from   = "From: $bname<$email>\r\nReturn-path: $email";
        $subject= "Message sent using your contact form";
        $body   = "Bride's Name: $bname\r\nGroom's Name: $gname\r\nEvent Date: $eventDate\r\nPhone: $phone\r\n$message";
        mail( "iftakhar.rasul@gmail.com", $subject, $body, $from );
        echo "{data: {success: true, msg: 'Thank you! We will get back to you soon.' }}";
    }
  
?>
