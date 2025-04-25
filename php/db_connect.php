<?php
$servername = "localhost";     // XAMPP ile genelde localhost
$username = "root";            // XAMPP'ın varsayılan kullanıcı adı
$password = "";                // Parola genelde boştur
$database = "webpage_db"; // Oluşturduğun veritabanı adı

// Bağlantıyı oluştur
$conn = new mysqli($servername, $username, $password, $database);

// Bağlantıyı kontrol et
if ($conn->connect_error) {
    die("Bağlantı hatası: " . $conn->connect_error);
}

?>
