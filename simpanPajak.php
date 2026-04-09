<?php

$conn = new mysqli("localhost","root","","db_pajak");

if($conn->connect_error){
    die("Koneksi gagal");
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Ambil data dari POST
    $npwp = $_POST['npwp'] ?? '';
    $nama = $_POST['nama'] ?? '';
    $ptkp = $_POST['ptkp'] ?? '';
    $bulan = $_POST['bulan'] ?? '';
    $tahun = $_POST['tahun'] ?? '';
    $penghasilan1 = $_POST['penghasilan1'] ?? 0;
    $penghasilan2 = $_POST['penghasilan2'] ?? 0;
    $penghasilan3 = $_POST['penghasilan3'] ?? 0;
    $penghasilan4 = $_POST['penghasilan4'] ?? 0;
    $bruto = $_POST['bruto'] ?? 0;
    $kategori = $_POST['kategori'] ?? '';
    $tarif = $_POST['tarif'] ?? 0;
    $pajak = $_POST['pajak'] ?? 0;
    $biayaJabatan = $_POST['biayaJabatan'] ?? 0;
    $iuranPensiun = $_POST['iuranPensiun'] ?? 0;

    // Query dengan ON DUPLICATE KEY UPDATE
    $sql = "INSERT INTO pajak_bulanan 
            (npwp, nama, ptkp, bulan, tahun, penghasilan1, penghasilan2, penghasilan3, penghasilan4, bruto, kategori, tarif, pajak, biayaJabatan, iuranPensiun) 
            VALUES 
            ('$npwp', '$nama', '$ptkp', '$bulan', '$tahun', '$penghasilan1', '$penghasilan2', '$penghasilan3', '$penghasilan4', '$bruto', '$kategori', '$tarif', '$pajak', '$biayaJabatan', '$iuranPensiun')
            ON DUPLICATE KEY UPDATE 
            nama = VALUES(nama),
            ptkp = VALUES(ptkp),
            penghasilan1 = VALUES(penghasilan1),
            penghasilan2 = VALUES(penghasilan2),
            penghasilan3 = VALUES(penghasilan3),
            penghasilan4 = VALUES(penghasilan4),
            bruto = VALUES(bruto),
            kategori = VALUES(kategori),
            tarif = VALUES(tarif),
            pajak = VALUES(pajak),
            biayaJabatan = VALUES(biayaJabatan),
            iuranPensiun = VALUES(iuranPensiun)";

    if($conn->query($sql)){
        echo "Data berhasil diperbarui dengan input terbaru";
    } else {
        echo "Error: " . $conn->error;
    }
}

$conn->close();
?>