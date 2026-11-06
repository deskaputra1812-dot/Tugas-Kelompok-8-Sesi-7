const express = require('express');
const app = express();
const port = 3000;

const dataAnggota = [
  { id: 1, nama: "Deska Wahyu Eka Putra", nim: "20250040030" },
  { id: 2, nama: "Anmas Prabuokto", nim: "20250040084" },
  { id: 3, nama: "Muhammad Chikal Ziaulhaq", nim: "20250040072" },
  { id: 4, nama: "Juwita", nim: "20250040146" }
];

app.get('/', (req, res) => {
  res.send(`Selamat datang di server Kelompok 8`);
});

app.get('/team/:nama', (req, res) => {
  res.send(`Hai, saya ${req.params.nama} dari Kelompok 8`);
});

app.get('/info', (req, res) => {
  res.json(dataAnggota);
});

app.get('/data', (req, res) => {
  res.redirect('/info');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});