3. Reservasi
- Buat Reservasi
Endpoint: /reservations
Method: POST
Headers:
Authorization: Bearer {token}
Body:
roomID
tanggalReservasi
waktuMulai
waktuSelesai
Response: ID reservasi, status
- Lihat Reservasi
Endpoint: /reservations/{userID}
Method: GET
Headers:
Authorization: Bearer {token}
Response: Daftar reservasi pengguna
- Batalkan Reservasi
Endpoint: /reservations/cancel/{reservationID}
Method: POST
Headers:
Authorization: Bearer {token}
Response: Status pembatalan