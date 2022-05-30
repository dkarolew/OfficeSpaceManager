CREATE TABLE IF NOT EXISTS sector (
    SECTOR_ID INT PRIMARY KEY AUTO_INCREMENT,
    CODE VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS team (
    TEAM_ID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS user (
    USER_ID INT PRIMARY KEY AUTO_INCREMENT,
    FIRST_NAME VARCHAR(255) NOT NULL,
    LAST_NAME VARCHAR(255) NOT NULL,
    EMAIL VARCHAR(255) NOT NULL,
    TEAM_ID INT NOT NULL,
    ROLE VARCHAR(255) NOT NULL,
    PASSWORD VARCHAR(255) NOT NULL,
    EXPIRATION_DATE DATETIME NOT NULL,
    FOREIGN KEY (TEAM_ID) REFERENCES team(TEAM_ID)
);

CREATE TABLE IF NOT EXISTS place (
    PLACE_ID INT PRIMARY KEY AUTO_INCREMENT,
    SECTOR_ID INT NOT NULL,
    NUMBER VARCHAR(255) NOT NULL,
    TYPE VARCHAR(255) NOT NULL,
    STATE VARCHAR(255) NOT NULL,
    FOREIGN KEY (SECTOR_ID) REFERENCES sector(SECTOR_ID)
);

CREATE TABLE IF NOT EXISTS reservation (
    RESERVATION_ID INT PRIMARY KEY AUTO_INCREMENT,
    PLACE_ID INT NOT NULL,
    USER_ID INT NOT NULL,
    DATE_START DATETIME NOT NULL,
    DATE_END DATETIME NOT NULL,
    REMINDER_EMAIL BOOLEAN NOT NULL,
    FOREIGN KEY (PLACE_ID) REFERENCES place(PLACE_ID),
    FOREIGN KEY (USER_ID) REFERENCES user(USER_ID)
);

CREATE TABLE IF NOT EXISTS comment (
    COMMENT_ID INT PRIMARY KEY AUTO_INCREMENT,
    TITLE VARCHAR(255) NOT NULL,
    DESCRIPTION VARCHAR(4096) NOT NULL,
    RESERVATION_ID INT NOT NULL,
    USER_ID INT NOT NULL,
    FOREIGN KEY (RESERVATION_ID) REFERENCES reservation(RESERVATION_ID),
    FOREIGN KEY (USER_ID) REFERENCES user(USER_ID)
);

CREATE TABLE IF NOT EXISTS equipment (
    EQUIPMENT_ID INT PRIMARY KEY AUTO_INCREMENT,
    PLACE_ID INT NOT NULL,
    RESERVATION_ID INT NOT NULL,
    TYPE VARCHAR(255) NOT NULL,
    FOREIGN KEY (PLACE_ID) REFERENCES place(PLACE_ID),
    FOREIGN KEY (RESERVATION_ID) REFERENCES reservation(RESERVATION_ID)
);
