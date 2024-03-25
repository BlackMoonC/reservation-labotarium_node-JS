# User API Spec

## Autentikasi & Manajemen Penggun

### Registration User Mahasiswa

Endpoint : POST /api/users

Request Body :

```json
{
  "name" : "Rakhel Cakra"
  "email" : "rakelsera2001@gmail.com"
  "noHp" : "0820000000000000"
  "role" : "mahasiswa"
  "room_reserve" : "1"
}
```

Response Body (Success) : 

```json
{
  "message" : "Akun telah berhasil registrasi"
}
```

Response  Body (Failed) : 
```json
  "error" : "Failed"
```



## Get All User

## Get User

## Update User

## Delete User

1. Autentikasi dan Manajemen Pengguna
- Registrasi Pengguna
Endpoint: /users/register
Method: POST
Body:
nama
email
noHP
password
Response: User ID, status pendaftaran
- Login Pengguna
Endpoint: /users/login
Method: POST
Body:
email
password
Response: Token autentikasi