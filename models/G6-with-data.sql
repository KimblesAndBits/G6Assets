CREATE DATABASE  IF NOT EXISTS `g6_asset_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `g6_asset_management`;
-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: g6_asset_management
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accessories`
--

DROP TABLE IF EXISTS `accessories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `accessories` (
  `idaccessories` int(11) NOT NULL,
  `manufacturer` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `accessory_type` varchar(45) DEFAULT NULL,
  `quantity_available` int(11) DEFAULT NULL,
  `bin_location` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idaccessories`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accessories`
--

LOCK TABLES `accessories` WRITE;
/*!40000 ALTER TABLE `accessories` DISABLE KEYS */;
INSERT INTO `accessories` VALUES (1,'Apple','Magic Keyboard','keyboard',9,'a1234'),(2,'Apple','Magic Mouse','mouse',2,'a1234'),(3,'Logitech','Marathon Mouse M705','mouse',2,'a4444'),(4,'Apple','Magic Trackpad','mouse',3,'a1234'),(5,'Logitech','Wireless Trackball','mouse',1,'a4444'),(6,'Apple','Thunderbolt adapter','adapter',4,'a2345'),(7,'Logitech','Craft','keyboard',2,'a4444'),(8,'Logitech','Wireless K800','keyboard',1,'a4444'),(9,'Lenovo','Dock Station 1000','other',2,'b1111'),(10,'HP','Print Master 5k','printer',1,'c6789');
/*!40000 ALTER TABLE `accessories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hardware`
--

DROP TABLE IF EXISTS `hardware`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hardware` (
  `idhardware` int(11) NOT NULL,
  `manufacturer` varchar(45) DEFAULT NULL,
  `asset_tag` varchar(45) DEFAULT NULL,
  `serial_number` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `asset_type` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `bin_location` varchar(45) DEFAULT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  `date_assigned` datetime DEFAULT NULL,
  PRIMARY KEY (`idhardware`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hardware`
--

LOCK TABLES `hardware` WRITE;
/*!40000 ALTER TABLE `hardware` DISABLE KEYS */;
INSERT INTO `hardware` VALUES (1,'Apple','a000000001','xsxc9maIuPqiJV8g','Macbook Air','laptop','assigned',NULL,'3','2018-06-01 08:00:00'),(2,'Sony','a000000006','5IKE2r4YSU3ckYuF','VAIO S 13.3','laptop','assigned',NULL,'2','2018-06-01 08:00:00'),(3,'Lenovo','a000000013','320W0KmjSuuqmWo6','T490s','laptop','available','L1234',NULL,NULL),(4,'Apple','a000000007','KsKZk1fplTl5qsCI','Macbook Pro 13','laptop','assigned',NULL,'5','2019-08-15 08:00:00'),(5,'Apple','a000000014','MCjkwyr55aKYz1gx','Macbook Air','laptop','ordered',NULL,NULL,NULL),(6,'Apple','a000000015','3sVmtFkH1tzXit0b','Macbook Pro 15','laptop','assigned',NULL,'4','2018-02-26 08:00:00'),(7,'Apple','a000000002','rz6JtR0OSYaGS3WG','Macbook Air','laptop','assigned',NULL,'6','2018-11-01 08:00:00'),(8,'LG','a000000016','NjB12T0d9V70MQbP','34WL85C-B','display','available','D9876',NULL,NULL),(9,'LG','a000000008','Wnu0wG2CKiU22P1A','34WL500-B','display','retired','R4567',NULL,NULL),(10,'Apple','a000000017','P37hpH3BWRxRoVxg','Macbook Pro 13','laptop','ordered',NULL,NULL,NULL),(11,'LG','a000000009','2CBRBxfATzVfkz6V','34WL85C-B','display','assigned',NULL,'3','2018-06-01 08:00:00'),(12,'Dell','a000000018','l76vHxENJNMdag4i','S2719H','display','available','D9876',NULL,NULL),(13,'HP','a000000003','rHSFHArrFK5sXwLZ','T3M88AA','display','retired','R4567',NULL,NULL),(14,'HP','a000000010','eu71T44BIkS6fXSc','K5A38AA','display','assigned',NULL,'5','2018-06-01 08:00:00'),(15,'HP','a000000011','1jEXh2nWraH4CeUW','T3M88AA','display','assigned',NULL,'8','2019-08-15 08:00:00'),(16,'Lenovo','a000000019','GOBdEqnTIr4IWOkT','T490s','laptop','available','L1234',NULL,NULL),(17,'Lenovo','a000000020','uzwyRgScU90TZy2R','T490s','laptop','ordered',NULL,NULL,NULL),(18,'Sony','a000000004','qDf6dIWe9Ao4M4w9','VAIO S 13.3','laptop','assigned',NULL,'7','2019-04-16 08:00:00'),(19,'Apple','a000000012','znFyOoR0k6aquqpa','Macbook Air','laptop','available','L1234',NULL,NULL),(20,'Apple','a000000005','8Wz65gt1HLzHF6K7','Macbook Pro 13','laptop','assigned',NULL,'8','2018-01-10 08:00:00');
/*!40000 ALTER TABLE `hardware` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `roles` (
  `idroles` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idroles`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `software`
--

DROP TABLE IF EXISTS `software`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `software` (
  `idsoftware` int(11) NOT NULL,
  `manufacturer` varchar(45) DEFAULT NULL,
  `product` varchar(45) DEFAULT NULL,
  `product_key` varchar(45) DEFAULT NULL,
  `expiration_date` datetime DEFAULT NULL,
  `license_size` int(11) DEFAULT NULL,
  `license_available` int(11) DEFAULT NULL,
  PRIMARY KEY (`idsoftware`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `software`
--

LOCK TABLES `software` WRITE;
/*!40000 ALTER TABLE `software` DISABLE KEYS */;
INSERT INTO `software` VALUES (1,'Microsoft','Office Mac','3uTkWd27HRcsv5jQ','2020-12-31 23:59:59',10,6),(2,'Adobe','Photoshop Mac','mRJBc5jCXmjG2uRJ','2019-10-31 23:59:59',5,3),(3,'Microsoft','Office PC','UPwAMxyPCJ5p73Wp','2020-12-31 23:59:59',10,8);
/*!40000 ALTER TABLE `software` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_software`
--

DROP TABLE IF EXISTS `user_software`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_software` (
  `iduser_software` int(11) NOT NULL,
  `software_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`iduser_software`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_software`
--

LOCK TABLES `user_software` WRITE;
/*!40000 ALTER TABLE `user_software` DISABLE KEYS */;
INSERT INTO `user_software` VALUES (1,1,5),(2,1,4),(3,1,6),(4,1,8),(5,2,3),(6,2,8),(7,3,2),(8,3,7);
/*!40000 ALTER TABLE `user_software` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `idusers` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `department` varchar(45) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','Admin','Admin','admin','helpme',2),(2,'Steve Rogers','Captain','Strategy','cap','password',1),(3,'Tony Stark','CTO','Engineering','ironman','kwidjaled123!',1),(4,'Natasha Romanoff','Project Manager','Strategy','widow','black',1),(5,'Bruce Banner','Scientist','Engineering','hulk','angry',1),(6,'Wanda Maximoff','Witch','Engineering','scarlett','red',1),(7,'Hope Pym','Board Member','Strategy','wasp','sting',1),(8,'Peter Parker','Intern','Engineering','spider','man',1),(9,'Thor Thor','King','HR','thor','mjolnir',1),(10,'Carol Danvers','Captain','HR','captain','marvell',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-25 20:38:45
