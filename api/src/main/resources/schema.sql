CREATE TABLE IF NOT EXISTS ROLE (
    ROLE_ID INT PRIMARY KEY AUTO_INCREMENT,
    TYPE VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS SECTOR (
    SECTOR_ID INT PRIMARY KEY AUTO_INCREMENT,
    CODE VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS TEAM (
    TEAM_ID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(255) NOT NULL,
    SECTOR_ID INT NOT NULL,
    FOREIGN KEY (SECTOR_ID) REFERENCES SECTOR(SECTOR_ID)
);

CREATE TABLE IF NOT EXISTS USER (
    USER_ID INT PRIMARY KEY AUTO_INCREMENT,
    FIRST_NAME VARCHAR(255) NOT NULL,
    LAST_NAME VARCHAR(255) NOT NULL,
    EMAIL VARCHAR(255) NOT NULL,
    TEAM_ID INT NOT NULL,
    ROLE_ID INT NOT NULL,
    FOREIGN KEY (TEAM_ID) REFERENCES TEAM(TEAM_ID),
    FOREIGN KEY (ROLE_ID) REFERENCES ROLE(ROLE_ID)
);

CREATE TABLE IF NOT EXISTS PLACE (
    PLACE_ID INT PRIMARY KEY AUTO_INCREMENT,
    SECTOR_ID INT NOT NULL,
    NUMBER VARCHAR(255) NOT NULL,
    TYPE VARCHAR(255) NOT NULL,
    FOREIGN KEY (SECTOR_ID) REFERENCES SECTOR(SECTOR_ID)
);

CREATE TABLE IF NOT EXISTS RESERVATION (
    RESERVATION_ID INT PRIMARY KEY AUTO_INCREMENT,
    PLACE_ID INT NOT NULL,
    USER_ID INT NOT NULL,
    TYPE VARCHAR(255) NOT NULL,
    FOREIGN KEY (PLACE_ID) REFERENCES PLACE(PLACE_ID),
    FOREIGN KEY (USER_ID) REFERENCES USER(USER_ID)
);

CREATE TABLE IF NOT EXISTS COMMENT (
    COMMENT_ID INT PRIMARY KEY AUTO_INCREMENT,
    TITLE VARCHAR(255) NOT NULL,
    DESCRIPTION VARCHAR(4096) NOT NULL,
    RESERVATION_ID INT NOT NULL,
    USER_ID INT NOT NULL,
    FOREIGN KEY (RESERVATION_ID) REFERENCES RESERVATION(RESERVATION_ID),
    FOREIGN KEY (USER_ID) REFERENCES USER(USER_ID)
);

CREATE TABLE IF NOT EXISTS EQUIPMENT (
    EQUIPMENT_ID INT PRIMARY KEY AUTO_INCREMENT,
    PLACE_ID INT NOT NULL,
    RESERVATION_ID INT NOT NULL,
    NAME VARCHAR(255) NOT NULL,
    TYPE VARCHAR(255) NOT NULL,
    FOREIGN KEY (PLACE_ID) REFERENCES PLACE(PLACE_ID),
    FOREIGN KEY (RESERVATION_ID) REFERENCES RESERVATION(RESERVATION_ID)
);
