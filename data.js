// Data PTKP untuk menentukan Kategori
const dataPTKP = {
    // Kategori A
    TK0: { kategori: 'A' },
    TK1: { kategori: 'A' },
    K0: { kategori: 'A' },

    // Kategori B
    TK2: { kategori: 'B' },
    TK3: { kategori: 'B' },
    K1: { kategori: 'B' },
    K2: { kategori: 'B' },

    // Kategori C
    K3: { kategori: 'C' }
};

// TARIF KATEGORI A
const tarifKategoriA = [
    { min: 0, max: 5400000, persen: 0.0 },
    { min: 5400000, max: 5650000, persen: 0.25 },
    { min: 5650000, max: 5950000, persen: 0.5 },
    { min: 5950000, max: 6300000, persen: 0.75 },
    { min: 6300000, max: 6750000, persen: 1.0 },
    { min: 6750000, max: 7500000, persen: 1.25 },
    { min: 7500000, max: 8550000, persen: 1.5 },
    { min: 8550000, max: 9650000, persen: 1.75 },
    { min: 9650000, max: 10050000, persen: 2.0 },
    { min: 10050000, max: 10350000, persen: 2.25 },
    { min: 10350000, max: 10700000, persen: 2.5 },
    { min: 10700000, max: 11050000, persen: 3.0 },
    { min: 11050000, max: 11600000, persen: 3.5 },
    { min: 11600000, max: 12500000, persen: 4.0 },
    { min: 12500000, max: 13750000, persen: 5.0 },
    { min: 13750000, max: 15100000, persen: 6.0 },
    { min: 15100000, max: 16950000, persen: 7.0 },
    { min: 16950000, max: 19750000, persen: 8.0 },
    { min: 19750000, max: 24150000, persen: 9.0 },
    { min: 24150000, max: 26450000, persen: 10.0 },
    { min: 26450000, max: 28000000, persen: 11.0 },
    { min: 28000000, max: 30050000, persen: 12.0 },
    { min: 30050000, max: 32400000, persen: 13.0 },
    { min: 32400000, max: 35400000, persen: 14.0 },
    { min: 35400000, max: 39100000, persen: 15.0 },
    { min: 39100000, max: 43850000, persen: 16.0 },
    { min: 43850000, max: 47800000, persen: 17.0 },
    { min: 47800000, max: 51400000, persen: 18.0 },
    { min: 51400000, max: 56300000, persen: 19.0 },
    { min: 56300000, max: 62200000, persen: 20.0 },
    { min: 62200000, max: 68600000, persen: 21.0 },
    { min: 68600000, max: 77500000, persen: 22.0 },
    { min: 77500000, max: 89000000, persen: 23.0 },
    { min: 89000000, max: 103000000, persen: 24.0 },
    { min: 103000000, max: 125000000, persen: 25.0 },
    { min: 125000000, max: 157000000, persen: 26.0 },
    { min: 157000000, max: 206000000, persen: 27.0 },
    { min: 206000000, max: 337000000, persen: 28.0 },
    { min: 337000000, max: 454000000, persen: 29.0 },
    { min: 454000000, max: 550000000, persen: 30.0 },
    { min: 550000000, max: 695000000, persen: 31.0 },
    { min: 695000000, max: 910000000, persen: 32.0 },
    { min: 910000000, max: 1400000000, persen: 33.0 },
    { min: 1400000000, max: Infinity, persen: 34.0 }
];

