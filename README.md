# Chess Game vs Computer

Sebuah game catur interaktif yang dapat dimainkan melawan komputer dengan antarmuka web yang sederhana dan elegan. Game ini dikemas dalam Docker container untuk kemudahan deployment.

## 🎮 Fitur Utama

- **Game Mode**: Player vs Computer
- **Validasi Gerakan**: Semua aturan catur standar diterapkan
- **Check & Checkmate Detection**: Deteksi skak dan skakmat otomatis
- **Undo Move**: Kemampuan untuk membatalkan langkah terakhir
- **Responsive Design**: Antarmuka yang dapat disesuaikan dengan berbagai ukuran layar
- **Docker Container**: Kemudahan deployment dan skalabilitas

## 🚀 Quick Start

### Menggunakan Docker (Direkomendasikan)

1. **Clone repository**:
   ```bash
   git clone https://github.com/galiehneh/game-catur.git
   cd game-catur
   ```

2. **Jalankan deployment script**:
   ```bash
   # Untuk Windows
   docker-run.bat

   # Atau manual dengan Docker commands:
   docker build -t chess-game .
   docker run -d -p 3000:80 --name chess-game chess-game
   ```

3. **Akses game**:
   Buka browser dan kunjungi: http://localhost:3000

### Menjalankan Tanpa Docker

1. **Buka file HTML langsung**:
   - Buka `index.html` di browser web modern
   - Game akan langsung dapat dimainkan

## 🛠️ Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Container**: Docker dengan Nginx Alpine
- **Font**: Noto Sans Symbols untuk mendukung Unicode chess pieces
- **Deployment**: Docker container di port 3000

## 📁 Struktur Proyek

```
game-catur/
├── index.html          # File utama game catur
├── Dockerfile          # Konfigurasi Docker container
├── docker-run.bat      # Script deployment untuk Windows
├── README.md           # Dokumentasi proyek
├── chess-game.html     # Versi alternatif game
├── chess.html          # Versi sederhana
├── chess.js            # JavaScript untuk logika catur
├── simple-chess-game.html
├── simple-chess.html
├── simple-chess.js
├── working-chess.html
├── final-chess.html
└── run_server.bat     # Script untuk menjalankan server lokal
```

## 🎯 Cara Bermain

1. **Mulai Game**: Klik tombol "New Game" untuk memulai permainan baru
2. **Gerakan Pion**: Klik pada pion yang ingin dipindahkan, kemudian klik kotak tujuan
3. **Highlight**: Kotak yang dapat dituju akan di-highlight
4. **Giliran**: Putih mulai terlebih dahulu, kemudian gantian dengan hitam (komputer)
5. **Check**: Sistem akan mendeteksi ketika raja dalam posisi terancam
6. **Checkmate**: Game berakhir ketika salah satu raja tidak dapat diselamatkan
7. **Undo**: Gunakan tombol "Undo" untuk membatalkan langkah terakhir

## 🐳 Docker Commands

### Build Image
```bash
docker build -t chess-game .
```

### Run Container
```bash
docker run -d -p 3000:80 --name chess-game chess-game
```

### Stop Container
```bash
docker stop chess-game
```

### Remove Container
```bash
docker rm chess-game
```

### View Logs
```bash
docker logs chess-game
```

## 🔧 Development

### Prerequisites
- Docker Desktop
- Browser web modern (Chrome, Firefox, Safari, Edge)

### Local Development
1. Edit file `index.html` untuk modifikasi UI
2. Edit JavaScript inline untuk logika game
3. Test perubahan dengan membuka file langsung di browser
4. Untuk testing Docker: rebuild image dan run container baru

### File Utama
- `index.html`: Berisi seluruh game logic, UI, dan styling
- `Dockerfile`: Konfigurasi container Nginx
- `docker-run.bat`: Script otomatis untuk deployment

## 🎨 Fitur Teknis

### Chess Logic
- Validasi gerakan untuk semua jenis pion (pawn, rook, knight, bishop, queen, king)
- Deteksi check dan checkmate
- Pawn promotion
- Castling (rook + king movement)
- En passant capture

### UI/UX
- Grid 8x8 dengan warna kotak bergantian
- Highlight untuk gerakan yang valid
- Indikator giliran pemain
- Pesan status game
- Responsive design

### Docker Configuration
- Base image: nginx:alpine (ringan dan aman)
- Port mapping: 3000 (host) -> 80 (container)
- Static file serving dengan Nginx
- UTF-8 encoding untuk mendukung Unicode symbols

## 🐛 Troubleshooting

### Chess Pieces Tidak Tampil dengan Benar
- Pastikan browser mendukung Unicode
- Clear browser cache
- Coba browser lain (Chrome recommended)

### Docker Container Tidak Berjalan
```bash
# Check container status
docker ps -a

# Check logs
docker logs chess-game

# Restart container
docker restart chess-game
```

### Port 3000 Sudah Digunakan
```bash
# Gunakan port lain
docker run -d -p 3001:80 --name chess-game chess-game
```

## 📝 Lisensi

Proyek ini dibuat untuk tujuan edukasi dan dapat digunakan secara bebas.

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:
1. Fork repository
2. Buat branch untuk fitur baru
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

## 📞 Support

Jika ada pertanyaan atau masalah:
- Buat issue di GitHub repository
- Pastikan menyertakan informasi sistem dan langkah-langkah untuk mereproduksi masalah

---

**Selamat bermain catur! ♟️♜♞♝♛♚**
