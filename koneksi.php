<?php

$host     = "teguhprasetyo.web.id";
$user     = "dicha";
$password = "2aUQ28Rw";
$database = "pajak";
$port     = 3306;

$conn = mysqli_connect($host, $user, $password, $database, $port);

if (!$conn) {
    die("Koneksi database gagal: " . mysqli_connect_error());
}
?>