// TARIF KATEGORI B
const tarifKategoriB = [
    { min: 0, max: 6200000, persen: 0.0 },
    { min: 6200000, max: 6500000, persen: 0.25 },
    { min: 6500000, max: 6850000, persen: 0.5 },
    { min: 6850000, max: 7300000, persen: 0.75 },
    { min: 7300000, max: 9200000, persen: 1.0 },
    { min: 9200000, max: 10750000, persen: 1.5 },
    { min: 10750000, max: 11250000, persen: 2.0 },
    { min: 11250000, max: 11600000, persen: 2.5 },
    { min: 11600000, max: 12600000, persen: 3.0 },
    { min: 12600000, max: 13600000, persen: 4.0 },
    { min: 13600000, max: 14950000, persen: 5.0 },
    { min: 14950000, max: 16400000, persen: 6.0 },
    { min: 16400000, max: 18450000, persen: 7.0 },
    { min: 18450000, max: 21850000, persen: 8.0 },
    { min: 21850000, max: 26000000, persen: 9.0 },
    { min: 26000000, max: 27700000, persen: 10.0 },
    { min: 27700000, max: 29350000, persen: 11.0 },
    { min: 29350000, max: 31450000, persen: 12.0 },
    { min: 31450000, max: 33950000, persen: 13.0 },
    { min: 33950000, max: 37100000, persen: 14.0 },
    { min: 37100000, max: 41100000, persen: 15.0 },
    { min: 41100000, max: 45800000, persen: 16.0 },
    { min: 45800000, max: 49500000, persen: 17.0 },
    { min: 49500000, max: 53800000, persen: 18.0 },
    { min: 53800000, max: 58500000, persen: 19.0 },
    { min: 58500000, max: 64000000, persen: 20.0 },
    { min: 64000000, max: 71000000, persen: 21.0 },
    { min: 71000000, max: 80000000, persen: 22.0 },
    { min: 80000000, max: 93000000, persen: 23.0 },
    { min: 93000000, max: 109000000, persen: 24.0 },
    { min: 109000000, max: 129000000, persen: 25.0 },
    { min: 129000000, max: 163000000, persen: 26.0 },
    { min: 163000000, max: 211000000, persen: 27.0 },
    { min: 211000000, max: 374000000, persen: 28.0 },
    { min: 374000000, max: 459000000, persen: 29.0 },
    { min: 459000000, max: 555000000, persen: 30.0 },
    { min: 555000000, max: 704000000, persen: 31.0 },
    { min: 704000000, max: 957000000, persen: 32.0 },
    { min: 957000000, max: 1405000000, persen: 33.0 },
    { min: 1405000000, max: Infinity, persen: 34.0 }
];

// TARIF KATEGORI C
const tarifKategoriC = [
    { min: 0, max: 6600000, persen: 0.0 },
    { min: 6600000, max: 6950000, persen: 0.25 },
    { min: 6950000, max: 7350000, persen: 0.5 },
    { min: 7350000, max: 7800000, persen: 0.75 },
    { min: 7800000, max: 8850000, persen: 1.0 },
    { min: 8850000, max: 9800000, persen: 1.25 },
    { min: 9800000, max: 10950000, persen: 1.5 },
    { min: 10950000, max: 11200000, persen: 1.75 },
    { min: 11200000, max: 12050000, persen: 2.0 },
    { min: 12050000, max: 12950000, persen: 3.0 },
    { min: 12950000, max: 14150000, persen: 4.0 },
    { min: 14150000, max: 15550000, persen: 5.0 },
    { min: 15550000, max: 17050000, persen: 6.0 },
    { min: 17050000, max: 19500000, persen: 7.0 },
    { min: 19500000, max: 22700000, persen: 8.0 },
    { min: 22700000, max: 26600000, persen: 9.0 },
    { min: 26600000, max: 28100000, persen: 10.0 },
    { min: 28100000, max: 30100000, persen: 11.0 },
    { min: 30100000, max: 32600000, persen: 12.0 },
    { min: 32600000, max: 35400000, persen: 13.0 },
    { min: 35400000, max: 38900000, persen: 14.0 },
    { min: 38900000, max: 43000000, persen: 15.0 },
    { min: 43000000, max: 47400000, persen: 16.0 },
    { min: 47400000, max: 51200000, persen: 17.0 },
    { min: 51200000, max: 55800000, persen: 18.0 },
    { min: 55800000, max: 60400000, persen: 19.0 },
    { min: 60400000, max: 66700000, persen: 20.0 },
    { min: 66700000, max: 74500000, persen: 21.0 },
    { min: 74500000, max: 83200000, persen: 22.0 },
    { min: 83200000, max: 95600000, persen: 23.0 },
    { min: 95600000, max: 110000000, persen: 24.0 },
    { min: 110000000, max: 134000000, persen: 25.0 },
    { min: 134000000, max: 169000000, persen: 26.0 },
    { min: 169000000, max: 221000000, persen: 27.0 },
    { min: 221000000, max: 390000000, persen: 28.0 },
    { min: 390000000, max: 463000000, persen: 29.0 },
    { min: 463000000, max: 561000000, persen: 30.0 },
    { min: 561000000, max: 709000000, persen: 31.0 },
    { min: 709000000, max: 965000000, persen: 32.0 },
    { min: 965000000, max: 1419000000, persen: 33.0 },
    { min: 1419000000, max: Infinity, persen: 34.0 }
];

// FUNGSI-FUNGSI PERHITUNGAN
function getKategoriFromPTKP(ptkp) {
    return dataPTKP[ptkp].kategori;
}

