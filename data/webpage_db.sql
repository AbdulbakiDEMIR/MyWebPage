-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 27 Nis 2025, 19:37:35
-- Sunucu sürümü: 10.4.32-MariaDB
-- PHP Sürümü: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `webpage_db`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `explanation` text DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `blogs`
--

INSERT INTO `blogs` (`id`, `img`, `header`, `date`, `explanation`, `link`) VALUES
(1, '/img/snake-game.png', 'Yılan Oyunu', '2022', 'Bu proje, klasik \"Snake\" (Yılan) oyununu terminal/komut satırı ortamında oynatmak üzere yazılmış bir C dilinde uygulamadır. Oyun, bir yılanın ekranda hareket edip yemleri topladığı ve kuyruk uzunluğunu artırdığı temel mekaniğe dayanır. Oyun kolay ve zor olmak üzere iki farklı modda oynanabilir.', 'https://github.com/AbdulbakiDEMIR/Snake-C');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `educations`
--

CREATE TABLE `educations` (
  `id` int(11) NOT NULL,
  `header_id` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `class` tinyint(4) DEFAULT NULL,
  `note` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `educations`
--

INSERT INTO `educations` (`id`, `header_id`, `date`, `university`, `department`, `class`, `note`) VALUES
(1, 1, '2021.09 - şuan', 'Marmara Üniversitesi', 'Bilgisayar Mühendisliği', 4, 3.14);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `education_headers`
--

CREATE TABLE `education_headers` (
  `id` int(11) NOT NULL,
  `header` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `education_headers`
--

INSERT INTO `education_headers` (`id`, `header`, `icon`) VALUES
(1, 'Eğitim', 'fa-solid fa-graduation-cap');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `job_experiences`
--

CREATE TABLE `job_experiences` (
  `id` int(11) NOT NULL,
  `header_id` int(11) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `mission` varchar(255) DEFAULT NULL,
  `explanation` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `job_experiences`
--

INSERT INTO `job_experiences` (`id`, `header_id`, `date`, `company`, `mission`, `explanation`) VALUES
(1, 1, '2023.07 - 2023.08', 'ButikO', 'Frontend Geliştirici (Stajyer)', 'Lorem açıklama işlemi. Hesap olacak bir şey ama yine de düzelir belki ama olmasa da olur. Çabuk ol sorun olmadan kaç geriye.'),
(2, 1, '2024.07 - 2024.08', 'Priva Security', 'Frontend Geliştirici (Stajyer)', 'Lorem açıklama işlemi. Hesap olacak bir şey ama yine de düzelir belki ama olmasa da olur. Çabuk ol sorun olmadan kaç geriye.'),
(3, 1, '2024.09 - 2025.01', 'Priva Security', 'Frontend Geliştirici (Uzun Dönem Stajyer)', 'Lorem açıklama işlemi. Hesap olacak bir şey ama yine de düzelir belki ama olmasa da olur. Çabuk ol sorun olmadan kaç geriye.');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `job_experience_headers`
--

CREATE TABLE `job_experience_headers` (
  `id` int(11) NOT NULL,
  `header` varchar(255) NOT NULL,
  `icon` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `job_experience_headers`
--

INSERT INTO `job_experience_headers` (`id`, `header`, `icon`) VALUES
(1, 'İş Deneyimi', 'fa-solid fa-briefcase');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `personal_info`
--

CREATE TABLE `personal_info` (
  `id` int(11) NOT NULL,
  `header` varchar(30) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `img_path` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `personal_info`
--

INSERT INTO `personal_info` (`id`, `header`, `name`, `description`, `img_path`) VALUES
(1, 'Merhaba', 'Ben Abdülbaki', 'Marmara Üniversitesi Bilgisayar Mühendisliği Bölümü\'nde 4. sınıf öğrencisiyim. <b>Web geliştirme</b>, <b>makine öğrenmesi</b> ve <b>veri analizi</b> alanlarına ilgi duyuyorum ve bu konularda kendimi sürekli geliştirmekteyim.', '/img/1c8d310c038e41d3bb4a115de550a2bd.png');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `header` varchar(255) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `explanation` text DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `projects`
--

INSERT INTO `projects` (`id`, `img`, `header`, `date`, `explanation`, `link`) VALUES
(1, '/img/snake-game.png', 'Yılan Oyunu', '2022', 'Bu proje, klasik \"Snake\" (Yılan) oyununu terminal/komut satırı ortamında oynatmak üzere yazılmış bir C dilinde uygulamadır. Oyun, bir yılanın ekranda hareket edip yemleri topladığı ve kuyruk uzunluğunu artırdığı temel mekaniğe dayanır. Oyun kolay ve zor olmak üzere iki farklı modda oynanabilir.', 'https://github.com/AbdulbakiDEMIR/Snake-C');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `tech_contents`
--

CREATE TABLE `tech_contents` (
  `id` int(11) NOT NULL,
  `header_id` int(11) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `tech_contents`
--

INSERT INTO `tech_contents` (`id`, `header_id`, `icon`, `text`) VALUES
(1, 1, 'fa-brands fa-python', 'Python'),
(2, 1, 'fa-brands fa-java', 'Java'),
(3, 1, 'fa-solid fa-c', 'C'),
(4, 1, 'fa-brands fa-php', 'PHP'),
(5, 1, 'fa-brands fa-js', 'Javascript'),
(6, 2, 'fa-brands fa-html5', 'HTML'),
(7, 2, 'fa-brands fa-css3-alt', 'CSS'),
(8, 2, 'fa-brands fa-react', 'React'),
(9, 2, 'fa-brands fa-bootstrap', 'Bootstrap'),
(10, 3, 'fa-solid fa-database', 'MSSQL'),
(11, 3, 'fa-solid fa-database', 'MYSQL'),
(12, 4, 'fa-brands fa-git', 'Git'),
(13, 4, 'fa-brands fa-github', 'Git Hub'),
(14, 4, 'fa-brands fa-docker', 'Docker');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `tech_headers`
--

CREATE TABLE `tech_headers` (
  `id` int(11) NOT NULL,
  `header` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

--
-- Tablo döküm verisi `tech_headers`
--

INSERT INTO `tech_headers` (`id`, `header`) VALUES
(1, 'Programlama Dilleri'),
(2, 'Web Geliştirme'),
(3, 'Veri Tabanları'),
(4, 'Araçlar ve Teknolojiler');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `educations`
--
ALTER TABLE `educations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `header_id` (`header_id`);

--
-- Tablo için indeksler `education_headers`
--
ALTER TABLE `education_headers`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `job_experiences`
--
ALTER TABLE `job_experiences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `header_id` (`header_id`);

--
-- Tablo için indeksler `job_experience_headers`
--
ALTER TABLE `job_experience_headers`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `tech_contents`
--
ALTER TABLE `tech_contents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `header_id` (`header_id`);

--
-- Tablo için indeksler `tech_headers`
--
ALTER TABLE `tech_headers`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `educations`
--
ALTER TABLE `educations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `education_headers`
--
ALTER TABLE `education_headers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `job_experiences`
--
ALTER TABLE `job_experiences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Tablo için AUTO_INCREMENT değeri `job_experience_headers`
--
ALTER TABLE `job_experience_headers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `tech_contents`
--
ALTER TABLE `tech_contents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Tablo için AUTO_INCREMENT değeri `tech_headers`
--
ALTER TABLE `tech_headers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Dökümü yapılmış tablolar için kısıtlamalar
--

--
-- Tablo kısıtlamaları `educations`
--
ALTER TABLE `educations`
  ADD CONSTRAINT `educations_ibfk_1` FOREIGN KEY (`header_id`) REFERENCES `education_headers` (`id`);

--
-- Tablo kısıtlamaları `job_experiences`
--
ALTER TABLE `job_experiences`
  ADD CONSTRAINT `job_experiences_ibfk_1` FOREIGN KEY (`header_id`) REFERENCES `job_experience_headers` (`id`);

--
-- Tablo kısıtlamaları `tech_contents`
--
ALTER TABLE `tech_contents`
  ADD CONSTRAINT `tech_contents_ibfk_1` FOREIGN KEY (`header_id`) REFERENCES `tech_headers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
