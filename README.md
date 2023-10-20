#Clone repository

Menjalankan backend
~#cd backend
~#npm install

Ubah settingan database yang berada di DBconnection/database/conn.js
const conDb = {
    database : "todo-list",
    username : "root",
    password : "",
    host : "localhost"
}
~#npm run start

Menjalankan frontend
~#cd todo-list-app
~#npm install
npm run dev




# Dokumentasi API Todo-list

Dokumentasi ini menjelaskan API Todo-list, backend untuk mengelola daftar tugas menggunakan Sequelize. Dibuat oleh Hudzaifah.

## Daftar Isi

- [Todo CRUD API](#todo-crud-api)
  - [GET - Mendapatkan Semua Data Todo](#get-mendapatkan-semua-data-todo)
  - [POST - Membuat Todo Baru](#post-membuat-todo-baru)
  - [PUT - Mengedit Todo](#put-mengedit-todo)
  - [DELETE - Menghapus Todo](#delete-menghapus-todo)
  - [GET - Mendapatkan Todo Pengguna](#get-mendapatkan-todo-pengguna)
  - [GET - Mendapatkan Todo Berdasarkan ID](#get-mendapatkan-todo-berdasarkan-id)
- [Type CRUD API](#type-crud-api)
  - [GET - Mendapatkan Semua Jenis Tugas](#get-mendapatkan-semua-jenis-tugas)
  - [POST - Membuat Jenis Tugas Baru](#post-membuat-jenis-tugas-baru)
  - [PUT - Mengedit Jenis Tugas](#put-mengedit-jenis-tugas)
  - [DELETE - Menghapus Jenis Tugas](#delete-menghapus-jenis-tugas)
- [User CRUD API](#user-crud-api)
  - [GET - Mendapatkan Semua Pengguna](#get-mendapatkan-semua-pengguna)
  - [POST - Membuat Pengguna Baru](#post-membuat-pengguna-baru)
  - [PUT - Mengedit Pengguna](#put-mengedit-pengguna)
  - [DELETE - Menghapus Pengguna](#delete-menghapus-pengguna)
- [Login & Registrasi User API](#login--registrasi-user-api)
  - [GET - Login](#get-login)
  - [GET - Cek Username](#get-cek-username)

## Todo CRUD API

### GET - Mendapatkan Semua Data Todo

Mendapatkan semua data tugas.

- **URL**: `http://localhost:5000/todo-list`
- **Authorization**: Bearer Token (token login pada Authorization Header)
- **Parameter Respon**:

  - Berhasil:
    ```json
    {
      "status": "ok",
      "data": []
    }
    ```

  - Gagal:
    ```json
    {
      "status": "err",
      "err": "keterangan error"
    }
    ```

### POST - Membuat Todo Baru

Membuat tugas baru.

- **URL**: `http://localhost:5000/todo-list`
- **Authorization**: Bearer Token (token login pada Authorization Header)
- **Parameter Request**: JSON-Body

  ```json
  {
    "title": "denger musik",
    "description": "santai sambil denger musik",
    "type": "santai"
  }

Parameter Respon:

Berhasil:
```json
Copy code
{
  "status": "ok",
  "data": {}
}
PUT - Mengedit Todo
Mengedit tugas yang ada.

URL: http://localhost:5000/todo-list

Authorization: Bearer Token (token login pada Authorization Header, digunakan sebagai data user)

Parameter Request: JSON-Body

json
Copy code
{
  "id": "17ef5392-2f69-4bc2-87e0-7c9d940a33a1",
  "title": "beli ayam bakarr2",
  "description": "sore ini beli ayam bakar di tempat biasa jangan lupa",
  "type": "makan,belanja"
}
DELETE - Menghapus Todo
Menghapus tugas yang ada.

URL: http://localhost:5000/todo-list

Authorization: Bearer Token (token login pada Authorization Header)

Parameter Request: JSON-Body

json
Copy code
{
  "id": "059ba787-f5b5-48e0-a30e-ca84c96bddb3"
}
GET - Mendapatkan Todo Pengguna
Mendapatkan tugas pengguna berdasarkan ID pengguna yang didapatkan dari bearer token.

URL: http://localhost:5000/todo-list-user
Authorization: Bearer Token (token login pada Authorization Header)
GET - Mendapatkan Todo Berdasarkan ID
Mendapatkan tugas berdasarkan ID.

URL: http://localhost:5000/todo-list-id

Authorization: Bearer Token (token login pada Authorization Header)

Parameter Request: JSON-Body

json
Copy code
{
  "id": "2386c3f2-f3c4-4019-8252-ce191b9942ec"
}
Type CRUD API
GET - Mendapatkan Semua Jenis Tugas
Mendapatkan semua data jenis tugas.

URL: http://localhost:5000/type
POST - Membuat Jenis Tugas Baru
Membuat jenis tugas baru.

URL: http://localhost:5000/type

Parameter Request: JSON-Body

json
Copy code
{
  "nama": "ayam",
  "idTodo": "970651fa-fc11-400b-9efa-0a843235454e"
}
PUT - Mengedit Jenis Tugas
Mengedit jenis tugas yang ada.

URL: http://localhost:5000/type

Parameter Request: JSON-Body

json
Copy code
{
  "id": "3ac7e355-1fe5-4401-874d-e67de92ad24e",
  "name": "name",
  "todoId": "todoId"
}
DELETE - Menghapus Jenis Tugas
Menghapus jenis tugas yang ada.

URL: http://localhost:5000/type

Parameter Request: JSON-Body

json
Copy code
{
  "id": "3a6e2cb5-a765-4cbb-9ec9-d2081e78e879"
}
User CRUD API
GET - Mendapatkan Semua Pengguna
Mendapatkan semua data pengguna.

URL: http://localhost:5000/users
Authorization: Bearer Token (token login pada Authorization Header)
POST - Membuat Pengguna Baru
Membuat pengguna baru.

URL: http://localhost:5000/user

Parameter Request: JSON-Body

json
Copy code
{
  "nama": "ifah",
  "username": "kentung",
  "password": "123",
  "role": "admin"
}
PUT - Mengedit Pengguna
Mengedit pengguna yang ada.

URL: http://localhost:5000/user

Parameter Request: JSON-Body

json
Copy code
{
  "id": "af3e72c3-cb05-4ed1-8e6a-72cb0aca76f5"
}
DELETE - Menghapus Pengguna
Menghapus pengguna yang ada.

URL: http://localhost:5000/user

Parameter Request: JSON-Body

json
Copy code
{
  "id": "af3e72c3-cb05-4ed1-8e6a-72cb0aca76f5"
}
Login & Registrasi User API
GET - Login
Melakukan proses login.

URL: http://localhost:5000/login

Parameter Request: JSON-Body

json
Copy code
{
  "username": "hudza",
  "password": "123"
}
GET - Cek Username
Mengecek ketersediaan username.

URL: http://localhost:5000/checkUsername

Parameter Request: JSON-Body

json
Copy code
{
  "username": "ifah"
}
