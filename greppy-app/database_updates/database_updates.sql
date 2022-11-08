
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `age`) VALUES
(9, 'Frank', 'Castle', 30),
(10, 'Peter', 'Parker', 20),
(11, 'John', 'Smith', 25),
(12, 'Jack', 'The reaper', 100),
(13, 'Jackson', 'Smith', 28),
(14, 'Tyson', 'Fury', 30),
(15, 'Tony', 'Stark', 38),
(16, 'Steve', 'Rogers', 100),
(17, 'Steven', 'Seagal', 60),
(18, 'Jonny', 'Deep', 60);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;
