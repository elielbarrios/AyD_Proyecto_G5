CREATE TABLE usuario (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50),
apellido  VARCHAR(50),
email VARCHAR(50),
password VARCHAR(50),
celular VARCHAR(50),
nit VARCHAR(50)
);

CREATE TABLE direccion (
id_direccion INT PRIMARY KEY AUTO_INCREMENT,
departamento VARCHAR(50),
municipio VARCHAR(50),
direccion VARCHAR(50),
detalles  VARCHAR(50),
fk_id_usuario INT,
FOREIGN KEY (fk_id_usuario) REFERENCES usuario (id_usuario)
);

CREATE TABLE producto (
id_producto INT PRIMARY KEY AUTO_INCREMENT,
descripcion VARCHAR(500),
nombre VARCHAR(50),
imagen VARCHAR(500),
precio DOUBLE
);


CREATE TABLE orden (
id_orden INT PRIMARY KEY AUTO_INCREMENT,
fecha DATE,
fk_id_usuario INT,
estado VARCHAR(50),
monto INT,
no_articulos INT,
tipo_pago INT,
FOREIGN KEY (fk_id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE orden_producto (
id_orden_producto INT PRIMARY KEY AUTO_INCREMENT,
fk_id_producto INT,
fk_id_orden INT,
cantidad INT,
total INT,
FOREIGN KEY (fk_id_producto) REFERENCES producto (id_producto),
FOREIGN KEY (fk_id_orden) REFERENCES orden (id_orden)
);

CREATE TABLE tarjeta (
id_tarjeta INT PRIMARY KEY auto_increment,
fk_id_usuario INT,
fecha DATE,
cvv INT,
FOREIGN KEY (fk_id_usuario) REFERENCES usuario (id_usuario)
);


CREATE TABLE categoria (
id_categoria INT PRIMARY KEY AUTO_INCREMENT,
nombre_categoria VARCHAR(50),
root_id INT,
FOREIGN KEY (root_id) REFERENCES categoria(id_categoria)
);

CREATE TABLE detalle_producto_categoria (
fk_id_producto INT,
fk_id_categoria INT,
foreign key (fk_id_producto) REFERENCES producto (id_producto),
foreign key (fk_id_categoria) references categoria (id_categoria)
);
