export class Orden{
    
    id_orden:number;
    fecha_orden:Date;
    fk_id_usuario:number;
    fk_id_ordenproducto:number;
    estado_orden:string;

    Orden(){
        this.id_orden = 0;
        this.fecha_orden = null;
        this.fk_id_usuario = 0;
        this.fk_id_ordenproducto = 0;
        this.estado_orden = "";
    }
}