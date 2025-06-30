<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Content-Type: application/json');
$pdo = new PDO('mysql:host=mysql80.nnzzm.sakura.ne.jp;dbname=nnzzm_dentist;charset=utf8', 'nnzzm_dentist', 'NZMtomjerry0863');
$stmt = $pdo->query('SELECT id, name, date, time_slot, content FROM reservations');
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
