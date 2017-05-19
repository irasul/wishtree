<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'/>
<link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12' style='background-color:transparent'> 
<style>
	body{background-color:#d4c6af;padding-top:20px;font-family: 'Roboto', serif;}
	label{margin-top:3px;}
	
</style>
<?php
$action=$_REQUEST['action'];
if ($action=="")    /* display the contact form */
    {
    ?>
    <form class='form-group' action="" method="POST" enctype="multipart/form-data">
		<input type="hidden" name="action" value="submit">
		<label>Your name:</label>
		<input class='form-control' name="name" type="text" value="" size="30"/>
		<label>Your email:</label>
		<input class='form-control' name="email" type="text" value="" size="30"/>
		<label>Your message:</label>
		<textarea class='form-control' name="message" rows="7" cols="30"></textarea><br>
		<div class='row text-center' ><input class='btn btn-success' type="submit" value="Send email"/></div>
    </form>
    <?php
    } 
else                /* send the submitted data */
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
        echo "All fields are required, please fill <a href=\"\">the form</a> again.";
        }
    else{        
        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
        mail("wishtreecinemas@gmail.com", $subject, $message, $from);
        echo "Email sent!";
        }
    }  
?>

</div>