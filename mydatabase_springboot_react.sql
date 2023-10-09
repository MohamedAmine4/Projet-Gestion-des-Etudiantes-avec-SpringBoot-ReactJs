-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 20 juin 2023 à 19:11
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mydatabase_springboot_react`
--

-- --------------------------------------------------------

--
-- Structure de la table `absence`
--

CREATE TABLE `absence` (
  `id_abs` bigint(20) NOT NULL,
  `nb_absences` int(11) NOT NULL,
  `nb_retards` int(11) NOT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `code_mod` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `absence`
--

INSERT INTO `absence` (`id_abs`, `nb_absences`, `nb_retards`, `cin`, `code_mod`) VALUES
(47, 0, 0, 'CN12345', 'DPP1TSR'),
(48, 0, 0, 'CN12345', 'EL1TSR'),
(49, 0, 0, 'CN12345', 'FSH1TSR'),
(50, 0, 0, 'CN12345', 'IEI1TSR'),
(51, 0, 0, 'CN12345', 'TR1TSR'),
(52, 0, 0, 'CN12345', 'DPP2TSR'),
(53, 0, 0, 'CN12345', 'EL2TSR'),
(54, 0, 0, 'CN12345', 'FSH2TSR'),
(55, 0, 0, 'CN12345', 'IEI2TSR'),
(56, 0, 0, 'CN12345', 'SNPFETSR'),
(57, 0, 0, 'CN12345', 'TR2TSR'),
(58, 0, 0, 'CN78431', 'EOQL'),
(59, 0, 0, 'CN78431', 'FCEQL'),
(60, 0, 0, 'CN78431', 'FGDCQL'),
(61, 0, 0, 'CN78431', 'FGPOQL'),
(62, 2, 4, 'CN78431', 'IMQL'),
(63, 0, 0, 'CN78431', 'REIQL'),
(64, 0, 0, 'CN78431', 'CFCQL'),
(65, 0, 0, 'CN78431', 'DACQL'),
(66, 0, 0, 'CN78431', 'DGQL'),
(67, 0, 0, 'CN78431', 'GPQL'),
(68, 0, 0, 'CN78431', 'IGQL'),
(69, 0, 0, 'CN78431', 'LBQL'),
(70, 0, 0, 'JK63289', 'EOQL'),
(71, 0, 0, 'JK63289', 'FCEQL'),
(72, 0, 0, 'JK63289', 'FGDCQL'),
(73, 0, 0, 'JK63289', 'FGPOQL'),
(74, 0, 0, 'JK63289', 'IMQL'),
(75, 0, 0, 'JK63289', 'REIQL'),
(76, 0, 0, 'JK63289', 'CFCQL'),
(77, 0, 0, 'JK63289', 'DACQL'),
(78, 0, 0, 'JK63289', 'DGQL'),
(79, 0, 0, 'JK63289', 'GPQL'),
(80, 0, 0, 'JK63289', 'IGQL'),
(81, 0, 0, 'JK63289', 'LBQL'),
(82, 0, 0, 'CM34729', 'EOQL'),
(83, 0, 0, 'CM34729', 'FCEQL'),
(84, 0, 0, 'CM34729', 'FGDCQL'),
(85, 0, 0, 'CM34729', 'FGPOQL'),
(86, 1, 3, 'CM34729', 'IMQL'),
(87, 0, 0, 'CM34729', 'REIQL'),
(88, 0, 0, 'CM34729', 'CFCQL'),
(89, 0, 0, 'CM34729', 'DACQL'),
(90, 0, 0, 'CM34729', 'DGQL'),
(91, 0, 0, 'CM34729', 'GPQL'),
(92, 0, 0, 'CM34729', 'IGQL'),
(93, 0, 0, 'CM34729', 'LBQL'),
(94, 0, 0, 'CN63217', 'ADQL'),
(95, 0, 0, 'CN63217', 'APQL'),
(96, 0, 0, 'CN63217', 'ESQL'),
(97, 0, 0, 'CN63217', 'HOQL'),
(98, 0, 0, 'CN63217', 'NNQL'),
(99, 0, 0, 'CN63217', 'NPQL'),
(100, 0, 0, 'CN63217', 'PGDQL'),
(101, 0, 0, 'CN63217', 'PPQL'),
(102, 0, 0, 'CN63217', 'STGPRD'),
(103, 0, 0, 'CB46382', 'ADQL'),
(104, 0, 0, 'CB46382', 'APQL'),
(105, 0, 0, 'CB46382', 'ESQL'),
(106, 0, 0, 'CB46382', 'HOQL'),
(107, 0, 0, 'CB46382', 'NNQL'),
(108, 0, 0, 'CB46382', 'NPQL'),
(109, 0, 0, 'CB46382', 'PGDQL'),
(110, 0, 0, 'CB46382', 'PPQL'),
(111, 0, 0, 'CB46382', 'STGPRD'),
(112, 0, 0, 'CB638954', 'CRMMGLP'),
(113, 0, 0, 'CB638954', 'ENVEJWEBLP'),
(114, 0, 0, 'CB638954', 'ERGEXPUTLP'),
(115, 0, 0, 'CB638954', 'GESENTRPLP'),
(116, 0, 0, 'CB638954', 'GESPRMKLP'),
(117, 0, 0, 'CB638954', 'MRCMMMLP'),
(118, 0, 0, 'CB638954', 'OUTDWEBANLP'),
(119, 0, 0, 'CB638954', 'STRMCMMLP');

-- --------------------------------------------------------

--
-- Structure de la table `date_inscreption`
--

CREATE TABLE `date_inscreption` (
  `id` int(11) NOT NULL,
  `date_inscreption` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `date_inscreption`
--

INSERT INTO `date_inscreption` (`id`, `date_inscreption`) VALUES
(36, '2023-07-15 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `details_prof_module`
--

CREATE TABLE `details_prof_module` (
  `id_prof_mod` bigint(20) NOT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `code_mod` varchar(255) DEFAULT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `details_prof_module`
--

INSERT INTO `details_prof_module` (`id_prof_mod`, `statut`, `code_mod`, `cin`, `section`) VALUES
(8, 'En cours', 'IMQL', 'GR36714', 'Section A'),
(9, 'En cours', 'LBQL', 'GR36714', 'Section A'),
(10, 'En cours', 'ESQL', 'CN82743', 'Section A'),
(11, 'En cours', 'EOQL', 'CN82743', 'Section A');

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `cin` varchar(255) NOT NULL,
  `date_naissance` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nationalite` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `code_fil` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `etudiant`
--

INSERT INTO `etudiant` (`cin`, `date_naissance`, `email`, `login`, `nationalite`, `nom`, `password`, `prenom`, `section`, `sexe`, `statut`, `telephone`, `ville`, `code_fil`) VALUES
('CB46382', '2002-11-03', 'aya.chahbi@gmail.com', 'CB46382', 'Marocaine', 'CHAHBI', 'CB46382', 'Aya', 'Section A', 'femme', 'En cours', '+212677889900', 'FES', 'PRD'),
('CB638954', '2000-05-24', 'mehdi.allami@gmail.com', 'CB638954', 'Marocaine', 'ALLAMI', 'CB638954', 'Mehdi', 'Section A', 'Homme', 'En cours', '+212677889900', 'FES', 'LPMD'),
('CM34729', '2003-09-23', 'sanae.bouarfa@gmail.com', 'CM34729', 'Marocaine', 'BOUARFA', 'CM34729', 'Sanae', 'Section A', 'femme', 'En cours', '+212655332211', 'IFRANE', 'GDE'),
('CN12345', '2001-01-29', 'abdessamad.chahbi@gmail.com', 'CN12345', 'Marocaine', 'CHAHBI', 'CN12345', 'Abdessamad', 'Section A', 'Homme', 'En cours', '+2126677889900', 'FES', 'TSRRI'),
('CN63217', '2003-12-19', 'oussama.alloui@gmail.com', 'CN63217', 'Marocaine', 'ALLOUI', 'CN63217', 'Oussama', 'Section A', 'Homme', 'En cours', '+2127889900', 'FES', 'PRD'),
('CN78431', '2002-07-19', 'fatima.lhachimi@gmail.com', 'CN78431', 'Marocaine', 'LHACHIMI', 'CN78431', 'Fatima', 'Section A', 'femme', 'En cours', '+212645389957', 'FES', 'GDE'),
('JK63289', '2001-11-19', 'hamza.benjellon@gmail.com', 'JK63289', 'Marocaine', 'BENJELLON', 'JK63289', 'Hamza', 'Section A', 'Homme', 'En cours', '+212788456732', 'MEKNES', 'GDE');

-- --------------------------------------------------------

--
-- Structure de la table `filiere`
--

