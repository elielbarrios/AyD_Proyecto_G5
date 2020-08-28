export class Producto{
    
    id_producto:number;
    descripcion:string;
    nombre:string;
    imagen:string;
    precio:number;

    Producto(){
        this.id_producto = 0;
        this.descripcion = "";
        this.nombre = "";
        this.imagen = "";
        this.precio = 0;
    }
}