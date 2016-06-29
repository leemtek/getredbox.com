<?php
    // Declare required variables.
    $name; $email; $message; $captcha;

    // Decode JSON post to form data POST for PHP.
    $_POST = json_decode(file_get_contents('php://input'), true);

    // Check if POST values were set.
    if(isset($_POST['name'])) { $name = $_POST['name']; }
    if(isset($_POST['email'])) { $email = $_POST['email']; }
    if(isset($_POST['message'])) { $message = $_POST['message']; }
    if(isset($_POST['googleResponse'])) { $captcha = $_POST['googleResponse']; }

    if(!$captcha) {
        // Return Unauthorized Access because of reCAPTCHA
        http_response_code(401);
        exit(0);
    } // if

    // Compile response to Google
    $secretKey = "6LcNoiMTAAAAANk4I5qckkkChx6hUKWxsPB_HmG4";
    $ip = $_SERVER['REMOTE_ADDR'];
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
    $responseKeys = json_decode($response,true);

    if(intval($responseKeys["success"]) == 1) {
        // Build Message
        $varFrom = $name . " <" . $email . ">";
        $varSubject = "Lead from GetRedBox.com | " . $name;
        $varMessage = "From: " . $name . "\n" .
            "Email: " . $email . "\n\n" .
            $message
        ; // $fullMessage

        // Message Headers
        $varHeaders = 'From: ' . $varFrom . "\r\n" .
            'Reply-To: '  . $name . ' <' . $email . '>' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        // Send Email to ASP.
        mail("forms@leemtek.com", $varSubject, $varMessage, $varHeaders);

        http_response_code(200);
        exit(0);
    } else {
        // Incorrect key or something.
        http_response_code(400);
        exit(0);
    } // if
?>