CREATE TABLE `filiere` (
  `code_fil` varchar(255) NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `code_niv` varchar(255) DEFAULT NULL,
  `cin` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `filiere`
--

INSERT INTO `filiere` (`code_fil`, `designation`, `statut`, `code_niv`, `cin`) VALUES
('GDE', 'Gestion des Entreprises', 'En cours', 'QLF', 'JM62819'),
('INFO', 'Informatique', 'En cours', 'QLF', 'JM62819'),
('LPABDTW', 'Licence Professionnelle Administration de Base de Données & Technologies Web', 'En cours', 'LCC', 'CN47852'),
('LPABFCCPE', 'Licence Professionnelle | Assurance, Banque, Finance: Chargé de Clientèle-Parcours: Conseiller Clientèle Expert', 'En cours', 'LCC', 'CN47852'),
('LPCFA', 'Licence Professionnelle | Comptabilité, Finance, Audit', 'En cours', 'LCC', 'CN47852'),
('LPDGCV', 'Licence Professionnelle | Design Graphique & Communication Visuelle', 'En cours', 'LCC', 'CN47852'),
('LPGCIC', 'Licence Professionnelle | Génie Civil et Ingénierie de Construction', 'En cours', 'LCC', 'CN47852'),
('LPGE', 'Licence Professionnelle | Gestion des Entreprises', 'En cours', 'LCC', 'CN47852'),
('LPGRH', 'Licence Professionnelle | Gestion des Ressources Humaines', 'En cours', 'LCC', 'CN47852'),
('LPGSSS', 'Licence Professionnelle | Gestion des Structures Sanitaires et Sociales', 'En cours', 'LCC', 'CN47852'),
('LPLTI', 'Licence Professionnelle | Logistique et Transports Internationaux', 'En cours', 'LCC', 'CN47852'),
('LPMCCPC', 'Licence Professionnelle | Métiers de la Communication: Chef de Projet de Communication', 'En cours', 'LCC', 'CN47852'),
('LPMD', 'Licence Professionnelle Marketing Digital', 'En cours', 'LCC', 'JM62819'),
('LPMIAGE', 'Licence Professionnelle en Méthodes Informatiques Appliquées à la Gestion des Entreprises', 'En cours', 'LCC', 'CN47852'),
('LPMJP', 'Licence Professionnelle | Métiers du Journalisme et de la Presse', 'En cours', 'LCC', 'CN47852'),
('LPMN', 'Licence Professionnelle | Métiers du Notariat', 'En cours', 'LCC', 'CN47852'),
('LPMRITPRS', 'Licence Professionnelle | Métiers des Réseaux Informatiques et Télécommmunication Parcours Réseaux et Sécurité', 'En cours', 'LCC', 'CN47852'),
('LPMTI', 'Licence Professionnelle | Métiers du Tourisme International', 'En cours', 'LCC', 'CN47852'),
('LPTECI', 'Licence Professionnelle | Techniques de E-Commerce & Commerce International', 'En cours', 'LCC', 'CN47852'),
('MPBPI', 'Master Professionnel Banque Privée Internationale', 'En cours', 'MST', 'CN47852'),
('MPCAEI', 'Master Professionnel Chargé d\'Affaires Entreprises et Insitutions', 'En cours', 'MST', 'CN47852'),
('MPCCGA', 'Master Professionnel Comptabilité, Contrôle de Gestion, Audit', 'En cours', 'MST', 'CN47852'),
('MPCGSI', 'Master Professionnel Contrôle de Gestion et Systèmes d\'Information', 'En cours', 'MST', 'CN47852'),
('MPDI', 'Master Professionnel Décoration d\'Intérieur', 'En cours', 'MST', 'CN47852'),
('MPGCPCCIB', 'Master Professionnel Génie Civil Parcours Conception, Construction, Ingénierie de Bâtiment', 'En cours', 'MST', 'CN47852'),
('MPGRH', 'Master Professionnel Gestion des Ressources Humaines', 'En cours', 'MST', 'CN47852'),
('MPICDA', 'Master Professionnel Ingénierie de Conception et de Développement d\'Application', 'En cours', 'MST', 'CN47852'),
('MPIEAD', 'Master Professionnel Ingénierie Economique et de l\'Analyse des Données', 'En cours', 'MST', 'CN47852'),
('MPISCPDSML', 'Master Professionnel Informatique et Ingénierie des Systèmes Complexes Parcours Data Science & Machine Learning', 'En cours', 'MST', 'CN47852'),
('MPISCPIAR', 'Master Professionnel Informatique et Ingénierie des Systèmes Complexes Parcours Intelligence Artificielle et Robotique', 'En cours', 'MST', 'CN47852'),
('MPISCPSIC', 'Master Professionnel Informatique et Ingénierie des Systèmes Complexes Parcours Systèmes Intelligents et Communicants: Réseau et Sécurité', 'En cours', 'MST', 'CN47852'),
('MPJ', 'Master Professionnel Journalisme', 'En cours', 'MST', 'CN47852'),
('MPJCE', 'Master Professionnel Juriste Conseil d\'Entreprise', 'En cours', 'MST', 'CN47852'),
('MPMIAGE', 'Master Professionnel Méthodes Informatiques Appliquées a la Gestion des Entreprisee', 'En cours', 'MST', 'CN47852'),
('MPMLMTMR', 'Master Professionnel Management Logistique Mention Transport Mobilité Réseaux', 'En cours', 'MST', 'CN47852'),
('PRD', 'Paramedical', 'En cours', 'QLF', 'CN47852'),
('TCAC', 'Technicien Aide Comptable', 'En cours', 'TC', 'CN47852'),
('TCCM', 'Technicien Commercial', 'En cours', 'TC', 'CN47852'),
('TCCTP', 'Technicien Chef de Chantiers Travaux Publics', 'En cours', 'TC', 'CN47852'),
('TCDB', 'Technicien Dessinateur de Batiment', 'En cours', 'TC', 'CN47852'),
('TCINFO', 'Technicien Informatique', 'En cours', 'TC', 'CN47852'),
('TCL', 'Technicien Logistique', 'En cours', 'TC', 'CN47852'),
('TCRH', 'Technicien Réception d\'Hotel', 'En cours', 'TC', 'CN47852'),
('TSPDI', 'Technicien Spécialisé en Développement Informatique', 'En cours', 'TCSP', 'CN47852'),
('TSRCTP', 'Technicien Supérieur Conducteur de Travaux: Travaux Publics', 'En cours', 'TCSR', 'CN47852'),
('TSRDI', 'Technicien Supérieur en Développement Informatique', 'En cours', 'TCSR', 'CN47852'),
('TSRFC', 'Technicien Supérieur Financier Comptable', 'En cours', 'TCSR', 'CN47852'),
('TSRGE', 'Technicien Supérieur en Gestion des Entreprises', 'En cours', 'TCSR', 'CN47852'),
('TSRIG', 'Technicien Supérieur Infographie', 'En cours', 'TCSR', 'CN47852'),
('TSRIOJ', 'Technicien Supérieur Information: Option-Journalisme', 'En cours', 'TCSR', 'CN47852'),
('TSRMAC', 'Technicien Supérieur Marketing et Action Commerciale', 'En cours', 'TCSR', 'CN47852'),
('TSRRH', 'Technicien Supérieur Ressources Humaines', 'En cours', 'TCSR', 'CN47852'),
('TSRRI', 'Technicien Supérieur en Réseau Informatique', 'En cours', 'TCSR', 'CN47852'),
('TSRTH', 'Technicien Supérieur Tourisme et Hôtellerie', 'En cours', 'TCSR', 'CN47852'),
('TSRTL', 'Technicien Supérieur Transport Logistique', 'En cours', 'TCSR', 'CN47852');

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(37);

-- --------------------------------------------------------

--
-- Structure de la table `inscreption`
--

CREATE TABLE `inscreption` (
  `cin` varchar(255) NOT NULL,
  `date_naissance` date DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `code_fil` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `inscreption`
--

INSERT INTO `inscreption` (`cin`, `date_naissance`, `nom`, `prenom`, `code_fil`) VALUES
('CN12345', '2001-01-25', 'CHAHBI', 'Abdesamad', 'GDE');

-- --------------------------------------------------------

--
-- Structure de la table `module`
--

CREATE TABLE `module` (
  `code_mod` varchar(255) NOT NULL,
  `coeff_controles` double NOT NULL,
  `coeff_exams` double NOT NULL,
  `coeff_tps` double NOT NULL,
  `nb_controles` int(11) NOT NULL,
  `nb_exams` int(11) NOT NULL,
  `nb_tps` int(11) NOT NULL,
  `nom_mod` varchar(255) DEFAULT NULL,
  `code_niv_sco` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `module`
--

INSERT INTO `module` (`code_mod`, `coeff_controles`, `coeff_exams`, `coeff_tps`, `nb_controles`, `nb_exams`, `nb_tps`, `nom_mod`, `code_niv_sco`) VALUES
('ACOOTSP', 1, 1, 1, 2, 1, 1, 'Analyse et Conception Orientée Objet', 'NS2_TSPDI'),
('ADAOTC', 1, 1, 1, 2, 1, 1, 'Application de dessin assisté par ordinateur', 'NS1_TCDB'),
('ADAOTSR', 1, 1, 1, 2, 1, 1, 'Application de dessin assisté par ordinateur', 'NS2_TSRCTP'),
('ADMSYLP', 1, 1, 1, 2, 1, 1, 'Administration des Systèmes', 'NS1_LPMRITPRS'),
('ADQL', 1, 1, 1, 2, 1, 1, 'Assistant dentaire', 'NS1_PRD'),
('ADSCLP', 1, 1, 1, 2, 1, 1, 'Audit de Sécurité', 'NS1_LPMRITPRS'),
('AEO1TSR', 1, 1, 1, 2, 1, 1, 'Appréhender l\'entreprise et son organisation 1', 'NS1_TSRRH'),
('AETC', 1, 1, 1, 2, 1, 1, 'Animation d’équipe', 'NS1_TCL'),
('AFFGLP', 1, 1, 1, 2, 1, 1, 'Affichage', 'NS1_LPDGCV'),
('AGEETSR', 1, 1, 1, 2, 1, 1, 'Approche globale et environnement de l’entreprise', 'NS1_TSRGE'),
('AGRH1TSR', 1, 1, 1, 2, 1, 1, 'Appréhender la gestion des ressources humaines 1', 'NS1_TSRRH'),
('AHTSP', 1, 1, 1, 2, 1, 1, 'Applications Hypermédias', 'NS2_TSPDI'),
('AMHMTC', 1, 1, 1, 2, 1, 1, 'Affectation des moyens humains et matériels', 'NS2_TCL'),
('ANALFNLP', 1, 1, 1, 2, 1, 1, 'Analyse financière', 'NS1_LPCFA'),
('ANGCMINFLP', 1, 1, 1, 2, 1, 1, 'Anglais - Communication - Informatique', 'NS1_LPGRH'),
('ANGLP', 1, 1, 1, 2, 1, 1, 'Anglais', 'NS1_LPMN'),
('ANGRDMTC', 1, 1, 1, 2, 1, 1, 'Application des notions générales de la résistance des matériaux (RDM)', 'NS2_TCDB'),
('ANIMLP', 1, 1, 1, 2, 1, 1, 'Animation', 'NS1_LPDGCV'),
('ANPAULP', 1, 1, 1, 2, 1, 1, 'Analyse de produits audiovisuels', 'NS1_LPMJP'),
('APPRHORGLP', 1, 1, 1, 2, 1, 1, 'Appréhender la place des RH au sein des organisations', 'NS1_LPGRH'),
('APQL', 1, 1, 1, 2, 1, 1, 'Anatomie physiologie', 'NS1_PRD'),
('APRHSOLP', 1, 1, 1, 2, 1, 1, 'Appréhender la place des RH au sein des organisations', 'NS1_LPMN'),
('APSTC', 1, 1, 1, 2, 1, 1, 'Algorithme et programmation structurée', 'NS1_TCINFO'),
('APTC', 1, 1, 1, 2, 1, 1, 'Administration du personnel', 'NS1_TCAC'),
('AQTSR', 1, 1, 1, 2, 1, 1, 'Assurance qualité', 'NS1_TSRIG'),
('ARCHRSLP', 1, 1, 1, 2, 1, 1, 'Architecture des réseaux', 'NS1_LPMRITPRS'),
('ARTAPPLLP', 1, 1, 1, 2, 1, 1, 'Architectures applicatives distribuées en J2EE', 'NS1_LPABDTW'),
('ASASSLP', 1, 1, 1, 2, 1, 1, 'Accès et sécurités associées', 'NS1_LPMRITPRS'),
('ASRWLP', 1, 1, 1, 2, 1, 1, 'Administration Systèmes & réseaux (➀ Administration sous Windows 2008, ➁ Administration sous Linux, ➂ CCNA Discovery)', 'NS1_LPMIAGE'),
('ASTGCLP', 1, 1, 1, 2, 1, 1, 'Aspects Techniques De Génie Civil', 'NS1_LPGCIC'),
('ATCTSP', 1, 1, 1, 2, 1, 1, 'Assistance Technique à la Clientèle', 'NS1_TSPDI'),
('AVMDTSR', 1, 1, 1, 2, 1, 1, 'Audiovisuel et multimédia', 'NS2_TSRIOJ'),
('BAELTC', 1, 1, 1, 2, 1, 1, 'Application des règles de béton armé aux états limites (BAEL)', 'NS2_TCDB'),
('BDRTC', 1, 1, 1, 2, 1, 1, 'Base de données relationnelles', 'NS2_TCINFO'),
('BDSQLLP', 1, 1, 1, 2, 1, 1, 'Bases de données (➀ Théorie des Bases de données, ➁ SQL / PSQL, ➂ DBA1)', 'NS1_LPMIAGE'),
('BPJTSR', 1, 1, 1, 2, 1, 1, 'Bâtir un projet', 'NS1_TSRRH'),
('BQTSR', 1, 1, 1, 2, 1, 1, 'Bureautique', 'NS1_TSRGE'),
('BRTC', 1, 1, 1, 2, 1, 1, 'Bureautique', 'NS1_TCDB'),
('BRTTSR', 1, 1, 1, 2, 1, 1, 'Bureautique', 'NS1_TSRCTP'),
('BSCSTRLP', 1, 1, 1, 2, 1, 1, 'Bases Du Calcul De Structures', 'NS1_LPGCIC'),
('BSDNLP', 1, 1, 1, 2, 1, 1, 'Bases de données', 'NS1_LPMRITPRS'),
('BTC', 1, 1, 1, 2, 1, 1, 'Bureautique', 'NS1_TCAC'),
('CACTTSP', 1, 1, 1, 2, 1, 1, 'Communication en Anglais dans un Contexte de Travail', 'NS1_TSPDI'),
('CAEBDTC', 1, 1, 1, 2, 1, 1, 'Connaissance et Application des éléments de base de dessin', 'NS1_TCDB'),
('CAETSR', 1, 1, 1, 2, 1, 1, 'Comptabilité analytique d’exploitation', 'NS1_TSRGE'),
('CAPTSR', 1, 1, 1, 2, 1, 1, 'Codification d’un algorithme et programmation', 'NS1_TSRDI'),
('CBCGTSR', 1, 1, 1, 2, 1, 1, 'Concepts de base de la comptabilité générale', 'NS1_TSRGE'),
('CBSICLP', 1, 1, 1, 2, 1, 1, 'Concepts De Base De L’ingénierie De Construction', 'NS1_LPGCIC'),
('CCBDLP', 1, 1, 1, 2, 1, 1, 'Conception des bases données', 'NS1_LPABDTW'),
('CCCGLP', 1, 1, 1, 2, 1, 1, 'Gestion (➀ Comptabilité Générale, ➁ Comptabilité Analytique, ➂ Gestion financière)', 'NS1_LPMIAGE'),
('CCETC', 1, 1, 1, 2, 1, 1, 'Conduite de chariots élévateurs', 'NS1_TCL'),
('CCGTSR', 1, 1, 1, 2, 1, 1, 'Calibration de la chaîne graphique', 'NS2_TSRIG'),
('CCSASPTSR', 1, 1, 1, 2, 1, 1, 'Création de composants serveur - ASP.NET', 'NS2_TSRDI'),
('CCTC', 1, 1, 1, 2, 1, 1, 'Calculs commerciaux', 'NS1_TCAC'),
('CDAORDLP', 1, 1, 1, 2, 1, 1, 'Conception Et Dessin Assistés Par Ordinateur', 'NS1_LPGCIC'),
('CDECTC', 1, 1, 1, 2, 1, 1, 'Connaissance des différents éléments de construction', 'NS1_TCDB'),
('CDMCTSR', 1, 1, 1, 2, 1, 1, 'Connaissance des différents matériaux de construction', 'NS1_TSRCTP'),
('CDTSTSR', 1, 1, 1, 2, 1, 1, 'Connaissance de différents types des sols', 'NS1_TSRCTP'),
('CETSR', 1, 1, 1, 2, 1, 1, 'Culture d’entreprenariat', 'NS1_TSRIG'),
('CFCQL', 1, 1, 1, 2, 1, 1, 'Les concepts fondamentaux de la comptabilité', 'NS2_GDE'),
('CFFAULP', 1, 1, 1, 2, 1, 1, 'Chiffrement et authentification', 'NS1_LPMRITPRS'),
('CGASTSR', 1, 1, 1, 2, 1, 1, 'Comptabilité générale, analytique et des sociétés', 'NS1_TSRFC'),
('CGCBTC', 1, 1, 1, 2, 1, 1, 'Comptabilité générale : les concepts de base', 'NS1_TCAC'),
('CGOCTC', 1, 1, 1, 2, 1, 1, 'Comptabilité générale : les opérations courantes', 'NS1_TCAC'),
('CGTC', 1, 1, 1, 2, 1, 1, 'Clientèle de groupe', 'NS2_TCRH'),
('CIPTSR', 1, 1, 1, 2, 1, 1, 'Communication interpersonnelle', 'NS2_TSRFC'),
('CITC', 1, 1, 1, 2, 1, 1, 'Clientèle individuelle', 'NS2_TCRH'),
('CITSP', 1, 1, 1, 2, 1, 1, 'Communication Interpersonnelle', 'NS1_TSPDI'),
('CJTC', 1, 1, 1, 2, 1, 1, 'Clôture journalière', 'NS2_TCRH'),
('CLTSR', 1, 1, 1, 2, 1, 1, 'Communication et langues', 'NS2_TSRFC'),
('CMEPTSR', 1, 1, 1, 2, 1, 1, 'Communication d’Entreprise', 'NS2_TSRMAC'),
('CMERTSR', 1, 1, 1, 2, 1, 1, 'Communication d’Entreprise', 'NS2_TSRRH'),
('CMEXPJLP', 1, 1, 1, 2, 1, 1, 'Comprendre et expliquer la production journalistique', 'NS1_LPMJP'),
('CMFTSR', 1, 1, 1, 2, 1, 1, 'Connaissance de la mécanique des fluides', 'NS2_TSRCTP'),
('CMHMDTSR', 1, 1, 1, 2, 1, 1, 'Communication Hors Médias', 'NS2_TSRRH'),
('CMHMTSR', 1, 1, 1, 2, 1, 1, 'Communication Hors Médias', 'NS2_TSRMAC'),
('CMIPTSR', 1, 1, 1, 2, 1, 1, 'Communication interpersonnelle', 'NS2_TSRTL'),
('CMMDTSR', 1, 1, 1, 2, 1, 1, 'Communication Médias', 'NS2_TSRMAC'),
('CMMINTLP', 1, 1, 1, 2, 1, 1, 'Commerce International', 'NS1_LPTECI'),
('CMMMILP', 1, 1, 1, 2, 1, 1, 'Communication et médias internationaux', 'NS1_LPMCCPC'),
('CMMPROFLP', 1, 1, 1, 2, 1, 1, 'Communication professionnelle', 'NS1_LPGE'),
('CMMRGLP', 1, 1, 1, 2, 1, 1, 'Commutation et Routage', 'NS1_LPMRITPRS'),
('CMSITSP', 1, 1, 1, 2, 1, 1, 'Conception et Modélisation d’un Système d’Information', 'NS1_TSPDI'),
('CMSTSR', 1, 1, 1, 2, 1, 1, 'Connaissance de la mécanique des sols', 'NS2_TSRCTP'),
('CNCSORLP', 1, 1, 1, 2, 1, 1, 'Connaître et comprendre la société et les organisations', 'NS1_LPMCCPC'),
('COCTSR', 1, 1, 1, 2, 1, 1, 'Comptabilité des opérations courantes', 'NS1_TSRGE'),
('COJATTSR', 1, 1, 1, 2, 1, 1, 'Cadre organisationnel et juridique des activités touristiques', 'NS1_TSRTH'),
('COMCGNRLP', 1, 1, 1, 2, 1, 1, 'Compétences commerciales générales', 'NS1_LPLTI'),
('COMCMINTLP', 1, 1, 1, 2, 1, 1, 'Compétences commerciales à l’international', 'NS1_LPLTI'),
('COMDTSR', 1, 1, 1, 2, 1, 1, 'Communication Médias', 'NS2_TSRRH'),
('COMNOTLP', 1, 1, 1, 2, 1, 1, 'Comptabilité notariale', 'NS1_LPMN'),
('COMPFILP', 1, 1, 1, 2, 1, 1, 'Comptabilité, finance', 'NS1_LPGE'),
('CONGESLP', 1, 1, 1, 2, 1, 1, 'Contrôle de gestion', 'NS1_LPCFA'),
('CPANGLP', 1, 1, 1, 2, 1, 1, 'Communication professionnelle (Anglais professionnelle)', 'NS1_LPMIAGE'),
('CPPOLP', 1, 1, 1, 2, 1, 1, 'Conception & POO (➀ Conception et modélisation d\'un SI, ➁ Programmation Orientée Objet)', 'NS1_LPMIAGE'),
('CPWSQL', 1, 1, 1, 2, 1, 1, 'Création des pages web statiques à l\'aide d’un éditeur web', 'NS2_INFO'),
('CRDTSR', 1, 1, 1, 2, 1, 1, 'Connaissance des réseaux divers', 'NS1_TSRCTP'),
('CREDCMLP', 1, 1, 1, 2, 1, 1, 'Création éditoriale commun', 'NS1_LPMJP'),
('CRGESSILP', 1, 1, 1, 2, 1, 1, 'Création et gestion d’un site internet', 'NS1_LPMTI'),
('CRMMGLP', 1, 1, 1, 2, 1, 1, 'CRM (Customer Relation Management)', 'NS1_LPMD'),
('CRTWEBLP', 1, 1, 1, 2, 1, 1, 'Créations Web', 'NS1_LPTECI'),
('CSTSR', 1, 1, 1, 2, 1, 1, 'Client / Serveur', 'NS2_TSRDI'),
('CSWSTSR', 1, 1, 1, 2, 1, 1, 'Création d’un site Web statique', 'NS2_TSRDI'),
('CTATSR', 1, 1, 1, 2, 1, 1, 'Conception technique d’une application', 'NS2_TSRDI'),
('CULCMMLP', 1, 1, 1, 2, 1, 1, 'Culture et communication', 'NS1_LPGE'),
('DACQL', 1, 1, 1, 2, 1, 1, 'Droit administratif et commercial', 'NS2_GDE'),
('DAFTSR', 1, 1, 1, 2, 1, 1, 'Droit des Affaires', 'NS2_TSRFC'),
('DATSP', 1, 1, 1, 2, 1, 1, 'Déploiement d’Application', 'NS2_TSPDI'),
('DAWTC', 1, 1, 1, 2, 1, 1, 'Développement d’application Windows', 'NS2_TCINFO'),
('DBAORLP', 1, 1, 1, 2, 1, 1, 'DBA ORACLE', 'NS1_LPABDTW'),
('DBTTSR', 1, 1, 1, 2, 1, 1, 'Distribution', 'NS2_TSRMAC'),
('DCETC', 1, 1, 1, 2, 1, 1, 'Développement en commerce électronique', 'NS2_TCINFO'),
('DCMMDAFFLP', 1, 1, 1, 2, 1, 1, 'Droit commercial, Droit des affaires', 'NS1_LPMN'),
('DDATSR', 1, 1, 1, 2, 1, 1, 'Développement et déploiement d’une application', 'NS2_TSRDI'),
('DDSV', 1, 1, 1, 2, 1, 1, 'Détermination des dimensions, des surfaces et des volumes', 'NS2_TCDB'),
('DEPWEBLP', 1, 1, 1, 2, 1, 1, 'Développement Web', 'NS1_LPDGCV'),
('DESCINLP', 1, 1, 1, 2, 1, 1, 'Design Cinétique', 'NS1_LPDGCV'),
('DEVAPPLP', 1, 1, 1, 2, 1, 1, 'Développement d’application WEB', 'NS1_LPABDTW'),
('DEVMBLP', 1, 1, 1, 2, 1, 1, 'Développement pour mobile', 'NS1_LPABDTW'),
('DEVPRCLLP', 1, 1, 1, 2, 1, 1, 'Développement du portefeuille clients', 'NS1_LPABFCCPE'),
('DFNTSR', 1, 1, 1, 2, 1, 1, 'Diagnostic financier', 'NS2_TSRGE'),
('DFPERSLP', 1, 1, 1, 2, 1, 1, 'Droit de la famille et des personnes', 'NS1_LPMN'),
('DFTC', 1, 1, 1, 2, 1, 1, 'Droit des affaires', 'NS1_TCCM'),
('DGQL', 1, 1, 1, 2, 1, 1, 'Les défis du gestionnaire', 'NS2_GDE'),
('DMLDEATC', 1, 1, 1, 2, 1, 1, 'Dessin à main levée des différents éléments architecturaux', 'NS1_TCDB'),
('DMMKTSR', 1, 1, 1, 2, 1, 1, 'Démarche marketing', 'NS1_TSRIOJ'),
('DNLGILP', 1, 1, 1, 2, 1, 1, 'Génie logiciel', 'NS1_LPABDTW'),
('DPCFTC', 1, 1, 1, 2, 1, 1, 'Dessin des plans de BA coffrage et ferraillage', 'NS2_TCDB'),
('DPP1TSR', 1, 1, 1, 2, 1, 1, 'Développement personnel et professionnel I', 'NS1_TSRRI'),
('DPP2TSR', 1, 1, 1, 2, 1, 1, 'Développement personnel et professionnel II', 'NS2_TSRRI'),
('DPPTSR', 1, 1, 1, 2, 1, 1, 'Développement personnel', 'NS2_TSRMAC'),
('DQTC', 1, 1, 1, 2, 1, 1, 'Démarche qualité', 'NS1_TCL'),
('DRBIENLP', 1, 1, 1, 2, 1, 1, 'Droit des biens', 'NS1_LPMN'),
('DRCOMFLP', 1, 1, 1, 2, 1, 1, 'Droit, comptabilité, finance', 'NS1_LPGE'),
('DRFDRRLP', 1, 1, 1, 2, 1, 1, 'Droit fiscal, Droit rural', 'NS1_LPMN'),
('DRFISLP', 1, 1, 1, 2, 1, 1, 'Droit et fiscalité', 'NS1_LPCFA'),
('DRIMMBLP', 1, 1, 1, 2, 1, 1, 'Droit de l’immobilier', 'NS1_LPMN'),
('DRINFOLP', 1, 1, 1, 2, 1, 1, 'Droit de l’informatique', 'NS1_LPMRITPRS'),
('DRMSLBLP', 1, 1, 1, 2, 1, 1, 'Droit des régimes matrimoniaux, successions, libéralités', 'NS1_LPMN'),
('DRTVCLP', 1, 1, 1, 2, 1, 1, 'Droit du travail et contrats', 'NS1_LPMRITPRS'),
('DSBTTSR', 1, 1, 1, 2, 1, 1, 'Distribution', 'NS2_TSRRH'),
('DTNOTLP', 1, 1, 1, 2, 1, 1, 'Déontologie du notariat', 'NS1_LPMN'),
('DTPTSR', 1, 1, 1, 2, 1, 1, 'Droit en travaux publics', 'NS2_TSRCTP'),
('DVPTSR', 1, 1, 1, 2, 1, 1, 'Développement personnel', 'NS2_TSRRH'),
('EBCRENPLP', 1, 1, 1, 2, 1, 1, 'E-Business et création d’entreprise', 'NS1_LPMTI'),
('ECBNENVLP', 1, 1, 1, 2, 1, 1, 'Economie bancaire et environnement international', 'NS1_LPABFCCPE'),
('ECOMMLP', 1, 1, 1, 2, 1, 1, 'E-Commerce', 'NS1_LPTECI'),
('ECTC', 1, 1, 1, 2, 1, 1, 'Expédition et chargement', 'NS2_TCL'),
('ECTIRTDLP', 1, 1, 1, 2, 1, 1, 'Economie du tourisme international, risques et tourisme durable', 'NS1_LPMTI'),
('EEJDTSR', 1, 1, 1, 2, 1, 1, 'Environnement économique et juridique', 'NS1_TSRIOJ'),
('EEJQTSR', 1, 1, 1, 2, 1, 1, 'Environnement économique et juridique', 'NS1_TSRMAC'),
('EEPTSR', 1, 1, 1, 2, 1, 1, 'Etablissement d\'une étude de prix', 'NS2_TSRCTP'),
('EETSP', 1, 1, 1, 2, 1, 1, 'L’entreprise et son Environnement', 'NS1_TSPDI'),
('EETSR', 1, 1, 1, 2, 1, 1, 'L’entreprise et son environnement', 'NS1_TSRFC'),
('EJFSCLP', 1, 1, 1, 2, 1, 1, 'Environnement juridique et fiscal', 'NS1_LPABFCCPE'),
('EL1TSR', 1, 1, 1, 2, 1, 1, 'Electronique I', 'NS1_TSRRI'),
('EL2TSR', 1, 1, 1, 2, 1, 1, 'Electronique II', 'NS2_TSRRI'),
('EMTC', 1, 1, 1, 2, 1, 1, 'Etablissement des métrés', 'NS2_TCDB'),
('EMTCH', 1, 1, 1, 2, 1, 1, 'Etudes des marchés', 'NS1_TCCM'),
('EMTTC', 1, 1, 1, 2, 1, 1, 'Exploration du milieu de travail', 'NS1_TCRH'),
('EMTTSR', 1, 1, 1, 2, 1, 1, 'Etablissement des métrés', 'NS2_TSRCTP'),
('ENJURTRLP', 1, 1, 1, 2, 1, 1, 'Environnement juridique du tourisme', 'NS1_LPMTI'),
('ENTQTSR', 1, 1, 1, 2, 1, 1, 'Environnement technique', 'NS2_TSRIOJ'),
('ENVEJWEBLP', 1, 1, 1, 2, 1, 1, 'Environnement Économique Et Juridique Du Web', 'NS1_LPMD'),
('ENVFINLP', 1, 1, 1, 2, 1, 1, 'Environnement financier', 'NS1_LPCFA'),
('EOQL', 1, 1, 1, 2, 1, 1, 'Environnement des organisations', 'NS1_GDE'),
('EPEDTSR', 1, 1, 1, 2, 1, 1, 'Etude personnalisée encadrée', 'NS2_TSRTH'),
('EPTC', 1, 1, 1, 2, 1, 1, 'Emballage et palettisation', 'NS2_TCL'),
('ERGEXPUTLP', 1, 1, 1, 2, 1, 1, 'Ergonomie Et Expérience Utilisateurs', 'NS1_LPMD'),
('ESQL', 1, 1, 1, 2, 1, 1, 'Economie et santé', 'NS1_PRD'),
('ETMCTSR', 1, 1, 1, 2, 1, 1, 'Etudes de marché', 'NS2_TSRRH'),
('ETMTSR', 1, 1, 1, 2, 1, 1, 'Etudes de marché', 'NS2_TSRMAC'),
('ETPVTSR', 1, 1, 1, 2, 1, 1, 'Exploitation technique d’un parc de véhicule', 'NS1_TSRTL'),
('EXPECLP', 1, 1, 1, 2, 1, 1, 'Expression écrite', 'NS1_LPMN'),
('FAGCTC', 1, 1, 1, 2, 1, 1, 'Formation dans le secteur AGC', 'NS1_TCAC'),
('FCEQL', 1, 1, 1, 2, 1, 1, 'Les fondements de la connaissance économique', 'NS1_GDE'),
('FEPTSR', 1, 1, 1, 2, 1, 1, 'Fiscalité de l’entreprise', 'NS1_TSRFC'),
('FGDCQL', 1, 1, 1, 2, 1, 1, 'Fonctions de la gestion : la direction et le contrôle', 'NS1_GDE'),
('FGPOQL', 1, 1, 1, 2, 1, 1, 'Fonctions de la gestion : la planification et l\'organisation', 'NS1_GDE'),
('FMVTSR', 1, 1, 1, 2, 1, 1, 'Formalisation d\'un message visuel', 'NS1_TSRIG'),
('FPATSR', 1, 1, 1, 2, 1, 1, 'Formaliser et piloter les activités', 'NS1_TSRRH'),
('FRHTC', 1, 1, 1, 2, 1, 1, 'Formation en réception d’hôtel', 'NS1_TCRH'),
('FRPCPRLP', 1, 1, 1, 2, 1, 1, 'Formulation des propositions commerciales et pérennisation de la rentabilité', 'NS1_LPABFCCPE'),
('FSH1TSR', 1, 1, 1, 2, 1, 1, 'Formation Scientifique et Humaine I', 'NS1_TSRRI'),
('FSH2TSR', 1, 1, 1, 2, 1, 1, 'Formation Scientifique et Humaine II', 'NS2_TSRRI'),
('GAMESLP', 1, 1, 1, 2, 1, 1, 'Développement GAMES', 'NS1_LPABDTW'),
('GBTSR', 1, 1, 1, 2, 1, 1, 'Gestion budgétaire', 'NS2_TSRGE'),
('GCFTC', 1, 1, 1, 2, 1, 1, 'Gestion comptable et financière', 'NS1_TCCM'),
('GCPTSR', 1, 1, 1, 2, 1, 1, 'Gestion d’un centre de profit', 'NS2_TSRTL'),
('GDTC', 1, 1, 1, 2, 1, 1, 'Gestion des documents', 'NS1_TCAC'),
('GERCARRLP', 1, 1, 1, 2, 1, 1, 'Gérer les carrières', 'NS1_LPGRH'),
('GEREMPLP', 1, 1, 1, 2, 1, 1, 'Gérer l’emploi', 'NS1_LPGRH'),
('GERRECLP', 1, 1, 1, 2, 1, 1, 'Gérer les recrutements', 'NS1_LPGRH'),
('GERRLSTRLP', 1, 1, 1, 2, 1, 1, 'Gérer les relations de travail', 'NS1_LPGRH'),
('GESCMTRLP', 1, 1, 1, 2, 1, 1, 'Gestion de crises en milieu touristique', 'NS1_LPMTI'),
('GESENTRPLP', 1, 1, 1, 2, 1, 1, 'Gestion d’entreprise', 'NS1_LPMD'),
('GESFTLP', 1, 1, 1, 2, 1, 1, 'Gestion financière et trésorerie', 'NS1_LPCFA'),
('GESMGPRLP', 1, 1, 1, 2, 1, 1, 'Gestion et management de projet', 'NS1_LPMCCPC'),
('GESOTRQLP', 1, 1, 1, 2, 1, 1, 'La gestion dans les organisations touristiques', 'NS1_LPMTI'),
('GESPRJLP', 1, 1, 1, 2, 1, 1, 'Gestion De Projet', 'NS1_LPTECI'),
('GESPRMKLP', 1, 1, 1, 2, 1, 1, 'Gestion De Projet Marketing', 'NS1_LPMD'),
('GESRISLP', 1, 1, 1, 2, 1, 1, 'Gestion des risques', 'NS1_LPABFCCPE'),
('GESRSQLP', 1, 1, 1, 2, 1, 1, 'Gestion des risques', 'NS1_LPMJP'),
('GFBTSR', 1, 1, 1, 2, 1, 1, 'Gestion financière et budgétaire', 'NS1_TSRFC'),
('GFDQL', 1, 1, 1, 2, 1, 1, 'Gestion des fichiers et des dossiers', 'NS2_INFO'),
('GITTSR', 1, 1, 1, 2, 1, 1, 'Gestion de l\'information touristique', 'NS1_TSRTH'),
('GPDTSR', 1, 1, 1, 2, 1, 1, 'Gestion de production', 'NS2_TSRGE'),
('GPQL', 1, 1, 1, 2, 1, 1, 'Gestion de projet', 'NS2_GDE'),
('GPSTSR', 1, 1, 1, 2, 1, 1, 'Gestion de production et de stocks', 'NS1_TSRFC'),
('GPTC', 1, 1, 1, 2, 1, 1, 'Gestion de production', 'NS2_TCL'),
('GPTIBTSR', 1, 1, 1, 2, 1, 1, 'Gestion d\'un poste de travail informatique/bureautique', 'NS1_TSRIG'),
('GRCTC', 1, 1, 1, 2, 1, 1, 'Gestion de la relation client', 'NS2_TCCM'),
('GRCTSR', 1, 1, 1, 2, 1, 1, 'Gestion de la relation client', 'NS1_TSRTH'),
('GRHTSR', 1, 1, 1, 2, 1, 1, 'Gestion des Ressources Humaines', 'NS2_TSRFC'),
('GRRSCLP', 1, 1, 1, 2, 1, 1, 'Gérer les relations sociales', 'NS1_LPGRH'),
('GRTC', 1, 1, 1, 2, 1, 1, '', 'NS2_TCRH'),
('GSCMMLP', 1, 1, 1, 2, 1, 1, 'Design Et Communication', 'NS1_LPDGCV'),
('GSTENLP', 1, 1, 1, 2, 1, 1, 'Gestion d’entreprise', 'NS1_LPABDTW'),
('GSTPJLP', 1, 1, 1, 2, 1, 1, 'Gestion de Projet', 'NS1_LPMRITPRS'),
('GTTSP', 1, 1, 1, 2, 1, 1, 'Gestion du Temps', 'NS1_TSPDI'),
('HCPITRLP', 1, 1, 1, 2, 1, 1, 'Histoire, cultures et patrimoine international', 'NS1_LPMTI'),
('HOQL', 1, 1, 1, 2, 1, 1, 'Hygiène d’une officine', 'NS1_PRD'),
('HSCTC', 1, 1, 1, 2, 1, 1, 'Hygiène et sécurité dans les chantiers', 'NS2_TCDB'),
('HSCTSR', 1, 1, 1, 2, 1, 1, 'Hygiène et sécurité dans les chantiers', 'NS2_TSRCTP'),
('IAGTSR', 1, 1, 1, 2, 1, 1, 'Informatique appliqué à la gestion', 'NS2_TSRFC'),
('IATC', 1, 1, 1, 2, 1, 1, 'Informatique appliquée', 'NS1_TCL'),
('IBBTC', 1, 1, 1, 2, 1, 1, 'Introduction aux bases de données', 'NS1_TCINFO'),
('IBTC', 1, 1, 1, 2, 1, 1, 'Informatique bureautique', 'NS1_TCL'),
('ICSWTSR', 1, 1, 1, 2, 1, 1, 'Installation et configuration des serveurs web', 'NS2_TSRDI'),
('IDPNPTQL', 1, 1, 1, 2, 1, 1, 'Installation et dépannage de premier niveau d’un poste de travail', 'NS2_INFO'),
('IDTTSR', 1, 1, 1, 2, 1, 1, 'Introduction au Droit', 'NS1_TSRMAC'),
('IEI1TSR', 1, 1, 1, 2, 1, 1, 'Informatique et Electronique Informatique I', 'NS1_TSRRI'),
('IEI2TSR', 1, 1, 1, 2, 1, 1, 'Informatique et Electronique Informatique II', 'NS2_TSRRI'),
('IETC', 1, 1, 1, 2, 1, 1, 'Intelligences économiques', 'NS2_TCCM'),
('IFMDTSR', 1, 1, 1, 2, 1, 1, 'information et multimédias', 'NS2_TSRTH'),
('IFTRTSR', 1, 1, 1, 2, 1, 1, 'Information et tourismatique', 'NS2_TSRTH'),
('IGPITSP', 1, 1, 1, 2, 1, 1, 'Initiation à la Gestion de Projets Informatiques', 'NS2_TSPDI'),
('IGPITSR', 1, 1, 1, 2, 1, 1, 'Initiation à la gestion de projets informatiques', 'NS2_TSRFC'),
('IGQL', 1, 1, 1, 2, 1, 1, 'Informatique de gestion', 'NS2_GDE'),
('IMPSECDLP', 1, 1, 1, 2, 1, 1, 'Impact Sur L’environnement – Constructions Durables', 'NS1_LPGCIC'),
('IMQL', 1, 1, 1, 2, 1, 1, 'Introduction au marketing', 'NS1_GDE'),
('IMSTC', 1, 1, 1, 2, 1, 1, 'Intervention en matière de sécurité', 'NS2_TCRH'),
('IMTC', 1, 1, 1, 2, 1, 1, 'Initiation au métier', 'NS1_TCRH'),
('IMTTSP', 1, 1, 1, 2, 1, 1, 'Intégration au Milieu de Travail (Stage II)', 'NS2_TSPDI'),
('IMWQL', 1, 1, 1, 2, 1, 1, 'Initiation a Microsoft windows', 'NS1_INFO'),
('INDESGLP', 1, 1, 1, 2, 1, 1, 'InDesign', 'NS1_LPMJP'),
('INFMTSR', 1, 1, 1, 2, 1, 1, 'Informatique', 'NS2_TSRTL'),
('INFOBSLP', 1, 1, 1, 2, 1, 1, 'Informatique de base', 'NS1_LPMJP'),
('INFTSR', 1, 1, 1, 2, 1, 1, 'Informatique', 'NS1_TSRIOJ'),
('INTRERCLP', 1, 1, 1, 2, 1, 1, 'Interconnexion des Réseaux Commutés', 'NS1_LPMRITPRS'),
('INTRNCLLP', 1, 1, 1, 2, 1, 1, 'Introduction Aux Normes De Construction Et Législation', 'NS1_LPGCIC'),
('IOOTC', 1, 1, 1, 2, 1, 1, 'Introduction à l’orientée objet', 'NS1_TCINFO'),
('IPITC', 1, 1, 1, 2, 1, 1, 'Introduction à la programmation internet', 'NS1_TCINFO'),
('IPITSP', 1, 1, 1, 2, 1, 1, 'Installation d’un Poste Informatique', 'NS1_TSPDI'),
('IRBTC', 1, 1, 1, 2, 1, 1, 'Implantation et relevé d’un bâtiment', 'NS1_TCDB'),
('IRIQL', 1, 1, 1, 2, 1, 1, 'Initiation aux réseaux informatiques', 'NS2_INFO'),
('IRITSP', 1, 1, 1, 2, 1, 1, 'Introduction aux Réseaux Informatiques', 'NS2_TSPDI'),
('ITPETSR', 1, 1, 1, 2, 1, 1, 'Influence des travaux publics sur l\'environnement', 'NS2_TSRCTP'),
('IUSPUBLP', 1, 1, 1, 2, 1, 1, 'Illustration Et Publicité', 'NS1_LPDGCV'),
('LATSP', 1, 1, 1, 2, 1, 1, 'Logiciels d’Application', 'NS1_TSPDI'),
('LBQL', 1, 1, 1, 2, 1, 1, 'Logiciels bureautiques', 'NS2_GDE'),
('LCTC', 1, 1, 1, 2, 1, 1, 'Logiciel de comptabilité', 'NS1_TCAC'),
('LE1TC', 1, 1, 1, 2, 1, 1, 'Langue étrangère 1', 'NS1_TCRH'),
('LE2TC', 1, 1, 1, 2, 1, 1, 'Langue étrangère 2', 'NS2_TCRH'),
('LGCPCTSR', 1, 1, 1, 2, 1, 1, 'Logiciels de gestion (comptabilité, paie, commerce)', 'NS2_TSRGE'),
('LGEPTSR', 1, 1, 1, 2, 1, 1, 'Logistique et entreposage', 'NS2_TSRTL'),
('LIPTSR', 1, 1, 1, 2, 1, 1, 'Lecture et interprétation des plans', 'NS1_TSRCTP'),
('LPMETC', 1, 1, 1, 2, 1, 1, 'Législation des PME', 'NS1_TCAC'),
('LPMETCH', 1, 1, 1, 2, 1, 1, 'Législation PME', 'NS1_TCRH'),
('LPMETSR', 1, 1, 1, 2, 1, 1, 'Législation des PME', 'NS1_TSRTL'),
('LPSTSP', 1, 1, 1, 2, 1, 1, 'Langage de Programmation Structurée', 'NS1_TSPDI'),
('LVOBGLP', 1, 1, 1, 2, 1, 1, '3 langues vivantes obligatoires', 'NS1_LPMTI'),
('MAPFTSR', 1, 1, 1, 2, 1, 1, 'Mesurer et analyser les performances financières', 'NS1_TSRRH'),
('MAQL', 1, 1, 1, 2, 1, 1, 'Microsoft Access', 'NS1_INFO'),
('MARKMGLP', 1, 1, 1, 2, 1, 1, 'Marketing et management', 'NS1_LPGE'),
('MCACCELP', 1, 1, 1, 2, 1, 1, 'Marchés des capitaux – Analyse et compréhension de la conjoncture économique', 'NS1_LPABFCCPE'),
('MCMM1TSR', 1, 1, 1, 2, 1, 1, 'Marketing et Communication I', 'NS1_TSRMAC'),
('MCMM2TSR', 1, 1, 1, 2, 1, 1, 'Marketing et Communication II', 'NS2_TSRMAC'),
('MCPLTSR', 1, 1, 1, 2, 1, 1, 'Marketing et commercialisation d’une prestation logistique', 'NS2_TSRTL'),
('MCPTTSR', 1, 1, 1, 2, 1, 1, 'Mercatique et conception de prestation touristique', 'NS1_TSRTH'),
('MEQL', 1, 1, 1, 2, 1, 1, 'Microsoft Excel', 'NS1_INFO'),
('MEQTSR', 1, 1, 1, 2, 1, 1, 'Management d’équipe', 'NS2_TSRTL'),
('METC', 1, 1, 1, 2, 1, 1, 'Management des équipes', 'NS2_TCCM'),
('MFCTPTSR', 1, 1, 1, 2, 1, 1, 'Métier et formation en conducteur de TP', 'NS1_TSRCTP'),
('MFDBTC', 1, 1, 1, 2, 1, 1, 'Métier et formation en dessin du bâtiment', 'NS1_TCDB'),
('MFITSR', 1, 1, 1, 2, 1, 1, 'Métier et formation en imprimerie', 'NS1_TSRIG'),
('MFMTSR', 1, 1, 1, 2, 1, 1, 'Métier et formation', 'NS1_TSRFC'),
('MFTLTC', 1, 1, 1, 2, 1, 1, 'Métier et formation du Technicien en Logistique', 'NS1_TCL'),
('MFTSP', 1, 1, 1, 2, 1, 1, 'Métier et formation', 'NS1_TSPDI'),
('MFTSR', 1, 1, 1, 2, 1, 1, 'Métier et formation', 'NS1_TSRDI'),
('MFTTSR', 1, 1, 1, 2, 1, 1, 'Métier et formation', 'NS1_TSRGE'),
('MFVTC', 1, 1, 1, 2, 1, 1, 'Management de la force de vente', 'NS2_TCCM'),
('MGCPMPLP', 1, 1, 1, 2, 1, 1, 'Management Et Conduite De Projet, Méthodes Et Planification', 'NS1_LPGCIC'),
('MGEPMKLP', 1, 1, 1, 2, 1, 1, 'Management d’entreprise et marketing', 'NS1_LPMCCPC'),
('MGOLGLP', 1, 1, 1, 2, 1, 1, 'Management Des Opérations Logistiques', 'NS1_LPTECI'),
('MHGTSR', 1, 1, 1, 2, 1, 1, 'Merchandising', 'NS2_TSRMAC'),
('MITC', 1, 1, 1, 2, 1, 1, 'Mathématiques pour informaticien', 'NS1_TCINFO'),
('MKCCTSR', 1, 1, 1, 2, 1, 1, 'Marketing et Communication', 'NS2_TSRRH'),
('MKGFTTSR', 1, 1, 1, 2, 1, 1, 'Marketing fondamental', 'NS1_TSRMAC'),
('MKOTTSR', 1, 1, 1, 2, 1, 1, 'Marketing opérationnel', 'NS2_TSRRH'),
('MKSTSR', 1, 1, 1, 2, 1, 1, 'Marketing stratégique', 'NS2_TSRGE'),
('MKTC', 1, 1, 1, 2, 1, 1, 'Marketing', 'NS1_TCCM'),
('MKTSR', 1, 1, 1, 2, 1, 1, 'Marketing', 'NS1_TSRGE'),
('MMMFLP', 1, 1, 1, 2, 1, 1, 'Mathématique (➀ Méthodes Statistiques, ➁ Mathématiques Financières)', 'NS1_LPMIAGE'),
('MMTSR', 1, 1, 1, 2, 1, 1, 'Marketing et Management', 'NS1_TSRFC'),
('MNGCOMPLP', 1, 1, 1, 2, 1, 1, 'Management et comptabilité', 'NS1_LPGSSS'),
('MNGIAPPLLP', 1, 1, 1, 2, 1, 1, 'Management interne appliqué à la logistique', 'NS1_LPLTI'),
('MOCEITSR', 1, 1, 1, 2, 1, 1, 'Maitriser les outils de la communication externe et interne', 'NS1_TSRRH'),
('MOQL', 1, 1, 1, 2, 1, 1, 'Maintenance des ordinateurs', 'NS1_INFO'),
('MPFMTSR', 1, 1, 1, 2, 1, 1, 'Métier et processus de formation', 'NS1_TSRTL'),
('MPIMPLP', 1, 1, 1, 2, 1, 1, 'Management des projets (Introduction au Management des projets)', 'NS1_LPMIAGE'),
('MPISRSC1-1', 1, 1, 1, 2, 1, 1, 'Conception Des Systèmes D’information - UML', 'NS1_MPISCPSIC'),
('MPISRSC1-2', 1, 1, 1, 2, 1, 1, 'Gestion', 'NS1_MPISCPSIC'),
('MPISRSC1-3', 1, 1, 1, 2, 1, 1, 'Développement Personnel', 'NS1_MPISCPSIC'),
('MPISRSC1-4', 1, 1, 1, 2, 1, 1, 'Travaux D’études Et De Recherches', 'NS1_MPISCPSIC'),
('MPISRSC2-1', 1, 1, 1, 2, 1, 1, 'Aspects Juridiques Et Tests Intrusifs Et Forensic', 'NS2_MPISCPSIC'),
('MPISRSC2-2', 1, 1, 1, 2, 1, 1, 'Communication Professionnelle en Anglais', 'NS2_MPISCPSIC'),
('MPISRSM1-1', 1, 1, 1, 2, 1, 1, 'Administration Des Systèmes En Réseau', 'NS1_MPISCPSIC'),
('MPISRSM1-1-1', 1, 1, 1, 2, 1, 1, 'Administration Système Avancée Microsoft Windows Server', 'NS1_MPISCPSIC'),
('MPISRSM1-1-2', 1, 1, 1, 2, 1, 1, 'Administration Système Avancée Unix et Linux', 'NS1_MPISCPSIC'),
('MPISRSM1-2', 1, 1, 1, 2, 1, 1, 'Administration De Bases De Données Et Virtualisation', 'NS1_MPISCPSIC'),
('MPISRSM1-3', 1, 1, 1, 2, 1, 1, 'Réseaux Et Télécoms', 'NS1_MPISCPSIC'),
('MPISRSM1-3-1', 1, 1, 1, 2, 1, 1, 'Interconnexion et routage dynamique', 'NS1_MPISCPSIC'),
('MPISRSM1-3-2', 1, 1, 1, 2, 1, 1, 'Réseaux et mobilité', 'NS1_MPISCPSIC'),
('MPISRSM1-3-3', 1, 1, 1, 2, 1, 1, 'Télécommunications spatiales', 'NS1_MPISCPSIC'),
('MPISRSM1-3-4', 1, 1, 1, 2, 1, 1, 'Télécommunications mobiles', 'NS1_MPISCPSIC'),
('MPISRSM1-4', 1, 1, 1, 2, 1, 1, 'Services Et Applications', 'NS1_MPISCPSIC'),
('MPISRSM1-4-1', 1, 1, 1, 2, 1, 1, 'Déploiement de services et interopérabilité', 'NS1_MPISCPSIC'),
('MPISRSM1-4-2', 1, 1, 1, 2, 1, 1, 'Modèles et concepts du parallélisme et répartition', 'NS1_MPISCPSIC'),
('MPISRSM1-5', 1, 1, 1, 2, 1, 1, 'Réseaux Et Ingénierie', 'NS1_MPISCPSIC'),
('MPISRSM1-5-1', 1, 1, 1, 2, 1, 1, 'Gestion de réseaux & sécurité', 'NS1_MPISCPSIC'),
('MPISRSM1-5-2', 1, 1, 1, 2, 1, 1, 'Intégration voix /données', 'NS1_MPISCPSIC'),
('MPISRSM2-1', 1, 1, 1, 2, 1, 1, 'Sécurité Des Réseaux De Communication', 'NS2_MPISCPSIC'),
('MPISRSM2-2', 1, 1, 1, 2, 1, 1, 'Sécurité Applicative', 'NS2_MPISCPSIC'),
('MPISRSM2-3', 1, 1, 1, 2, 1, 1, 'Sécurité Et Sûreté', 'NS2_MPISCPSIC'),
('MPISRSM2-4', 1, 1, 1, 2, 1, 1, 'Ecosysteme, Gouvernance Et Aspects Opérationnels De La Sécurité', 'NS2_MPISCPSIC'),
('MPISRSM2-5', 1, 1, 1, 2, 1, 1, 'Management de Projets et MS Project', 'NS2_MPISCPSIC'),
('MPISRSM2-6', 1, 1, 1, 2, 1, 1, 'Sécurité Des Systèmes Et Des Composants', 'NS2_MPISCPSIC'),
('MPISRSM2-7', 1, 1, 1, 2, 1, 1, 'Gestion Des Identités Et Des Accès', 'NS2_MPISCPSIC'),
('MPISRSPFE', 1, 1, 1, 2, 1, 1, 'Projet Fin D’études', 'NS2_MPISCPSIC'),
('MPITSR', 1, 1, 1, 2, 1, 1, 'Mise en page informatisée', 'NS2_TSRIG'),
('MPPQL', 1, 1, 1, 2, 1, 1, 'Microsoft PowerPoint', 'NS1_INFO'),
('MPT1TSR', 1, 1, 1, 2, 1, 1, 'Marketing opérationnel I', 'NS1_TSRMAC'),
('MPT2TSR', 1, 1, 1, 2, 1, 1, 'Marketing opérationnel II', 'NS2_TSRMAC'),
('MRCMMMLP', 1, 1, 1, 2, 1, 1, 'Marketing, Communication Web Et Marketing Mobile', 'NS1_LPMD'),
('MRDTSR', 1, 1, 1, 2, 1, 1, 'Merchandising', 'NS2_TSRRH'),
('MREPTSR', 1, 1, 1, 2, 1, 1, 'Moyens de recherche d’emploi', 'NS2_TSRTL'),
('MRETC', 1, 1, 1, 2, 1, 1, 'Moyens de recherche d\'emploi', 'NS2_TCDB'),
('MRETSR', 1, 1, 1, 2, 1, 1, 'Moyens de recherche d\'emploi', 'NS2_TSRCTP'),
('MRKSRPSTLP', 1, 1, 1, 2, 1, 1, 'Marketing et stratégies de prix spécifiques au tourisme', 'NS1_LPMTI'),
('MTCFTSR', 1, 1, 1, 2, 1, 1, 'Maîtriser les techniques comptables et fiscales', 'NS1_TSRRH'),
('MTFTSR', 1, 1, 1, 2, 1, 1, 'Mathématiques financières', 'NS2_TSRGE'),
('MTINFLP', 1, 1, 1, 2, 1, 1, 'Matériaux Et Infrastructures', 'NS1_LPGCIC'),
('MWQL', 1, 1, 1, 2, 1, 1, 'Microsoft Word', 'NS1_INFO'),
('NBDTSR', 1, 1, 1, 2, 1, 1, 'Notion de base sur le dessin', 'NS1_TSRCTP'),
('NBSMTC', 1, 1, 1, 2, 1, 1, 'Notions de base en statistique et en mathématiques', 'NS1_TCL'),
('NCMTSR', 1, 1, 1, 2, 1, 1, 'Négociation Commerciale', 'NS2_TSRMAC'),
('NCTTSR', 1, 1, 1, 2, 1, 1, 'Notions et concepts de la topographie', 'NS1_TSRCTP'),
('NGCMMTSR', 1, 1, 1, 2, 1, 1, 'Négociation Commerciale', 'NS2_TSRRH'),
('NGIMMLP', 1, 1, 1, 2, 1, 1, 'Négociation immobilière', 'NS1_LPMN'),
('NGMTC', 1, 1, 1, 2, 1, 1, 'Notions générales de Métré', 'NS2_TCDB'),
('NMAITSP', 1, 1, 1, 2, 1, 1, 'Notions de Mathématiques Appliquées à l\'informatique', 'NS1_TSPDI'),
('NMITC', 1, 1, 1, 2, 1, 1, 'Négociation en milieu industriel', 'NS2_TCCM'),
('NNQL', 1, 1, 1, 2, 1, 1, 'Notion de nutrition', 'NS1_PRD'),
('NPQL', 1, 1, 1, 2, 1, 1, 'Notions de pharmacologie', 'NS1_PRD'),
('NQTSR', 1, 1, 1, 2, 1, 1, 'Notions de la qualité', 'NS2_TSRCTP'),
('NTIETSR', 1, 1, 1, 2, 1, 1, 'Numérisation et traitement des images sur écran', 'NS2_TSRIG'),
('OEPTSR', 1, 1, 1, 2, 1, 1, 'Organisation des Entreprises', 'NS1_TSRMAC'),
('OETSR', 1, 1, 1, 2, 1, 1, 'Organisation d\'entreprise', 'NS1_TSRIG'),
('OGNTSR', 1, 1, 1, 2, 1, 1, 'Outil de gestion', 'NS1_TSRMAC'),
('OGSTSR', 1, 1, 1, 2, 1, 1, 'Outils de gestion', 'NS2_TSRFC'),
('OGTTSR', 1, 1, 1, 2, 1, 1, 'Organisation et gestion des travaux', 'NS2_TSRCTP'),
('OIQL', 1, 1, 1, 2, 1, 1, 'Outils Informatique', 'NS1_INFO'),
('OITC', 1, 1, 1, 2, 1, 1, 'Outils informatique', 'NS1_TCINFO'),
('OSPTITSR', 1, 1, 1, 2, 1, 1, 'Organisation et suivi d’une prestation de transport international', 'NS2_TSRTL'),
('OSPTNTSR', 1, 1, 1, 2, 1, 1, 'Organisation et suivi d’une prestation de transport national', 'NS1_TSRTL'),
('OTCPRLP', 1, 1, 1, 2, 1, 1, 'Patrimoine du client professionnel', 'NS1_LPABFCCPE'),
('OTTC', 1, 1, 1, 2, 1, 1, 'Offre touristique', 'NS1_TCRH'),
('OUTADCSLP', 1, 1, 1, 2, 1, 1, 'Outils D\'aide À La Décision', 'NS1_LPTECI'),
('OUTDRHLP', 1, 1, 1, 2, 1, 1, 'Outils des RH', 'NS1_LPGRH'),
('OUTDWEBANLP', 1, 1, 1, 2, 1, 1, 'Outils Décisionnels & Web Analytics', 'NS1_LPMD'),
('OUTMPMLP', 1, 1, 1, 2, 1, 1, 'Outils Mathématiques Pour La Mécanique', 'NS1_LPGCIC'),
('OUTORDLP', 1, 1, 1, 2, 1, 1, 'Outils et production', 'NS1_LPMCCPC'),
('PCFETSP', 1, 1, 1, 2, 1, 1, 'Projet de Conception de Fin d’Études', 'NS2_TSPDI'),
('PCGCIVLP', 1, 1, 1, 2, 1, 1, 'Procédés De Construction En Génie Civil', 'NS1_LPGCIC'),
('PCMMTSR', 1, 1, 1, 2, 1, 1, 'Presse et communication', 'NS2_TSRIOJ'),
('PCSTSP', 1, 1, 1, 2, 1, 1, 'Programmation Client-Serveur', 'NS2_TSPDI'),
('PCTC', 1, 1, 1, 2, 1, 1, 'Préparation des commandes', 'NS2_TCL'),
('PDFSTSR', 1, 1, 1, 2, 1, 1, 'Paie et déclarations fiscales et sociales', 'NS1_TSRGE'),
('PDTSP', 1, 1, 1, 2, 1, 1, 'Production de Documents', 'NS1_TSPDI'),
('PETSP', 1, 1, 1, 2, 1, 1, 'Programmation Événementielle', 'NS1_TSPDI'),
('PETSR', 1, 1, 1, 2, 1, 1, 'Programmation événementielle', 'NS1_TSRDI'),
('PFEETLP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPABDTW'),
('PFESPLP', 1, 1, 1, 2, 1, 1, 'Projet de Fin d\'études (Suivi PFE)', 'NS1_LPMIAGE'),
('PFETUDLP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPLTI'),
('PFINEDLP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPMCCPC'),
('PFINETDLP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPMJP'),
('PFINETLP', 1, 1, 1, 2, 1, 1, 'Projet De Fin D\'Etudes', 'NS1_LPTECI'),
('PFNETUDLP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPGRH'),
('PFSGBDRTSR', 1, 1, 1, 2, 1, 1, 'Principe et fonctionnement d’un SGBDR', 'NS1_TSRGE'),
('PGDQL', 1, 1, 1, 2, 1, 1, 'Psychologie générale et développementale', 'NS1_PRD'),
('PICTSR', 1, 1, 1, 2, 1, 1, 'Planification et installation du chantier', 'NS2_TSRCTP'),
('PILLRHLP', 1, 1, 1, 2, 1, 1, 'Piloter les RH', 'NS1_LPGRH'),
('PINTSR', 1, 1, 1, 2, 1, 1, 'Pratique de l\'imposition numérique', 'NS2_TSRIG'),
('PISTC', 1, 1, 1, 2, 1, 1, 'Programmation internet - Serveur', 'NS2_TCINFO'),
('PJFELP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPMN'),
('PMTC', 1, 1, 1, 2, 1, 1, 'Prospection des marchés', 'NS1_TCCM'),
('POOTSP', 1, 1, 1, 2, 1, 1, 'Programmation Orientée Objet', 'NS1_TSPDI'),
('POOTSR', 1, 1, 1, 2, 1, 1, 'Programmation orientée objet', 'NS1_TSRDI'),
('POTC', 1, 1, 1, 2, 1, 1, 'Programmer par objet', 'NS2_TCINFO'),
('PPFEELP', 1, 1, 1, 2, 1, 1, 'Projet De Fin D\'Etudes', 'NS1_LPDGCV'),
('PPFFEELP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPCFA'),
('PPQL', 1, 1, 1, 2, 1, 1, 'Préparateur en parapharmacie', 'NS1_PRD'),
('PPSTTSR', 1, 1, 1, 2, 1, 1, 'Programmation des procédures stockées et des triggers', 'NS2_TSRDI'),
('PRCUSGLP', 1, 1, 1, 2, 1, 1, 'Prise en charge des usagers', 'NS1_LPGSSS'),
('PRFELP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPGE'),
('PRFINELP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPMTI'),
('PRFINETLP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPABFCCPE'),
('PRINSTRLP', 1, 1, 1, 2, 1, 1, 'Partenariats industriels', 'NS1_LPLTI'),
('PRJTFNETLP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPGSSS'),
('PRPEDLP', 1, 1, 1, 2, 1, 1, 'Produits et productions éditoriaux', 'NS1_LPMJP'),
('PRTFETLP', 1, 1, 1, 2, 1, 1, 'Projet fin d’étude', 'NS1_LPGCIC'),
('PSHQL', 1, 1, 1, 2, 1, 1, 'Photoshop', 'NS2_INFO'),
('PSITC', 1, 1, 1, 2, 1, 1, 'Programmation de script pour internet', 'NS1_TCINFO'),
('PSSTSR', 1, 1, 1, 2, 1, 1, 'Psychologie sociale', 'NS1_TSRIOJ'),
('PSWDTSP', 1, 1, 1, 2, 1, 1, 'Programmation de Sites Web Dynamiques', 'NS2_TSPDI'),
('RCDMTSR', 1, 1, 1, 2, 1, 1, 'Recherche documentaire', 'NS2_TSRIOJ'),
('RDMSSLP', 1, 1, 1, 2, 1, 1, 'RDM : Sollicitations Simples', 'NS1_LPGCIC'),
('RDTC', 1, 1, 1, 2, 1, 1, 'Réception et déchargement', 'NS2_TCL'),
('REIQL', 1, 1, 1, 2, 1, 1, 'Les relations économiques internationales', 'NS1_GDE'),
('RELSSTSR', 1, 1, 1, 2, 1, 1, 'Réalisation des essais en laboratoire et in situ des sols', 'NS1_TSRCTP'),
('RETSP', 1, 1, 1, 2, 1, 1, 'Recherche d’Emploi', 'NS2_TSPDI'),
('RHS', 1, 1, 1, 2, 1, 1, 'Règles d’hygiène et de sécurité', 'NS1_TCL'),
('RIIQL', 1, 1, 1, 2, 1, 1, 'Recherche d\'informations sur internet', 'NS2_INFO'),
('RLRSMTC', 1, 1, 1, 2, 1, 1, 'Règlementation liée au transport routier et au stockage de marchandises', 'NS1_TCL'),
('RMTSR', 1, 1, 1, 2, 1, 1, 'Réalisation d\'une maquette', 'NS2_TSRIG'),
('RPCETC', 1, 1, 1, 2, 1, 1, 'Réalisation des plans d\'une construction à étages', 'NS2_TCDB'),
('RPCSTC', 1, 1, 1, 2, 1, 1, 'Réalisation des plans d\'une construction simple', 'NS1_TCDB'),
('RPTC', 1, 1, 1, 2, 1, 1, 'Relations professionnelles', 'NS1_TCRH'),
('RSABCLP', 1, 1, 1, 2, 1, 1, 'Risque de l’activité bancaire', 'NS1_LPABFCCPE'),
('RSSHEJLP', 1, 1, 1, 2, 1, 1, 'Ressources humaines et environnement juridique', 'NS1_LPGSSS'),
('RSTC', 1, 1, 1, 2, 1, 1, 'Rangement des stocks', 'NS2_TCL'),
('RTNTSR', 1, 1, 1, 2, 1, 1, 'Réglementation du transport national', 'NS1_TSRTL'),
('RWANBULP', 1, 1, 1, 2, 1, 1, 'Routage WAN et liens back up', 'NS1_LPMRITPRS'),
('S1TC', 1, 1, 1, 2, 1, 1, 'Statistiques 1', 'NS1_TCAC'),
('SAPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRIOJ'),
('SCMMMILP', 1, 1, 1, 2, 1, 1, 'Stratégie de communication et management interculturel', 'NS1_LPMTI'),
('SCPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRCTP'),
('SCQTTSR', 1, 1, 1, 2, 1, 1, 'Sécurité et qualité', 'NS1_TSRTL'),
('SDTC', 1, 1, 1, 2, 1, 1, 'Structure de données', 'NS2_TCINFO'),
('SEPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRGE'),
('SETC', 1, 1, 1, 2, 1, 1, 'Système d’exploitation', 'NS1_TCINFO'),
('SFAITSR', 1, 1, 1, 2, 1, 1, 'Spécification fonctionnelle d’une application informatique', 'NS1_TSRDI'),
('SGBD1TSP', 1, 1, 1, 2, 1, 1, 'Système de Gestion de Base de Données I', 'NS2_TSPDI'),
('SGBD2TSP', 1, 1, 1, 2, 1, 1, 'Système de Gestion de base de Données II', 'NS2_TSPDI'),
('SGBDRTSR', 1, 1, 1, 2, 1, 1, 'SGBDR', 'NS2_TSRDI'),
('SHS1TSR', 1, 1, 1, 2, 1, 1, 'Science humaines et socials 1', 'NS1_TSRIOJ'),
('SHS2TSR', 1, 1, 1, 2, 1, 1, 'Sciences humaines et sociales 2', 'NS2_TSRIOJ'),
('SIETSR', 1, 1, 1, 2, 1, 1, 'Système d’information de l’entreprise', 'NS1_TSRDI'),
('SIGTSR', 1, 1, 1, 2, 1, 1, 'Sémiologie de l’image', 'NS1_TSRIOJ'),
('SMLGLP', 1, 1, 1, 2, 1, 1, 'Sécurité matérielle et logicielle', 'NS1_LPMRITPRS'),
('SNNPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRRH'),
('SNPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRRI'),
('SOPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRFC'),
('SOUPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRMAC'),
('SPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRDI'),
('SPPMRDLP', 1, 1, 1, 2, 1, 1, 'Spécificités parcours magazine , radio', 'NS1_LPMJP'),
('SPPTVWEBLP', 1, 1, 1, 2, 1, 1, 'Spécificités parcours TV, WEB', 'NS1_LPMJP'),
('SRPERLP', 1, 1, 1, 2, 1, 1, 'Stratégie et performance', 'NS1_LPGSSS'),
('SRSSMSLP', 1, 1, 1, 2, 1, 1, 'Structures sanitaires sociales et médico-sociales', 'NS1_LPGSSS'),
('SRVLP', 1, 1, 1, 2, 1, 1, 'Serveurs', 'NS1_LPMRITPRS'),
('SSITSR', 1, 1, 1, 2, 1, 1, 'Santé et sécurité en imprimerie', 'NS1_TSRIG'),
('SSTC', 1, 1, 1, 2, 1, 1, 'Suivi du stock', 'NS2_TCL'),
('STCPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRTL'),
('STEPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRTH'),
('STGINFO', 1, 1, 1, 2, 1, 1, 'Stage(Informatique)', 'NS2_INFO'),
('STGPRD', 1, 1, 1, 2, 1, 1, 'Stage(Paramedicale)', 'NS1_PRD'),
('STMTTSP', 1, 1, 1, 2, 1, 1, 'Soutien Technique en Milieu de Travail (Stage I)', 'NS1_TSPDI'),
('STPFETSR', 1, 1, 1, 2, 1, 1, 'Soutenance - PFE', 'NS2_TSRIG'),
('STQTSR', 1, 1, 1, 2, 1, 1, 'Statistiques', 'NS1_TSRGE'),
('STRCMPLSTLP', 1, 1, 1, 2, 1, 1, 'Stratégie de communication et planification stratégique', 'NS1_LPMCCPC'),
('STRMCMMLP', 1, 1, 1, 2, 1, 1, 'Stratégies Marketing Et Commerciales', 'NS1_LPMD'),
('SYSGESCLP', 1, 1, 1, 2, 1, 1, 'Système de gestion de contenu', 'NS1_LPMJP'),
('SYSTRSLP', 1, 1, 1, 2, 1, 1, 'Système et réseau', 'NS1_LPABDTW'),
('TBCTSR', 1, 1, 1, 2, 1, 1, 'Techniques de banques et crédits', 'NS1_TSRFC'),
('TBDTSR', 1, 1, 1, 2, 1, 1, 'Tableaux de bord', 'NS2_TSRGE'),
('TBRITSR', 1, 1, 1, 2, 1, 1, 'Techniques de base du réseau informatique', 'NS2_TSRDI'),
('TBTC', 1, 1, 1, 2, 1, 1, 'Tableaux de bord', 'NS1_TCL'),
('TCMTSR', 1, 1, 1, 2, 1, 1, 'Technique de communication', 'NS1_TSRMAC'),
('TCTC', 1, 1, 1, 2, 1, 1, 'Tenue de caisse', 'NS2_TCRH'),
('TECCAPPLP', 1, 1, 1, 2, 1, 1, 'Technique comptable approfondie', 'NS1_LPCFA'),
('TECENQLP', 1, 1, 1, 2, 1, 1, 'Techniques d\'enquête', 'NS1_LPMJP'),
('TECFPMLP', 1, 1, 1, 2, 1, 1, 'Techniques De Financement Et E-Paiement', 'NS1_LPTECI'),
('TECRDLP', 1, 1, 1, 2, 1, 1, 'Technique audio', 'NS1_LPMJP'),
('TECSPCHLP', 1, 1, 1, 2, 1, 1, 'Techniques de la supply chain', 'NS1_LPLTI'),
('TITSR', 1, 1, 1, 2, 1, 1, 'Traitement des illustrations', 'NS2_TSRIG'),
('TPPACLP', 1, 1, 1, 2, 1, 1, 'Technique de programmation procédurale (➀ Algorithme, ➁ Programmation C)', 'NS1_LPMIAGE'),
('TPSTSP', 1, 1, 1, 2, 1, 1, 'Techniques de Programmation Structurée', 'NS1_TSPDI'),
('TQGTSR', 1, 1, 1, 2, 1, 1, 'Techniques quantitative de gestion', 'NS1_TSRTL'),
('TR1TSR', 1, 1, 1, 2, 1, 1, 'Télécommunications et réseaux I', 'NS1_TSRRI'),
('TR2TSR', 1, 1, 1, 2, 1, 1, 'Télécommunications et réseaux II', 'NS2_TSRRI'),
('TRFITSR', 1, 1, 1, 2, 1, 1, 'Techniques de réalisation des formes imprimante', 'NS2_TSRIG'),
('TRSMAFFLP', 1, 1, 1, 2, 1, 1, 'Tourisme d’affaires', 'NS1_LPMTI'),
('TRSPMMLP', 1, 1, 1, 2, 1, 1, 'Transports multimodaux', 'NS1_LPLTI'),
('TRTRITLP', 1, 1, 1, 2, 1, 1, 'Tourisme et territoire – ingénierie touristique', 'NS1_LPMTI'),
('TRTSR', 1, 1, 1, 2, 1, 1, 'Trésorerie', 'NS1_TSRFC'),
('TTRTSR', 1, 1, 1, 2, 1, 1, 'Tourisme et territoire', 'NS1_TSRTH'),
('TVNTC', 1, 1, 1, 2, 1, 1, 'Techniques de vente et de négociation', 'NS1_TCCM'),
('TYPOGLP', 1, 1, 1, 2, 1, 1, 'Typographie', 'NS1_LPDGCV'),
('UEOBTSR', 1, 1, 1, 2, 1, 1, 'Utilisation de l’environnement du SE et outils bureautiques', 'NS1_TSRDI'),
('UMCTC', 1, 1, 1, 2, 1, 1, 'Utilisation des matériaux de construction', 'NS2_TCDB'),
('UMLAOOTC', 1, 1, 1, 2, 1, 1, 'UML et analyse orientée objet', 'NS2_TCINFO'),
('UMRETSR', 1, 1, 1, 2, 1, 1, 'Utilisation des moyens de recherche d’emploi', 'NS2_TSRDI'),
('VFRVTSR', 1, 1, 1, 2, 1, 1, 'Vente et Force de Vente', 'NS2_TSRRH'),
('VFVTSR', 1, 1, 1, 2, 1, 1, 'Vente et Force de Vente', 'NS2_TSRMAC'),
('VNTC', 1, 1, 1, 2, 1, 1, 'Vérification de nuit', 'NS2_TCRH'),
('VSHTC', 1, 1, 1, 2, 1, 1, 'Ventes des services hôtelleries', 'NS1_TCRH'),
('VTTSP', 1, 1, 1, 2, 1, 1, 'Veille Technologique', 'NS1_TSPDI');

-- --------------------------------------------------------

--
-- Structure de la table `niveau`
--

CREATE TABLE `niveau` (
  `code_niv` varchar(255) NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `niveau`
--

INSERT INTO `niveau` (`code_niv`, `designation`, `statut`) VALUES
('LCC', 'Licence Professionnelle', 'En cours'),
('MST', 'Master Professionnel', 'En cours'),
('QLF', 'Qualification', 'En cours'),
('TC', 'Technicien', 'En cours'),
('TCSP', 'Technicien Spécialisé', 'En cours'),
('TCSR', 'Technicien Supérieur', 'En cours');

-- --------------------------------------------------------

--
-- Structure de la table `niveau_scolaire`
--

CREATE TABLE `niveau_scolaire` (
  `code_niv_sco` varchar(255) NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `code_fil` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `niveau_scolaire`
--

INSERT INTO `niveau_scolaire` (`code_niv_sco`, `designation`, `code_fil`) VALUES
('NS1_GDE', '1ère année', 'GDE'),
('NS1_INFO', '1ère année', 'INFO'),
('NS1_LPABDTW', '1ère année', 'LPABDTW'),
('NS1_LPABFCCPE', '1ère année', 'LPABFCCPE'),
('NS1_LPCFA', '1ère année', 'LPCFA'),
('NS1_LPDGCV', '1ère année', 'LPDGCV'),
('NS1_LPGCIC', '1ère année', 'LPGCIC'),
('NS1_LPGE', '1ère année', 'LPGE'),
('NS1_LPGRH', '1ère année', 'LPGRH'),
('NS1_LPGSSS', '1ère année', 'LPGSSS'),
('NS1_LPLTI', '1ère année', 'LPLTI'),
('NS1_LPMCCPC', '1ère année', 'LPMCCPC'),
('NS1_LPMD', '1ère année', 'LPMD'),
('NS1_LPMIAGE', '1ère année', 'LPMIAGE'),
('NS1_LPMJP', '1ère année', 'LPMJP'),
('NS1_LPMN', '1ère année', 'LPMN'),
('NS1_LPMRITPRS', '1ère année', 'LPMRITPRS'),
('NS1_LPMTI', '1ère année', 'LPMTI'),
('NS1_LPTECI', '1ère année', 'LPTECI'),
('NS1_MPBPI', '1ère année', 'MPBPI'),
('NS1_MPCAEI', '1ère année', 'MPCAEI'),
('NS1_MPCCGA', '1ère année', 'MPCCGA'),
('NS1_MPCGSI', '1ère année', 'MPCGSI'),
('NS1_MPDI', '1ère année', 'MPDI'),
('NS1_MPGCPCCIB', '1ère année', 'MPGCPCCIB'),
('NS1_MPGRH', '1ère année', 'MPGRH'),
('NS1_MPICDA', '1ère année', 'MPICDA'),
('NS1_MPIEAD', '1ère année', 'MPIEAD'),
('NS1_MPISCPDSML', '1ère année', 'MPISCPDSML'),
('NS1_MPISCPIAR', '1ère année', 'MPISCPIAR'),
('NS1_MPISCPSIC', '1ère année', 'MPISCPSIC'),
('NS1_MPJ', '1ère année', 'MPJ'),
('NS1_MPJCE', '1ère année', 'MPJCE'),
('NS1_MPMIAGE', '1ère année', 'MPMIAGE'),
('NS1_MPMLMTMR', '1ère année', 'MPMLMTMR'),
('NS1_PRD', '1ère année', 'PRD'),
('NS1_TCAC', '1ère année', 'TCAC'),
('NS1_TCCM', '1ère année', 'TCCM'),
('NS1_TCDB', '1ère année', 'TCDB'),
('NS1_TCINFO', '1ère année', 'TCINFO'),
('NS1_TCL', '1ère année', 'TCL'),
('NS1_TCRH', '1ère année', 'TCRH'),
('NS1_TSPDI', '1ère année', 'TSPDI'),
('NS1_TSRCTP', '1ère année', 'TSRCTP'),
('NS1_TSRDI', '1ère année', 'TSRDI'),
('NS1_TSRFC', '1ère année', 'TSRFC'),
('NS1_TSRGE', '1ère année', 'TSRGE'),
('NS1_TSRIG', '1ère année', 'TSRIG'),
('NS1_TSRIOJ', '1ère année', 'TSRIOJ'),
('NS1_TSRMAC', '1ère année', 'TSRMAC'),
('NS1_TSRRH', '1ère année', 'TSRRH'),
('NS1_TSRRI', '1ère année', 'TSRRI'),
('NS1_TSRTH', '1ère année', 'TSRTH'),
('NS1_TSRTL', '1ère année', 'TSRTL'),
('NS2_GDE', '2ème année', 'GDE'),
('NS2_INFO', '2ème année', 'INFO'),
('NS2_MPBPI', '2ème année', 'MPBPI'),
('NS2_MPCAEI', '2ème année', 'MPCAEI'),
('NS2_MPCCGA', '2ème année', 'MPCCGA'),
('NS2_MPCGSI', '2ème année', 'MPCGSI'),
('NS2_MPDI', '2ème année', 'MPDI'),
('NS2_MPGCPCCIB', '2ème année', 'MPGCPCCIB'),
('NS2_MPGRH', '2ème année', 'MPGRH'),
('NS2_MPICDA', '2ème année', 'MPICDA'),
('NS2_MPIEAD', '2ème année', 'MPIEAD'),
('NS2_MPISCPDSML', '2ème année', 'MPISCPDSML'),
('NS2_MPISCPIAR', '2ème année', 'MPISCPIAR'),
('NS2_MPISCPSIC', '2ème année', 'MPISCPSIC'),
('NS2_MPJ', '2ème année', 'MPJ'),
('NS2_MPJCE', '2ème année', 'MPJCE'),
('NS2_MPMIAGE', '2ème année', 'MPMIAGE'),
('NS2_MPMLMTMR', '2ème année', 'MPMLMTMR'),
('NS2_TCCM', '2ème année', 'TCCM'),
('NS2_TCDB', '2ème année', 'TCDB'),
('NS2_TCINFO', '2ème année', 'TCINFO'),
('NS2_TCL', '2ème année', 'TCL'),
('NS2_TCRH', '2ème année', 'TCRH'),
('NS2_TSPDI', '2ème année', 'TSPDI'),
('NS2_TSRCTP', '2ème année', 'TSRCTP'),
('NS2_TSRDI', '2ème année', 'TSRDI'),
('NS2_TSRFC', '2ème année', 'TSRFC'),
('NS2_TSRGE', '2ème année', 'TSRGE'),
('NS2_TSRIG', '2ème année', 'TSRIG'),
('NS2_TSRIOJ', '2ème année', 'TSRIOJ'),
('NS2_TSRMAC', '2ème année', 'TSRMAC'),
('NS2_TSRRH', '2ème année', 'TSRRH'),
('NS2_TSRRI', '2ème année', 'TSRRI'),
('NS2_TSRTH', '2ème année', 'TSRTH'),
('NS2_TSRTL', '2ème année', 'TSRTL');

-- --------------------------------------------------------

--
-- Structure de la table `note_normale`
--

CREATE TABLE `note_normale` (
  `id_note` bigint(20) NOT NULL,
  `ctrl_1` double NOT NULL,
  `ctrl_2` double NOT NULL,
  `ctrl_3` double NOT NULL,
  `exam_1` double NOT NULL,
  `exam_2` double NOT NULL,
  `exam_3` double NOT NULL,
  `moyenne` double NOT NULL,
  `resultat` varchar(255) DEFAULT NULL,
  `session` varchar(255) DEFAULT NULL,
  `tp_1` double NOT NULL,
  `tp_2` double NOT NULL,
  `tp_3` double NOT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `code_mod` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `note_normale`
--

INSERT INTO `note_normale` (`id_note`, `ctrl_1`, `ctrl_2`, `ctrl_3`, `exam_1`, `exam_2`, `exam_3`, `moyenne`, `resultat`, `session`, `tp_1`, `tp_2`, `tp_3`, `cin`, `code_mod`) VALUES
(116, 12, 12, 0, 18, 0, 0, 16, 'Valider', 'Normale', 16, 0, 0, 'CN12345', 'DPP1TSR'),
(117, 12, 17, 0, 19, 0, 0, 17.625, 'Valider', 'Normale', 18, 0, 0, 'CN12345', 'EL1TSR'),
(118, 16, 17, 0, 13, 0, 0, 13.875, 'Valider', 'Normale', 13, 0, 0, 'CN12345', 'FSH1TSR'),
(119, 16, 17, 0, 19, 0, 0, 17.875, 'Valider', 'Normale', 17, 0, 0, 'CN12345', 'IEI1TSR'),
(120, 16, 16, 0, 13, 0, 0, 13.25, 'Valider', 'Normale', 11, 0, 0, 'CN12345', 'TR1TSR'),
(121, 15, 15, 0, 18, 0, 0, 16, 'Valider', 'Normale', 13, 0, 0, 'CN12345', 'DPP2TSR'),
(122, 16, 17, 0, 13, 0, 0, 14.125, 'Valider', 'Normale', 14, 0, 0, 'CN12345', 'EL2TSR'),
(123, 15, 15, 0, 11, 0, 0, 13.25, 'Valider', 'Normale', 16, 0, 0, 'CN12345', 'FSH2TSR'),
(124, 16, 16, 0, 17, 0, 0, 17, 'Valider', 'Normale', 18, 0, 0, 'CN12345', 'IEI2TSR'),
(125, 15, 15, 0, 15, 0, 0, 15, 'Valider', 'Normale', 15, 0, 0, 'CN12345', 'SNPFETSR'),
(126, 15, 13, 0, 16, 0, 0, 14.75, 'Valider', 'Normale', 13, 0, 0, 'CN12345', 'TR2TSR'),
(127, 13, 14, 0, 15, 0, 0, 14.625, 'Valider', 'Normale', 15, 0, 0, 'CN78431', 'EOQL'),
(128, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN78431', 'FCEQL'),
(129, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN78431', 'FGDCQL'),
(130, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN78431', 'FGPOQL'),
(131, 4, 5, 0, 2, 0, 0, 4.125, 'Non-Valider', 'Normale', 8, 0, 0, 'CN78431', 'IMQL'),
(132, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN78431', 'REIQL'),
(133, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN78431', 'CFCQL'),
(134, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN78431', 'DACQL'),
(135, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN78431', 'DGQL'),
(136, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN78431', 'GPQL'),
(137, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN78431', 'IGQL'),
(138, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN78431', 'LBQL'),
(139, 15, 14, 0, 17, 0, 0, 15.125, 'Valider', 'Normale', 12, 0, 0, 'JK63289', 'EOQL'),
(140, 15, 17, 0, 18, 0, 0, 16.75, 'Valider', 'Normale', 15, 0, 0, 'JK63289', 'FCEQL'),
(141, 15, 17, 0, 18, 0, 0, 16, 'Valider', 'Normale', 12, 0, 0, 'JK63289', 'FGDCQL'),
(142, 16, 12, 0, 11, 0, 0, 13.75, 'Valider', 'Normale', 19, 0, 0, 'JK63289', 'FGPOQL'),
(143, 16, 17, 0, 18, 0, 0, 17.625, 'Valider', 'Normale', 18, 0, 0, 'JK63289', 'IMQL'),
(144, 14, 15, 0, 10, 0, 0, 12.875, 'Valider', 'Normale', 17, 0, 0, 'JK63289', 'REIQL'),
(145, 15, 17, 0, 15, 0, 0, 14.25, 'Valider', 'Normale', 11, 0, 0, 'JK63289', 'CFCQL'),
(146, 15, 17, 0, 9, 0, 0, 11.25, 'Valider', 'Normale', 11, 0, 0, 'JK63289', 'DACQL'),
(147, 10, 16, 0, 20, 0, 0, 18, 'Valider', 'Normale', 19, 0, 0, 'JK63289', 'DGQL'),
(148, 16, 16, 0, 16, 0, 0, 16, 'Valider', 'Normale', 16, 0, 0, 'JK63289', 'GPQL'),
(149, 16, 17, 0, 20, 0, 0, 18.625, 'Valider', 'Normale', 18, 0, 0, 'JK63289', 'IGQL'),
(150, 11, 14, 0, 13, 0, 0, 13.125, 'Valider', 'Normale', 14, 0, 0, 'JK63289', 'LBQL'),
(151, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'EOQL'),
(152, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'FCEQL'),
(153, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'FGDCQL'),
(154, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'FGPOQL'),
(155, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'IMQL'),
(156, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'REIQL'),
(157, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'CFCQL'),
(158, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'DACQL'),
(159, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'DGQL'),
(160, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'GPQL'),
(161, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'IGQL'),
(162, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CM34729', 'LBQL'),
(163, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN63217', 'ADQL'),
(164, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN63217', 'APQL'),
(165, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN63217', 'ESQL'),
(166, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN63217', 'HOQL'),
(167, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN63217', 'NNQL'),
(168, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN63217', 'NPQL'),
(169, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN63217', 'PGDQL'),
(170, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN63217', 'PPQL'),
(171, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CN63217', 'STGPRD'),
(172, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB46382', 'ADQL'),
(173, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB46382', 'APQL'),
(174, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB46382', 'ESQL'),
(175, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB46382', 'HOQL'),
(176, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB46382', 'NNQL'),
(177, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB46382', 'NPQL'),
(178, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB46382', 'PGDQL'),
(179, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB46382', 'PPQL'),
(180, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB46382', 'STGPRD'),
(181, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB638954', 'CRMMGLP'),
(182, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB638954', 'ENVEJWEBLP'),
(183, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB638954', 'ERGEXPUTLP'),
(184, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB638954', 'GESENTRPLP'),
(185, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB638954', 'GESPRMKLP'),
(186, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB638954', 'MRCMMMLP'),
(187, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB638954', 'OUTDWEBANLP'),
(188, 0, 0, 0, 0, 0, 0, 0, 'Non-Valider', 'Normale', 0, 0, 0, 'CB638954', 'STRMCMMLP');

-- --------------------------------------------------------

--
-- Structure de la table `note_rattrapage`
--

CREATE TABLE `note_rattrapage` (
  `id_note` bigint(20) NOT NULL,
  `ctrl_1` double NOT NULL,
  `ctrl_2` double NOT NULL,
  `ctrl_3` double NOT NULL,
  `etudiant_dans_note_rattrapage` bit(1) NOT NULL,
  `exam_1` double NOT NULL,
  `exam_2` double NOT NULL,
  `exam_3` double NOT NULL,
  `moyenne` double NOT NULL,
  `resultat` varchar(255) DEFAULT NULL,
  `session` varchar(255) DEFAULT NULL,
  `tp_1` double NOT NULL,
  `tp_2` double NOT NULL,
  `tp_3` double NOT NULL,
  `cin` varchar(255) DEFAULT NULL,
  `code_mod` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `professeur`
--

CREATE TABLE `professeur` (
  `cin` varchar(255) NOT NULL,
  `date_naissance` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nationalite` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `professeur`
--

INSERT INTO `professeur` (`cin`, `date_naissance`, `email`, `login`, `nationalite`, `nom`, `password`, `prenom`, `sexe`, `statut`, `telephone`, `ville`) VALUES
('CB51845', '1984-02-13', 'rachid.idrissi@gmail.com', 'CB51845', 'Marocaine', 'IDRISSI', 'CB51845', 'Rachid', 'Enseignant', 'En cours', '+212677889900', 'RABAT'),
('CN82743', '1993-06-08', 'salma.benjellon@gmail.com', 'CN82743', 'Marocaine', 'BENJELLON', 'CN82743', 'Salma', 'Enseignante', 'En cours', '+212677889900', 'FES'),
('GR36714', '1989-05-29', 'ayoub.benani@gmail.com', 'GR36714', 'Marocaine', 'BENANI', 'GR36714', 'Ayoub', 'Enseignant', 'En cours', '+212677889900', 'RABAT');

-- --------------------------------------------------------

--
-- Structure de la table `responsable`
--

CREATE TABLE `responsable` (
  `cin` varchar(255) NOT NULL,
  `date_naissance` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `nationalite` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `sexe` varchar(255) DEFAULT NULL,
  `statut` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `responsable`
--

INSERT INTO `responsable` (`cin`, `date_naissance`, `email`, `login`, `nationalite`, `nom`, `password`, `prenom`, `sexe`, `statut`, `telephone`, `ville`) VALUES
('CN43719', '1991-06-13 00:00:00', 'mahmoud.benjellon@epg.ma', 'CN43719', 'Marocaine', 'BENJELLON', 'CN43719', 'Mahmoud', 'Homme', 'En cours', '+212677889900', 'FES'),
('CN47852', '1983-08-24 00:00:00', 'contact@epg.ma', 'CN47852', 'Marocaine', 'LAZRAK', 'CN47852', 'ALAE EDDINE', 'Homme', 'En cours', '+212619086666', 'FES'),
('JM62819', '1994-10-14 00:00:00', 'youssef.bouarfa@gmail.com', 'JM62819', 'Marocaine', 'BOUARFA', 'JM62819', 'Youssef', 'Homme', 'En cours', '+212677889900', 'FES');

-- --------------------------------------------------------

--
-- Structure de la table `section`
--

CREATE TABLE `section` (
  `code_sec` varchar(255) NOT NULL,
  `designation` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `section`
--

INSERT INTO `section` (`code_sec`, `designation`) VALUES
('SECA', 'Section A'),
('SECB', 'Section B'),
('SECC', 'Section C'),
('SECD', 'Section D');

-- --------------------------------------------------------

--
-- Structure de la table `section_filier`
--

CREATE TABLE `section_filier` (
  `id` bigint(20) NOT NULL,
  `code_fil` varchar(255) DEFAULT NULL,
  `code_sec` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `section_filier`
--

INSERT INTO `section_filier` (`id`, `code_fil`, `code_sec`) VALUES
(1, 'INFO', 'SECA'),
(2, 'INFO', 'SECB'),
(3, 'GDE', 'SECA'),
(4, 'GDE', 'SECB'),
(5, 'PRD', 'SECA'),
(6, 'PRD', 'SECB'),
(7, 'TCINFO', 'SECA'),
(8, 'TCINFO', 'SECB'),
(9, 'TCAC', 'SECA'),
(10, 'TCAC', 'SECB'),
(11, 'TCCTP', 'SECA'),
(12, 'TCCTP', 'SECB'),
(13, 'TCCM', 'SECA'),
(14, 'TCCM', 'SECB'),
(15, 'TCDB', 'SECA'),
(16, 'TCDB', 'SECB'),
(17, 'TCL', 'SECA'),
(18, 'TCL', 'SECB'),
(19, 'TCRH', 'SECA'),
(20, 'TCRH', 'SECB'),
(21, 'TSPDI', 'SECA'),
(22, 'TSPDI', 'SECB'),
(23, 'TSRDI', 'SECA'),
(24, 'TSRDI', 'SECB'),
(25, 'TSRIG', 'SECA'),
(26, 'TSRIG', 'SECB'),
(27, 'TSRRI', 'SECA'),
(28, 'TSRRI', 'SECB'),
(29, 'TSRCTP', 'SECA'),
(30, 'TSRCTP', 'SECB'),
(31, 'TSRFC', 'SECA'),
(32, 'TSRFC', 'SECB'),
(33, 'TSRGE', 'SECA'),
(34, 'TSRGE', 'SECB'),
(35, 'TSRTH', 'SECA'),
(36, 'TSRTH', 'SECB'),
(37, 'TSRMAC', 'SECA'),
(38, 'TSRMAC', 'SECB'),
(39, 'TSRIOJ', 'SECA'),
(40, 'TSRIOJ', 'SECB'),
(41, 'TSRTL', 'SECA'),
(42, 'TSRTL', 'SECB'),
(43, 'TSRRH', 'SECA'),
(44, 'TSRRH', 'SECB'),
(45, 'LPMIAGE', 'SECA'),
(46, 'LPMIAGE', 'SECB'),
(47, 'LPMRITPRS', 'SECA'),
(48, 'LPMRITPRS', 'SECB'),
(49, 'LPABDTW', 'SECA'),
(50, 'LPABDTW', 'SECB'),
(51, 'LPDGCV', 'SECA'),
(52, 'LPDGCV', 'SECB'),
(53, 'LPCFA', 'SECA'),
(54, 'LPCFA', 'SECB'),
(55, 'LPGE', 'SECA'),
(56, 'LPGE', 'SECB'),
(57, 'LPMN', 'SECA'),
(58, 'LPMN', 'SECB'),
(59, 'LPGCIC', 'SECA'),
(60, 'LPGCIC', 'SECB'),
(61, 'LPTECI', 'SECA'),
(62, 'LPTECI', 'SECB'),
(63, 'LPMTI', 'SECA'),
(64, 'LPMTI', 'SECB'),
(65, 'LPMCCPC', 'SECA'),
(66, 'LPMCCPC', 'SECB'),
(67, 'LPABFCCPE', 'SECA'),
(68, 'LPABFCCPE', 'SECB'),
(69, 'LPMJP', 'SECA'),
(70, 'LPMJP', 'SECB'),
(71, 'LPLTI', 'SECA'),
(72, 'LPLTI', 'SECB'),
(73, 'LPMD', 'SECA'),
(74, 'LPMD', 'SECB'),
(75, 'LPGRH', 'SECA'),
(76, 'LPGRH', 'SECB'),
(77, 'LPGSSS', 'SECA'),
(78, 'LPGSSS', 'SECB'),
(79, 'MPISCPSIC', 'SECA'),
(80, 'MPISCPSIC', 'SECB'),
(81, 'MPISCPDSML', 'SECA'),
(82, 'MPISCPDSML', 'SECB'),
(83, 'MPICDA', 'SECA'),
(84, 'MPICDA', 'SECB'),
(85, 'MPISCPIAR', 'SECA'),
(86, 'MPISCPIAR', 'SECB'),
(87, 'MPMIAGE', 'SECA'),
(88, 'MPMIAGE', 'SECB'),
(89, 'MPBPI', 'SECA'),
(90, 'MPBPI', 'SECB'),
(91, 'MPCCGA', 'SECA'),
(92, 'MPCCGA', 'SECB'),
(93, 'MPCAEI', 'SECA'),
(94, 'MPCAEI', 'SECB'),
(95, 'MPDI', 'SECA'),
(96, 'MPDI', 'SECB'),
(97, 'MPGCPCCIB', 'SECA'),
(98, 'MPGCPCCIB', 'SECB'),
(99, 'MPJ', 'SECA'),
(100, 'MPJ', 'SECB'),
(101, 'MPGRH', 'SECA'),
(102, 'MPGRH', 'SECB'),
(103, 'MPJCE', 'SECA'),
(104, 'MPJCE', 'SECB'),
(105, 'MPMLMTMR', 'SECA'),
(106, 'MPMLMTMR', 'SECB'),
(107, 'MPCGSI', 'SECA'),
(108, 'MPCGSI', 'SECB'),
(109, 'MPIEAD', 'SECA'),
(110, 'MPIEAD', 'SECB');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `absence`
--
ALTER TABLE `absence`
  ADD PRIMARY KEY (`id_abs`),
  ADD KEY `FKjcp93x9jqinl5sbkpk8he2v3u` (`cin`),
  ADD KEY `FK2yl9r0tyw8mbmjc543hb1dw2t` (`code_mod`);

--
-- Index pour la table `date_inscreption`
--
ALTER TABLE `date_inscreption`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `details_prof_module`
--
ALTER TABLE `details_prof_module`
  ADD PRIMARY KEY (`id_prof_mod`),
  ADD KEY `FK85idqe81qb9943goa2s8wio3r` (`code_mod`),
  ADD KEY `FK6a8ynk055kreh96altx0qt6sj` (`cin`);

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`cin`),
  ADD KEY `FKt4hsd2xnys01x8dfp3t8l7l9y` (`code_fil`);

--
-- Index pour la table `filiere`
--
ALTER TABLE `filiere`
  ADD PRIMARY KEY (`code_fil`),
  ADD KEY `FKh8c96e5lxltxdwmif5qejwwkf` (`code_niv`),
  ADD KEY `FKs03it6jit1gj0nejnxt5hdial` (`cin`);

--
-- Index pour la table `inscreption`
--
ALTER TABLE `inscreption`
  ADD PRIMARY KEY (`cin`),
  ADD KEY `FK5r4c9yhylr4kghtvrktk5fvns` (`code_fil`);

--
-- Index pour la table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`code_mod`),
  ADD KEY `FK4dm4g24uqkj73ijig3icedls1` (`code_niv_sco`);

--
-- Index pour la table `niveau`
--
ALTER TABLE `niveau`
  ADD PRIMARY KEY (`code_niv`);

--
-- Index pour la table `niveau_scolaire`
--
ALTER TABLE `niveau_scolaire`
  ADD PRIMARY KEY (`code_niv_sco`),
  ADD KEY `FK3uxp3u4m5f6q0jejefqfgv4hp` (`code_fil`);

--
-- Index pour la table `note_normale`
--
ALTER TABLE `note_normale`
  ADD PRIMARY KEY (`id_note`),
  ADD KEY `FKjwrs4a9kql8gb0b5ptydssb99` (`cin`),
  ADD KEY `FK7ttm2y2s4217dhm846nxedo21` (`code_mod`);

--
-- Index pour la table `note_rattrapage`
--
ALTER TABLE `note_rattrapage`
  ADD PRIMARY KEY (`id_note`),
  ADD UNIQUE KEY `UKs1gn0onx4l24qq9txdobfuy2f` (`cin`,`code_mod`),
  ADD KEY `FK4x76p4k63t7x1njigp7wgj1bt` (`code_mod`);

--
-- Index pour la table `professeur`
--
ALTER TABLE `professeur`
  ADD PRIMARY KEY (`cin`);

--
-- Index pour la table `responsable`
--
ALTER TABLE `responsable`
  ADD PRIMARY KEY (`cin`);

--
-- Index pour la table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`code_sec`);

--
-- Index pour la table `section_filier`
--
ALTER TABLE `section_filier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK3xd69u8p922mim0u6aq5uqous` (`code_fil`),
  ADD KEY `FKhu1lcq4fbjhhkdsrck1du40lp` (`code_sec`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `absence`
--
ALTER TABLE `absence`
  MODIFY `id_abs` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT pour la table `details_prof_module`
--
ALTER TABLE `details_prof_module`
  MODIFY `id_prof_mod` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `note_normale`
--
ALTER TABLE `note_normale`
  MODIFY `id_note` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=189;

--
-- AUTO_INCREMENT pour la table `note_rattrapage`
--
ALTER TABLE `note_rattrapage`
  MODIFY `id_note` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT pour la table `section_filier`
--
ALTER TABLE `section_filier`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `absence`
--
ALTER TABLE `absence`
  ADD CONSTRAINT `FK2yl9r0tyw8mbmjc543hb1dw2t` FOREIGN KEY (`code_mod`) REFERENCES `module` (`code_mod`),
  ADD CONSTRAINT `FKjcp93x9jqinl5sbkpk8he2v3u` FOREIGN KEY (`cin`) REFERENCES `etudiant` (`cin`);

--
-- Contraintes pour la table `details_prof_module`
--
ALTER TABLE `details_prof_module`
  ADD CONSTRAINT `FK6a8ynk055kreh96altx0qt6sj` FOREIGN KEY (`cin`) REFERENCES `professeur` (`cin`),
  ADD CONSTRAINT `FK85idqe81qb9943goa2s8wio3r` FOREIGN KEY (`code_mod`) REFERENCES `module` (`code_mod`);

--
-- Contraintes pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `FKt4hsd2xnys01x8dfp3t8l7l9y` FOREIGN KEY (`code_fil`) REFERENCES `filiere` (`code_fil`);

--
-- Contraintes pour la table `filiere`
--
ALTER TABLE `filiere`
  ADD CONSTRAINT `FKh8c96e5lxltxdwmif5qejwwkf` FOREIGN KEY (`code_niv`) REFERENCES `niveau` (`code_niv`),
  ADD CONSTRAINT `FKs03it6jit1gj0nejnxt5hdial` FOREIGN KEY (`cin`) REFERENCES `responsable` (`cin`);

--
-- Contraintes pour la table `inscreption`
--
ALTER TABLE `inscreption`
  ADD CONSTRAINT `FK5r4c9yhylr4kghtvrktk5fvns` FOREIGN KEY (`code_fil`) REFERENCES `filiere` (`code_fil`);

--
-- Contraintes pour la table `module`
--
ALTER TABLE `module`
  ADD CONSTRAINT `FK4dm4g24uqkj73ijig3icedls1` FOREIGN KEY (`code_niv_sco`) REFERENCES `niveau_scolaire` (`code_niv_sco`);

--
-- Contraintes pour la table `niveau_scolaire`
--
ALTER TABLE `niveau_scolaire`
  ADD CONSTRAINT `FK3uxp3u4m5f6q0jejefqfgv4hp` FOREIGN KEY (`code_fil`) REFERENCES `filiere` (`code_fil`);

--
-- Contraintes pour la table `note_normale`
--
ALTER TABLE `note_normale`
  ADD CONSTRAINT `FK7ttm2y2s4217dhm846nxedo21` FOREIGN KEY (`code_mod`) REFERENCES `module` (`code_mod`),
  ADD CONSTRAINT `FKjwrs4a9kql8gb0b5ptydssb99` FOREIGN KEY (`cin`) REFERENCES `etudiant` (`cin`);

--
-- Contraintes pour la table `note_rattrapage`
--
ALTER TABLE `note_rattrapage`
  ADD CONSTRAINT `FK4x76p4k63t7x1njigp7wgj1bt` FOREIGN KEY (`code_mod`) REFERENCES `module` (`code_mod`),
  ADD CONSTRAINT `FKpctxuvxwr7qdaqop4hwx816ph` FOREIGN KEY (`cin`) REFERENCES `etudiant` (`cin`);

--
-- Contraintes pour la table `section_filier`
--
ALTER TABLE `section_filier`
  ADD CONSTRAINT `FK3xd69u8p922mim0u6aq5uqous` FOREIGN KEY (`code_fil`) REFERENCES `filiere` (`code_fil`),
  ADD CONSTRAINT `FKhu1lcq4fbjhhkdsrck1du40lp` FOREIGN KEY (`code_sec`) REFERENCES `section` (`code_sec`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
