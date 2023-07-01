# Back-end

Ini adalah bagian pemrosesan data dari proyek WebGIS Pemetaan Pondok Pesantren di Bantul, Yogyakarta

## Memulai

untuk menjalankan proyek ini di local anda, ikuti langkah - langkah berikut:

## Persyaratan

- Node.Js (versi 12.0 atau lebih tinggi)
- npm (versi 6.0 atau lebih tinggi)

## Instalasi

Clone repositori ke mesin lokal Anda menggunakan Git

```git
git clone git@github.com:ardwiinoo/ta_webgis.git
```

Masuk direktori proyek

```git
cd ./backend
```

Install dependensi yang dibutuhkan

```git
npm install 
```

## Config Database

Duplikat file `.env.example` dan ubah namanya menjadi `.env` kemudian buat database baru di local anda (proyek ini menggunakan SQL database)

lengkapi semua variabel pada `.env`  

```git
PORT = your_port
DB_USERNAME='your_db_user'
DB_PASSWORD='your_db_password'
DB_PORT=your_db_port
DB_HOST='your_db_host'
JWT_SECRET=your_secret_key
JWT_REFRESH_SECRET=your_refresh_secret
```

## Menjalankan

```git
npm run start
```

Ini akan memulai web server dan secara otomatis membukanya di browser web default Anda. Jika aplikasi tidak terbuka secara otomatis, buka <http://localhost:5000> di browser web Anda.

## REST API

terdapat 6 endpoints yang berhasil dibuat sejauh ini untuk memenuhi kebutuhan proyek ini.

version : **v1**

| Endpoint | URL | Deskripsi |
| -------- | --- | --------- |
| GET | `/location` | Mendapatkan semua data pondok pesantren |
| GET | `/location/{id}` | Mendapatkan single data pondok pesantren dengan ID tertentu |
| POST | `/location/nearest` | Mendapatkan semua data pondok pesantren berdasarkan lokasi terdekat dari pengguna |
| POST | `/login` | Melakukan authentikasi dengan JWT |
| DELETE | `/register` | Menambah user baru |
| GET | `/docs` | Dokumentasi dari endpoint yang dimiliki |

## Author

| [<img src="https://avatars.githubusercontent.com/ardwiinoo" width="100px;"/><br /><sub><b>Arif Dwi Nugroho</b></sub>](https://github.com/ardwiinoo) | [<img src="https://avatars.githubusercontent.com/nuruddinhid" width="100px;"/><br /><sub><b>Nuruddin Hidayat</b></sub>](https://github.com/nuruddinhid) |
| :---: | :---: |
