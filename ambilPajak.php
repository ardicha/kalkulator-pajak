<?php
include 'koneksi.php';

$npwp = mysqli_real_escape_string($conn, $_GET['npwp']);
$tahun = mysqli_real_escape_string($conn, $_GET['tahun']);

$sql = "SELECT SUM(bruto) as total_bruto, 
               SUM(pajak) as total_ter_dibayar, 
               COUNT(bulan) as jumlah_record, 
               ptkp 
        FROM pajak_bulanan 
        WHERE npwp = '$npwp' AND tahun = '$tahun'
        GROUP BY npwp, ptkp";

$result = mysqli_query($conn, $sql);
$data = mysqli_fetch_assoc($result);

if (!$data) {
    echo json_encode(null);
} else {
    echo json_encode($data);
}
?>