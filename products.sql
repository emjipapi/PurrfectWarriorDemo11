-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2024 at 06:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `purrfect_warrior`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `imageAlt` varchar(255) DEFAULT NULL,
  `productLink` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `sizes` text DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `rating` decimal(3,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`, `imageAlt`, `productLink`, `description`, `sizes`, `color`, `rating`) VALUES
(1, 'FELINE MISSION SPECTACLES', 1569.00, 'img/products/felinecombatglasses.png', 'img/products/felinecombatglasses_alt.png', 'productsView.html?index=0', 'Specialized eyewear designed for feline operatives on daring missions, providing both style and protection against environmental hazards.', '[\"Small (4-6)\", \"Medium (8-10)\", \"Large (12-14)\"]', 'LIGHT BLUE', 4.9),
(2, 'CAT HARNESS', 869.00, 'img/products/harness.png', 'img/products/harness_alt.png', 'productsView.html?index=1', 'A durable and adjustable harness crafted for adventurous cats, ensuring they stay secure and comfortable during outdoor explorations.', '[\"Small (4-6)\", \"Medium (8-10)\", \"Large (12-14)\"]', 'CAMO', 4.7),
(3, 'CAT EQUIPMENT HARNESS', 1069.00, 'img/products/grenadeharness.png', 'img/products/grenadeharness_alt.png', 'productsView.html?index=2', 'Heavy-duty harness designed to withstand rugged conditions, perfect for cats equipped with essential gear during outdoor expeditions.', '[\"Small (4-6)\", \"Medium (8-10)\", \"Large (12-14)\"]', 'CAMO', 4.8),
(4, 'CAT HELMET', 2669.00, 'img/products/helmet.png', 'img/products/helmet_alt.png', 'productsView.html?index=3', 'Advanced headgear engineered to safeguard your cat\'s head during tactical maneuvers, providing superior protection and peace of mind.', '[\"Small (4-6)\", \"Medium (8-10)\", \"Large (12-14)\"]', 'COOL BLACK', 4.9),
(5, 'FELINE PROTECTIVE EYEWEAR', 5069.00, 'img/products/cateyegoggles.webp', 'img/products/cateyegoggles_alt.png', 'productsView.html?index=4', 'Stylish and protective eyewear tailored for feline agents, offering enhanced vision and shielding delicate eyes from potential threats.', '[\"Small (4-6)\", \"Medium (8-10)\", \"Large (12-14)\"]', 'CHARCOAL BLACK', 4.6),
(6, 'CAT MARKSMAN WEAPON', 3969.00, 'img/products/sniper.png', 'img/products/sniper_alt.png', 'productsView.html?index=5', 'Precision-engineered weapon designed exclusively for skilled feline marksmen, ensuring accuracy and effectiveness in covert operations.', '[\"Small (4-6)\", \"Medium (8-10)\", \"Large (12-14)\"]', 'CAMO', 4.9),
(7, 'FELINE VEST', 869.00, 'img/products/vest.png', 'img/products/vest_alt.png', 'productsView.html?index=6', 'Camouflage-printed vest designed to keep your cat warm and stylish during outdoor adventures, blending seamlessly with their surroundings.', '[\"Small (4-6)\", \"Medium (8-10)\", \"Large (12-14)\"]', 'CAMO GREEN', 4.6),
(8, 'FELINE GEAR', 769.00, 'img/products/gear.png', 'img/products/gear_alt.png', 'productsView.html?index=7', 'Assorted gear and accessories tailored for feline operatives, offering functionality, durability, and style for missions of all kinds.', '[\"Small (4-6)\", \"Medium (8-10)\", \"Large (12-14)\"]', 'BLACK AND CAMO', 4.6),
(9, 'MILITARY CLAWING POST', 1969.00, 'img/products/post.png', 'img/products/post_alt.png', 'productsView.html?index=8', 'Sturdy and rugged scratching post built to military standards, providing cats with a satisfying outlet for their natural instincts and promoting healthy claw maintenance.', '[\"Small (4-6)\", \"Medium (8-10)\", \"Large (12-14)\"]', 'CAMO', 4.9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