function getTarifPersen(kategori, total) {
    let tarifArray;

    switch (kategori) {
        case 'A':
            tarifArray = tarifKategoriA;
            break;
        case 'B':
            tarifArray = tarifKategoriB;
            break;
        case 'C':
            tarifArray = tarifKategoriC;
            break;
        default:
            tarifArray = tarifKategoriA;
    }

    for (let i = 0; i < tarifArray.length; i++) {
        if (total > tarifArray[i].min && total <= tarifArray[i].max) {
            return tarifArray[i].persen;
        }
    }
    return 0;
}

function formatRupiah(angka) {
    if (angka === undefined || angka === null || isNaN(angka)) return 'Rp 0';

    const isNegative = angka < 0;
    const absAngka = Math.abs(angka);

    // Format dengan titik sebagai pemisah ribuan
    const formatted = 'Rp ' + absAngka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return isNegative ? '- ' + formatted : formatted;
}

function hitungPajak() {
    try {

        const npwp = document.getElementById('npwp').value;
        const nip = document.getElementById('nip').value;
        const nama = document.getElementById('nama').value;
        const ptkp = document.getElementById('ptkp').value;

        let gaji = parseFloat(document.getElementById('gaji').value) || 0;
        let penghasilanLain = parseFloat(document.getElementById('penghasilanLain').value) || 0;

        if (npwp === "" || nip === "" || nama === "") {
            alert("Mohon isi data pegawai");
            return;
        }

        if (gaji <= 0) {
            alert("Gaji harus diisi");
            return;
        }

        const total = gaji + penghasilanLain;

        const kategori = getKategoriFromPTKP(ptkp);

        const persen = getTarifPersen(kategori, total);

        const nominalPajak = total * (persen / 100);

        const thp = total - nominalPajak;

        fetch("simpanPajak.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                npwp: npwp,
                nip: nip,
                nama: nama,
                ptkp: ptkp,
                bulan: new Date().getMonth() + 1,
                tahun: new Date().getFullYear(),
                gaji: gaji,
                penghasilan_lain: penghasilanLain,
                bruto: total,
                kategori: kategori,
                tarif: persen,
                pajak: nominalPajak
            })
        })
            .then(res => res.text())
            .then(data => {
                console.log("Response:", data);
            });

        // Update level
        document.getElementById('terLevel').textContent = kategori;

        // Update persen
        document.getElementById('terPersen').textContent = persen.toFixed(2).replace('.', ',') + '%';

        // Update nominal
        document.getElementById('terNominal').textContent = formatRupiah(nominalPajak);

        // Update rincian hasil
        document.getElementById('detailGaji').textContent = formatRupiah(gaji);
        document.getElementById('detailLain').textContent = formatRupiah(penghasilanLain);
        document.getElementById('detailTotal').textContent = formatRupiah(total);
        document.getElementById('detailPajak').textContent = '- ' + formatRupiah(nominalPajak);
        document.getElementById('detailTHP').textContent = formatRupiah(thp);

    } catch (error) {
        console.error('Error dalam perhitungan:', error);
        alert('Terjadi kesalahan dalam perhitungan. Mohon cek input Anda.');
    }
}

function reset() {
    // Reset input
    document.getElementById('npwp').value = '';
    document.getElementById('nip').value = '';
    document.getElementById('nama').value = '';
    document.getElementById('ptkp').value = 'TK1';
    document.getElementById('gaji').value = '';
    document.getElementById('penghasilanLain').value = '';

    // Reset hasil
    document.getElementById('terLevel').textContent = '-';
    document.getElementById('levelDesc').textContent = '';
    document.getElementById('terPersen').textContent = '0%';
    document.getElementById('terNominal').textContent = 'Rp 0';

    document.getElementById('detailGaji').textContent = 'Rp 0';
    document.getElementById('detailLain').textContent = 'Rp 0';
    document.getElementById('detailTotal').textContent = 'Rp 0';
    document.getElementById('detailPajak').textContent = '- Rp 0';
    document.getElementById('detailTHP').textContent = 'Rp 0';
};

function showPage(page) {
    document.getElementById('bulanan').style.display = (page === 'bulanan') ? 'block' : 'none';
    document.getElementById('akhir').style.display = (page === 'akhir') ? 'block' : 'none';
}

