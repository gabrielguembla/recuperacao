CREATE DATABASE IF NOT EXISTS ggtune CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

SHOW DATABASES;

USE ggtune;

--  =========================
--  USERS TABLE
--  =========================

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('listener', 'artist', 'admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--  =========================
--  SONGS TABLE
--  =========================

CREATE TABLE IF NOT EXISTS songs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    duration VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--  =========================
--  SAMPLE  USERS
--  =========================

INSERT INTO
    users (name, email, password, role)
VALUES (
        'Gabriel Silva',
        'gabriel@example.com',
        '123456',
        'listener'
    ),
    (
        'Taylor Swift',
        'taylor@example.com',
        '123456',
        'artist'
    );

--  =========================
--  SAMPLE SONGS
--  =========================

INSERT INTO
    songs (
        title,
        artist,
        genre,
        duration
    )
VALUES (
        'Blinding Lights',
        'The Weeknd',
        'Pop',
        '3:20'
    ),
    (
        'Shape of You',
        'Ed Sheeran',
        'Pop',
        '3:53'
    ),
    (
        'Smells Like Teen Spirit',
        'Nirvana',
        'Rock',
        '5:01'
    ),
    (
        'Billie Jean',
        'Michael Jackson',
        'Pop',
        '4:54'
    ),
    (
        'Bohemian Rhapsody',
        'Queen',
        'Rock',
        '5:55'
    );

-- SELECT DATABASE();

-- SELECT @@port;
USE ggtune;

SELECT * FROM users;

SELECT * FROM songs;

USE ggtune;

SELECT
    id,
    name,
    email,
    role,
    created_at
FROM users
ORDER BY id DESC;


USE ggtune;

-- SELECT * 
-- FROM users
-- WHERE id = 6;


-- SELECT COUNT(*) AS total_users
-- FROM users;

-- SELECT MAX(id) AS highest_id
-- FROM users;


DROP DATABASE IF EXISTS ggtune;



SELECT
    @@hostname AS hostname,
    @@port AS port,
    @@datadir AS data_directory;