<?php
$data = json_decode(file_get_contents('php://input'));
$name = $data->name;
$tel = $data->tel;
$email = $data->email !== '' ? $data->email : '—';
$comment = $data->comment !== '' ? $data->comment : '—';
$mes = "Имя: $name \nE-mail: $email \nТелефон: $tel \nКомментарий: $comment";
mail('bruno.00@mail.ru', 'Запись', $mes, 'From: bruno.00@mail.ru');
?>