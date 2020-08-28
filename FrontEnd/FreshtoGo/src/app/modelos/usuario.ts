export class Usuario{
    
    id_usurario:number;
    nombre:string;
    apellido:string;
    email:string;
    password:string;
    celular:string;
    nit:string;

    Usuario(){
        this.id_usurario = 0;
        this.nombre = "";
        this.apellido = "";
        this.email = "";
        this.password = "";
        this.celular = "";
        this.nit = "";
    }
}