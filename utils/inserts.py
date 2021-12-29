for i in range(1, 65):
    print("insert into place (place_id, sector_id, number, type, state) values ({}, 99, {}, 'DESK', 'FREE');".format(i, i))


j = 101 
for i in range(69, 137):
    print("insert into place (place_id, sector_id, number, type, state) values ({}, 1, {}, 'DESK', 'FREE');".format(i, j))
    j += 1


j = 201
for i in range(140, 204):
    print("insert into place (place_id, sector_id, number, type, state) values ({}, 2, {}, 'DESK', 'FREE');".format(i, j))
    j += 1
    
    
j = 301
for i in range(208, 280):
    print("insert into place (place_id, sector_id, number, type, state) values ({}, 3, {}, 'DESK', 'FREE');".format(i, j))
    j += 1
