<?php

$recepient = "info@eugene-stone.comli.com";
$sitename = "Armata Financical Group";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formname = trim($_POST["formname"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "
Имя: $name <br>
Телефон: $phone <br>
Форма: $formname <br>
";

mail($recepient, $pagetitle, $message, "Content-type: formname/plain; charset=\"utf-8\"\n From: $recepient");