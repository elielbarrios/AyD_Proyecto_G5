export class carrito{
    
    id:number;
    Producto:string;
    Cantidad:number;
    Precio:number;

    carrito(){
        this.id = 0;
        this.Producto = '';
        this.Cantidad = 0;
        this.Precio = 0;
    }
}