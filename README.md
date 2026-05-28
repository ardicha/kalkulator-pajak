# Kalkulator Pajak PPh 21 (TER & Akhir Periode)

Aplikasi web untuk menghitung Pajak Penghasilan Pasal 21 berdasarkan **PMK Nomor 168 Tahun 2023**. Sistem ini dirancang untuk menangani dua skema perhitungan: **Bulanan (TER)** untuk masa Januari-November dan **Akhir Periode** untuk penyesuaian pajak di bulan Desember menggunakan tarif Pasal 17.

## 🚀 Fitur Utama
- **Kalkulasi Dual-Mode:** Mendukung metode TER (Bulanan) dan skema Pasal 17 (Tahunan/Akhir Periode).
- **Logika Kategori Otomatis:** Penentuan Kategori A, B, atau C secara otomatis berdasarkan status PTKP.
- **Rincian Akhir Periode Lengkap:** Transparansi perhitungan mulai dari Biaya Jabatan, Iuran Pensiun, hingga PKP.
- **Manajemen Database:** Integrasi MySQL untuk menyimpan histori perhitungan pajak.
- **Antarmuka Responsif:** Desain UI yang bersih dengan fitur *Reset* dan *Print-friendly*.

## ⚙️ Cara Kerja Sistem

### 1. Pajak Bulanan (Metode TER)
Digunakan untuk pemotongan pajak rutin setiap bulan (Januari - November):
- **Input:** Gaji Pokok + Penghasilan Lain.
- **Logika:** Sistem mencocokkan total bruto dengan tabel tarif efektif berdasarkan Kategori (A, B, atau C).
- **Hasil:** Nominal pajak yang langsung dipotong dari penghasilan bruto bulan berjalan.

### 2. Pajak Akhir Periode (Metode Tahunan/Desember)
Digunakan pada bulan Desember untuk memastikan total pajak setahun akurat:
- **Total Bruto Selama Bekerja:** Akumulasi Penghasilan 1 s/d 4 dalam satu tahun pajak.
- **Komponen Pengurang:** - **Biaya Jabatan:** 5% dari Bruto (maksimal sesuai regulasi).
  - **Iuran Pensiun:** Pengurang berdasarkan iuran yang dibayarkan pegawai.
- **PKP (Penghasilan Kena Pajak):** Penghasilan Netto (Bruto - Pengurang) dikurangi nilai PTKP.
- **Pajak Akhir Periode:** PPh 21 Terutang setahun dikurangi dengan total pajak yang telah dipotong sebelumnya (Jan-Nov).

## 🛠️ Teknologi
* **Frontend:** HTML5, CSS3, JavaScript (Native)
* **Backend:** PHP
* **Database:** MySQL
* **Tools:** Visual Studio Code, XAMPP, GitHub Pages

---
*Developed by Ardicha Trianan Dewi*

## 📂 Struktur Folder
```text
kalkulator-pajak/
├── index.html        # Struktur UI dan elemen formulir input
├── style.css         # Desain visual, layout responsif, dan animasi
├── data.js           # Logika utama (Kalkulasi TER & Progresif Pasal 17)
├── koneksi.php       # Konfigurasi koneksi database MySQL
├── simpanPajak.php   # Backend untuk menyimpan data ke database
└── ambilPajak.php    # Backend untuk memuat riwayat perhitungan