async function hitungPajakAkhir() {
    const npwp = document.getElementById('npwpAkhir').value;
    const tahun = document.getElementById('tahunAkhir').value;
    const gajiDesember = parseFloat(document.getElementById('gajiDesember').value) || 0;
    const penghasilanDesember = parseFloat(document.getElementById('penghasilanDesember').value) || 0;
    if (!npwp || !tahun) return alert("Isi NPWP dan Tahun!");

    // 1. Ambil data dari database
    const response = await fetch(`ambilPajak.php?npwp=${npwp}&tahun=${tahun}`);
    const dataDB = await response.json();

    if (!dataDB) return alert("Data tidak ditemukan di database!");

    const brutoJanNov = parseFloat(dataDB.total_bruto);
    const pajakJanNov = parseFloat(dataDB.total_ter_dibayar);
    const ptkpKey = dataDB.ptkp;
    const brutoSetahun = brutoJanNov + gajiDesember + penghasilanDesember

    // Misal kita ambil dari total data yang masuk di database untuk NIP tersebut
    const jumlahBulan = (parseInt(dataDB.jumlah_record) || 11) + 1; // Default ke 12 jika sudah akhir tahun

    // 2. Hitung Batas Pengurang secara Proporsional
    let biayaJabatan = 0.05 * brutoSetahun;
    let maxJabatan = 500000 * (jumlahBulan - 1) ; // Jika bulan ke-3, maka max 1,5jt
    if (biayaJabatan > maxJabatan) biayaJabatan = maxJabatan;

    let iuranPensiun = 0.02 * brutoSetahun;
    let maxPensiun = 200000 * (jumlahBulan - 1); // Jika bulan ke-3, maka max 600rb
    if (iuranPensiun > maxPensiun) iuranPensiun = maxPensiun;

    const netto = brutoSetahun - (biayaJabatan + iuranPensiun);

    // 3. Tentukan Nilai PTKP (Berdasarkan input kamu)
    const listPTKP = {
        'TK0': 54000000, 'TK/0': 54000000,
        'TK1': 58500000, 'TK/1': 58500000,
        'TK2': 63000000, 'TK/2': 63000000,
        'TK3': 67500000, 'TK/3': 67500000,
        'K0': 58500000, 'K/0': 58500000,
        'K1': 63000000, 'K/1': 63000000,
        'K2': 67500000, 'K/2': 67500000,
        'K3': 72000000, 'K/3': 72000000
    };

    const nilaiPTKP = listPTKP[ptkpKey] || 0;

    // 4. Hitung PKP
    let pkp = netto - nilaiPTKP;
    if (pkp < 0) pkp = 0;

    // 5. Hitung PPh 21 Setahun (Tarif Pasal 17 - Progresif)
    let pphSetahun = hitungPasal17(pkp);

    // 6. Hitung Selisih
    const selisih = pphSetahun - pajakJanNov;

    // 7. Update Tampilan UI
    document.getElementById('akhirBruto').textContent = formatRupiah(brutoSetahun);
    document.getElementById('akhirNetto').textContent = formatRupiah(netto);
    document.getElementById('akhirPKP').textContent = formatRupiah(pkp);
    document.getElementById('akhirPPh').textContent = formatRupiah(pphSetahun);
    document.getElementById('akhirPotong').textContent = formatRupiah(pajakJanNov);
    document.getElementById('akhirSelisih').textContent = formatRupiah(selisih);
    document.getElementById('akhirSelisihDetail').textContent = formatRupiah(selisih);
}

function hitungPasal17(pkp) {
    // Aturan Pajak: PKP dibulatkan ke bawah ke ribuan terdekat
    pkp = Math.floor(pkp / 1000) * 1000;

    let pajak = 0;

    if (pkp <= 60000000) {
        pajak = pkp * 0.05;
    } else if (pkp <= 250000000) {
        pajak = (60000000 * 0.05) + ((pkp - 60000000) * 0.15);
    } else if (pkp <= 500000000) {
        pajak = (60000000 * 0.05) + (190000000 * 0.15) + ((pkp - 250000000) * 0.25);
    } else if (pkp <= 5000000000) {
        pajak = (60000000 * 0.05) + (190000000 * 0.15) + (250000000 * 0.25) + ((pkp - 500000000) * 0.30);
    } else {
        pajak = (60000000 * 0.05) + (190000000 * 0.15) + (250000000 * 0.25) + (4500000000 * 0.30) + ((pkp - 5000000000) * 0.35);
    }

    return pajak;
}

function resetAkhir() {
    document.getElementById('npwpAkhir').value = '';
    document.getElementById('tahunAkhir').value = '';
    document.getElementById('akhirSelisih').textContent = '-';
    document.getElementById('akhirBruto').textContent = 'Rp 0';
    document.getElementById('akhirNetto').textContent = 'Rp 0';
    document.getElementById('akhirPKP').textContent = 'Rp 0';
    document.getElementById('akhirPPh').textContent = 'Rp 0';
    document.getElementById('akhirPotong').textContent = 'Rp 0';
    document.getElementById('gajiDesember').value = '';
    document.getElementById('penghasilanDesember').value = '';
};