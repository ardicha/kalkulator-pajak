<?php

$conn = new mysqli("localhost","root","","db_pajak");

if($conn->connect_error){
    die("Koneksi gagal");
}

if($_SERVER["REQUEST_METHOD"] == "POST"){

$npwp = $_POST['npwp'] ?? '';
$nip = $_POST['nip'] ?? '';
$nama = $_POST['nama'] ?? '';
$ptkp = $_POST['ptkp'] ?? '';
$bulan = $_POST['bulan'] ?? '';
$tahun = $_POST['tahun'] ?? '';
$gaji = $_POST['gaji'] ?? 0;
$penghasilan_lain = $_POST['penghasilan_lain'] ?? 0;
$bruto = $_POST['bruto'] ?? 0;
$kategori = $_POST['kategori'] ?? '';
$tarif = $_POST['tarif'] ?? 0;
$pajak = $_POST['pajak'] ?? 0;

$sql = "INSERT INTO pajak_bulanan
(npwp,nip,nama,ptkp,bulan,tahun,gaji,penghasilan_lain,bruto,kategori,tarif,pajak)
VALUES
('$npwp','$nip','$nama','$ptkp','$bulan','$tahun','$gaji','$penghasilan_lain','$bruto','$kategori','$tarif','$pajak')";

if($conn->query($sql)){
    echo "Data berhasil disimpan";
}else{
    echo "Error: ".$conn->error;
}

}

$conn->close();
?>