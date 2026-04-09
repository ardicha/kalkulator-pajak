<?php
include 'koneksi.php';

$npwp = mysqli_real_escape_string($conn, $_GET['npwp']);
$tahun = mysqli_real_escape_string($conn, $_GET['tahun']);

$sqlDetail = "SELECT bulan, penghasilan1, penghasilan2, penghasilan3, penghasilan4, bruto 
              FROM pajak_bulanan 
              WHERE npwp = '$npwp' AND tahun = '$tahun' 
              ORDER BY FIELD(bulan, 'januari', 'februari', 'maret', 'april', 'mei', 'juni', 'juli', 'agustus', 'september', 'oktober', 'november', 'desember')";

$resDetail = mysqli_query($conn, $sqlDetail);
$listBulanan = [];
while ($row = mysqli_fetch_assoc($resDetail)) {
    $listBulanan[] = $row;
}

$sqlTotal = "SELECT SUM(bruto) as total_bruto, 
                    SUM(pajak) as total_ter_dibayar, 
                    SUM(biayaJabatan) as biayaJabatan,
                    SUM(iuranPensiun) as iuranPensiun,  
                    ptkp 
             FROM pajak_bulanan 
             WHERE npwp = '$npwp' AND tahun = '$tahun'
             GROUP BY npwp, ptkp";

$resTotal = mysqli_query($conn, $sqlTotal);
$dataTotal = mysqli_fetch_assoc($resTotal);

if (!$dataTotal) {
    echo json_encode(null);
} else {
    // Gabungkan data total dan list bulanan
    echo json_encode([
        'summary' => $dataTotal,
        'details' => $listBulanan
    ]);
}
?>
