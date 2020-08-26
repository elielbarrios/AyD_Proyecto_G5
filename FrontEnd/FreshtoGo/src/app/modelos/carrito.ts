export class carrito{
    
    Producto:string;
    Cantidad:number;
    Precio:number;
    Sutotal:number;

    carrito(){
        this.Producto = '';
        this.Cantidad = 0;
        this.Precio = 0;
        this.Sutotal = 0;
    }
}