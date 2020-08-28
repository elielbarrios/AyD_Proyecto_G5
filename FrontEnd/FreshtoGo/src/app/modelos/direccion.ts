export class Direccion{
    
    id_direccion:number;
    departamento:string;
    municipio:string;
    direccion:string;
    detalles:string;
    
    Direccion(){
        this.id_direccion = 0;
        this.departamento = "";
        this.municipio = "";
        this.direccion = "";
        this.detalles = "";
    }
}