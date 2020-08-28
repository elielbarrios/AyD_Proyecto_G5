LOAD DATA LOCAL INFILE 'C:/Users/Asus/Desktop/Productos.csv' 
INTO TABLE temporal
CHARACTER SET utf8mb4
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 rows;

INSERT INTO categoria(nombre_categoria) VALUES ('Frutas');
INSERT INTO categoria(nombre_categoria) VALUES ('Verduras');
INSERT INTO categoria(nombre_categoria,root_id)
SELECT distinct t.sub_categoria, c.id_categoria 
FROM temporal  t 
INNER JOIN categoria c ON (c.nombre_categoria = t.nombre_categoria);

INSERT INTO producto(nombre,descripcion,imagen,precio)
SELECT DISTINCT t.nombre , t.descipcion ,t.imagen, t.precio  
FROM temporal t ;
select * from producto;

INSERT INTO detalle_producto_categoria(fk_id_producto, fk_id_categoria)
SELECT DISTINCT p.id_producto,c.id_categoria
FROM temporal t
INNER JOIN producto p ON t.nombre = p.nombre
INNER JOIN categoria c ON (t.sub_categoria = c.nombre_categoria);

select p.nombre, d.fk_id_categoria, d.fk_id_producto from detalle_producto_categoria d
inner JOIN producto p ON (d.fk_id_producto = p.id_producto);