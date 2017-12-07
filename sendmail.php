<?php

    error_reporting(0);
    /*
    print("Momentan keine Funktion");
    exit;
    */

    $file = "ipsperre.txt.move";
    $end_file = "ipsperre.txt";
    $time = time();
    $limit = 300;
    $found = 0;

    $mailer = "kunst@roswithaschneider.de";
    $webmaster = "kunst@roswithaschneider.de";

    function form_check($str, $limit) {
        $illegal = array('\'', '-', '\\', '"');
        if(strlen($str) > $limit) {
            echo "Zu lange Zeichenkette.";
            exit;
        }
        foreach($illegal as $val) {
            if(preg_match("/$val/", $str)) {
                echo "Verbotene Zeichen.";
                exit;
            }
        }
    }

    $email = $_GET['email'];
    $name = $_GET['name'];
    $msg = $_GET['msg'];

    $all_entries = array($email, $name, $msg);
    foreach($all_entries as $val) {
        if(empty($val)) {
            echo "Bitte alle Felder ausfüllen.";
            exit;
        }
    }

    form_check($name, 100);    

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Fehler in Email.";
        exit;
    }

    /* IP Sperre */

    $lines = file($end_file);
    $fp = fopen($file, "a");

    foreach($lines as $line_num => $line) {
        $thisip = explode(":", $line);
        if( ($thisip[0] == $_SERVER['REMOTE_ADDR']) && ($time - $thisip[1] < $limit))  {
            $found = 1;
            $rem_stamp = $time - $thisip[1];
        }
    }

    foreach($lines as $line_num => $line) {
        $thisip = explode(":", $line);
        $check_lim = $time - $thisip[1];
        if($check_lim < $limit) {
            fputs($fp, $line);
        }
    }

    if($found == 1) {
        $rem_stamp = $limit - $rem_stamp;
        $min = $rem_stamp / 60;
        $sec = $rem_stamp % 60;
        if(floor($min) == 0) {
            echo $sec . "s warten.";
        }
        else {
            echo floor($min) .  "min " . $sec . "s warten.";
        }
        fclose($fp);
        @rename($file, $end_file);
        exit;
    }

    /* END IP Sperre ********************************************************************/

    $msg = urldecode($msg);

    $subject = "Nachricht von $name";
    $msg_body = "IP: Adresse: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $msg_body = $msg_body . "Angegebene email: $email\n\n";
    $msg_body = $msg_body . "Nachricht:\n\n";
    $msg_body = $msg_body . "\n" . $msg;
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";
    $headers .= "From: $mailer\n"; 
    $headers .= "Reply-To: $email";	
    
    @mail($webmaster, $subject, $msg_body, $headers, "-f kunst@roswithaschneider.de");

    echo "Versendet.";

    /*  IP für $limit Sekunden sperren */
    if($found == 0) {
        fputs($fp, $_SERVER['REMOTE_ADDR'] . ":" . $time . "\n");
    }
    fclose($fp);
    @rename($file, $end_file);
    exit;
?>

