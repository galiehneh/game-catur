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
   docker build -t game-catur .
   docker run -d -p 3000:80 --name game-catur game-catur
   ```

3. **Akses game**:
   Buka browser dan kunjungi: http://localhost:3000

### Menjalankan Tanpa Docker

1. **Buka file HTML langsung**:
   - Buka `index.html` di browser web modern
   - Game akan langsung dapat dimainkan

## 🛠️ Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Chess Engine**: Custom implementation dengan vanilla JavaScript
- **Container**: Docker dengan Nginx Alpine
- **Font**: Noto Sans Symbols untuk mendukung Unicode chess pieces
- **Deployment**: Docker container di port 3000

## 📁 Struktur Proyek

```
game-catur/
├── index.html          # File utama game catur (menggunakan custom chess engine)
├── Dockerfile          # Konfigurasi Docker container
├── docker-run.bat      # Script deployment untuk Windows
└── README.md           # Dokumentasi proyek
```

**Catatan**: Proyek saat ini berisi file-file utama yang diperlukan untuk menjalankan game catur. File-file tambahan yang disebutkan dalam dokumentasi sebelumnya mungkin telah dipindahkan atau diarsipkan.

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
docker build -t game-catur .
```

### Run Container
```bash
docker run -d -p 3000:80 --name game-catur game-catur
```

### Stop Container
```bash
docker stop game-catur
```

### Remove Container
```bash
docker rm game-catur
```

### View Logs
```bash
docker logs game-catur
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
- `index.html`: File utama yang berisi seluruh game logic, UI, dan styling dalam satu file
- `Dockerfile`: Konfigurasi container Nginx untuk deployment
- `docker-run.bat`: Script otomatis untuk deployment di Windows

## 🎨 Fitur Teknis

### Chess Logic (Custom Implementation)
- **Custom Chess Engine**: Dibuat dari nol dengan vanilla JavaScript
- **Move Validation**: Validasi gerakan untuk semua jenis pion (pawn, rook, knight, bishop, queen, king)
- **Game State Management**: Deteksi check dan checkmate otomatis
- **Special Moves**: Pawn promotion, castling, dan en passant capture
- **AI Opponent**: Komputer dengan algoritma minimax untuk permainan yang menantang
- **Move History**: Sistem undo untuk membatalkan langkah terakhir

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
docker logs game-catur

# Restart container
docker restart game-catur
```

### Port 3000 Sudah Digunakan
```bash
# Gunakan port lain
docker run -d -p 3001:80 --name game-catur game-catur
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
