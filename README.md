# Tentang
Implementasi *service* CRUD dengan skema REST API untuk aplikasi pemilu sederhana. Dibuat untuk memenuhi penugasan mata kuliah TIF21-31-46 Pengembangan Aplikasi Web. 

# Anggota Kelompok
| Nama | NIM |
| :----------------: | :--------------: |
| Ahmad Zidan | 19/439806/TK/48536 |
| Denny Dewanta | 19/444045/TK/49241  |
| Daffa Bil Nadzary | 19/439811/TK/48541  |
| Iman Kahfi Aliza | 19/440887/TK/48681  |
| Muhammad Rifat Bagus Adikusuma | 20/456371/TK/50501  |

# Pemakaian
*Install* semua *package* dan *depedencies*-nya
> pip install -U -r requirements.txt

Kemudian jalankan perintah berikut untuk memulai *service* API
> uvicorn pemilu-kmteti.main:app --reload

Untuk melihat dokumentasi API, silakan menuju
>  http://localhost:8000/docs
