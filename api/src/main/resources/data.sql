SET FOREIGN_KEY_CHECKS=0;

delete from user;
delete from team;
delete from place;
delete from sector;

SET FOREIGN_KEY_CHECKS=1;

--------------------teams--------------------

insert into team (team_id, name)
    values (1, 'ADMIN_TEAM');


--------------------users--------------------

insert into user (user_id, first_name, last_name, email, team_id, role, password, expiration_date)
	values (1, 'admin', 'admin', 'admin@email.com', '1', 'ADMIN', '$2a$12$riGs6Ir78E.5o253aSyR2OUo/RBrIXo2NUaAQc5iWGbLf8F.G3z8a', '2023-07-03');

--------------------sectors--------------------

insert into sector (sector_id, code)
	values (99, 'Ground floor');
insert into sector (sector_id, code)
	values (1, 'Floor 1');
insert into sector (sector_id, code)
	values (2, 'Floor 2');
insert into sector (sector_id, code)
	values (3, 'Floor 3');

--------------------places--------------------

insert into place (place_id, sector_id, number, type, state) values (1, 99, 1, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (2, 99, 2, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (3, 99, 3, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (4, 99, 4, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (5, 99, 5, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (6, 99, 6, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (7, 99, 7, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (8, 99, 8, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (9, 99, 9, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (10, 99, 10, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (11, 99, 11, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (12, 99, 12, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (13, 99, 13, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (14, 99, 14, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (15, 99, 15, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (16, 99, 16, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (17, 99, 17, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (18, 99, 18, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (19, 99, 19, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (20, 99, 20, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (21, 99, 21, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (22, 99, 22, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (23, 99, 23, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (24, 99, 24, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (25, 99, 25, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (26, 99, 26, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (27, 99, 27, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (28, 99, 28, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (29, 99, 29, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (30, 99, 30, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (31, 99, 31, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (32, 99, 32, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (33, 99, 33, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (34, 99, 34, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (35, 99, 35, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (36, 99, 36, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (37, 99, 37, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (38, 99, 38, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (39, 99, 39, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (40, 99, 40, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (41, 99, 41, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (42, 99, 42, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (43, 99, 43, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (44, 99, 44, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (45, 99, 45, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (46, 99, 46, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (47, 99, 47, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (48, 99, 48, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (49, 99, 49, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (50, 99, 50, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (51, 99, 51, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (52, 99, 52, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (53, 99, 53, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (54, 99, 54, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (55, 99, 55, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (56, 99, 56, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (57, 99, 57, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (58, 99, 58, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (59, 99, 59, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (60, 99, 60, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (61, 99, 61, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (62, 99, 62, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (63, 99, 63, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (64, 99, 64, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (69, 1, 101, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (70, 1, 102, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (71, 1, 103, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (72, 1, 104, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (73, 1, 105, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (74, 1, 106, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (75, 1, 107, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (76, 1, 108, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (77, 1, 109, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (78, 1, 110, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (79, 1, 111, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (80, 1, 112, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (81, 1, 113, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (82, 1, 114, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (83, 1, 115, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (84, 1, 116, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (85, 1, 117, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (86, 1, 118, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (87, 1, 119, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (88, 1, 120, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (89, 1, 121, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (90, 1, 122, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (91, 1, 123, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (92, 1, 124, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (93, 1, 125, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (94, 1, 126, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (95, 1, 127, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (96, 1, 128, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (97, 1, 129, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (98, 1, 130, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (99, 1, 131, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (100, 1, 132, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (101, 1, 133, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (102, 1, 134, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (103, 1, 135, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (104, 1, 136, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (105, 1, 137, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (106, 1, 138, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (107, 1, 139, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (108, 1, 140, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (109, 1, 141, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (110, 1, 142, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (111, 1, 143, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (112, 1, 144, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (113, 1, 145, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (114, 1, 146, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (115, 1, 147, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (116, 1, 148, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (117, 1, 149, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (118, 1, 150, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (119, 1, 151, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (120, 1, 152, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (121, 1, 153, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (122, 1, 154, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (123, 1, 155, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (124, 1, 156, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (125, 1, 157, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (126, 1, 158, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (127, 1, 159, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (128, 1, 160, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (129, 1, 161, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (130, 1, 162, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (131, 1, 163, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (132, 1, 164, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (133, 1, 165, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (134, 1, 166, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (135, 1, 167, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (136, 1, 168, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (140, 2, 201, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (141, 2, 202, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (142, 2, 203, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (143, 2, 204, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (144, 2, 205, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (145, 2, 206, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (146, 2, 207, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (147, 2, 208, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (148, 2, 209, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (149, 2, 210, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (150, 2, 211, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (151, 2, 212, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (152, 2, 213, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (153, 2, 214, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (154, 2, 215, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (155, 2, 216, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (156, 2, 217, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (157, 2, 218, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (158, 2, 219, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (159, 2, 220, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (160, 2, 221, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (161, 2, 222, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (162, 2, 223, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (163, 2, 224, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (164, 2, 225, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (165, 2, 226, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (166, 2, 227, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (167, 2, 228, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (168, 2, 229, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (169, 2, 230, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (170, 2, 231, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (171, 2, 232, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (172, 2, 233, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (173, 2, 234, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (174, 2, 235, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (175, 2, 236, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (176, 2, 237, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (177, 2, 238, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (178, 2, 239, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (179, 2, 240, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (180, 2, 241, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (181, 2, 242, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (182, 2, 243, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (183, 2, 244, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (184, 2, 245, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (185, 2, 246, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (186, 2, 247, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (187, 2, 248, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (188, 2, 249, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (189, 2, 250, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (190, 2, 251, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (191, 2, 252, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (192, 2, 253, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (193, 2, 254, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (194, 2, 255, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (195, 2, 256, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (196, 2, 257, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (197, 2, 258, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (198, 2, 259, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (199, 2, 260, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (200, 2, 261, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (201, 2, 262, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (202, 2, 263, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (203, 2, 264, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (208, 3, 301, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (209, 3, 302, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (210, 3, 303, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (211, 3, 304, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (212, 3, 305, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (213, 3, 306, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (214, 3, 307, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (215, 3, 308, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (216, 3, 309, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (217, 3, 310, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (218, 3, 311, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (219, 3, 312, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (220, 3, 313, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (221, 3, 314, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (222, 3, 315, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (223, 3, 316, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (224, 3, 317, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (225, 3, 318, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (226, 3, 319, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (227, 3, 320, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (228, 3, 321, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (229, 3, 322, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (230, 3, 323, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (231, 3, 324, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (232, 3, 325, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (233, 3, 326, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (234, 3, 327, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (235, 3, 328, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (236, 3, 329, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (237, 3, 330, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (238, 3, 331, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (239, 3, 332, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (240, 3, 333, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (241, 3, 334, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (242, 3, 335, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (243, 3, 336, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (244, 3, 337, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (245, 3, 338, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (246, 3, 339, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (247, 3, 340, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (248, 3, 341, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (249, 3, 342, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (250, 3, 343, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (251, 3, 344, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (252, 3, 345, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (253, 3, 346, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (254, 3, 347, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (255, 3, 348, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (256, 3, 349, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (257, 3, 350, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (258, 3, 351, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (259, 3, 352, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (260, 3, 353, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (261, 3, 354, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (262, 3, 355, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (263, 3, 356, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (264, 3, 357, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (265, 3, 358, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (266, 3, 359, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (267, 3, 360, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (268, 3, 361, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (269, 3, 362, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (270, 3, 363, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (271, 3, 364, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (272, 3, 365, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (273, 3, 366, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (274, 3, 367, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (275, 3, 368, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (276, 3, 369, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (277, 3, 370, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (278, 3, 371, 'DESK', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (279, 3, 372, 'DESK', 'FREE');

insert into place (place_id, sector_id, number, type, state) values (65, 99, 1, 'ROOM', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (66, 99, 2, 'ROOM', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (67, 99, 3, 'ROOM', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (68, 99, 4, 'ROOM', 'FREE');

insert into place (place_id, sector_id, number, type, state) values (137, 1, 101, 'ROOM', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (138, 1, 102, 'ROOM', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (139, 1, 103, 'ROOM', 'FREE');

insert into place (place_id, sector_id, number, type, state) values (204, 2, 201, 'ROOM', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (205, 2, 202, 'ROOM', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (206, 2, 203, 'ROOM', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (207, 2, 204, 'ROOM', 'FREE');

insert into place (place_id, sector_id, number, type, state) values (280, 3, 301, 'ROOM', 'FREE');
insert into place (place_id, sector_id, number, type, state) values (281, 3, 302, 'ROOM', 'FREE');