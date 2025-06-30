<?php
// CORSヘッダー
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Content-Type: application/json');

// プリフライトリクエスト（OPTIONS）の場合は即終了
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);
$pdo = new PDO('mysql:host=mysql80.nnzzm.sakura.ne.jp;dbname=nnzzm_dentist;charset=utf8', 'nnzzm_dentist', 'NZMtomjerry0863');
$stmt = $pdo->prepare('INSERT INTO reservations (name, date, time_slot, content) VALUES (?, ?, ?, ?)');
$stmt->execute([$data['name'], $data['date'], $data['time_slot'], $data['content']]);
echo json_encode(['result' => 'ok']);
