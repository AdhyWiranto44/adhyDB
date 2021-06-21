# adhyDB
Welcome to adhyDB, a simple built-in database for you small-size app! 

adhyDB merupakan database noSQL yang dibuat dengan JavaScript (Node.js) yang memungkinkan untuk dipakai pada aplikasi yang tidak memerlukan database seperti mongoDB atau MySQL. Cocok untuk aplikasi yang ringan secara fungsionalitas.

## Masih dalam tahap pengembangan
Cara penggunaan program: buka folder adhyDB lalu jalankan perintah-perintah yang disediakan

## Commands
### Membuat Database baru
<code>makeDatabase(nama_database)</code>
```
npm run db make_database -- nama_database
```
Database akan dibuat dalam bentuk file .json, misalkan <code>makeDatabase("kampusDB")</code> akan menghasilkan database dengan nama kampusDB.json yang berisi object kosong <code>{}</code>

### Membuat Collection pada Database
<code>makeCollection(nama_database, nama_collection)</code>
```
npm run db make_collection -- nama_database nama_collection
```
Setiap Collection akan ditambahkan berdasarkan Database-nya, misalkan <code>makeCollection("kampusDB", "mahasiswa")</code> akan menghasilkan key-value pair dengan <code>"mahasiswa": [],</code>

### Drop Collection dari Database
<code>dropCollection(nama_database, nama_collection)</code>
```
npm run db drop_collection -- nama_database nama_collection
```
Collection akan di-drop dari database yang berhubungan, misalkan <code>dropCollection("kampusDB", "ruangan")</code> akan menghapus property ruangan pada db kampusDB.

### Drop Database
<code>dropDatabase(nama_database)</code>
```
npm run db drop_database -- nama_database
```
Database akan di-drop dalam artian file JSON-nya akan dihapus, misalkan <code>dropDatabase("kampusDB")</code> akan menghapus file kampusDB.json