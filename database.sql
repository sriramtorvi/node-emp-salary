--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

-- --------------------------------------------------------

--
-- Table structure for table `emp_details`
--

CREATE TABLE `emp_details` (
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `salary` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `emp_details`
--

INSERT INTO `emp_details` (`email`, `name`, `salary`) VALUES
('aditya@abc.com', 'Aditya', 40000),
('sriram@abc.com', 'sriram torvi', 50000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `emp_details`
--
ALTER TABLE `emp_details`
  ADD PRIMARY KEY (`email`);
COMMIT;
