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
FOREIGN KEY (fk_id_usuario) REFERENCES usuario (fk_id_usuario)
);

CREATE TABLE producto (
id_producto INT PRIMARY KEY AUTO_INCREMENT,
descripcion VARCHAR(50),
nombre VARCHAR(50),
precio DOUBLE,
);

