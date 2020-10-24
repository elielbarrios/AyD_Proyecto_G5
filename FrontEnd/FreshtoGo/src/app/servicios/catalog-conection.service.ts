import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Producto } from '../modelos/producto';
import ip from './IP';

@Injectable({
  providedIn: 'root'
})
export class CatalogConectionService 
{

    constructor (private http: HttpClient) 
    { 

    }

    public getProductos () 
    {
        return this.http.get(ip + 'products'); 
    }

    public getProductos_id (retorno:Producto)
    {
        let varBusqeda = String(retorno.nombre);
        return this.http.get(ip + 'products/' + varBusqeda); 
    }

    public getProductosOrdenados_Alfabeticamente () 
    {
        return this.http.get( ip + 'productosalfa'); 
    }

    public getProductosOrdenados_PorPrecios () 
    {
        return this.http.get(ip + 'productosporprecio'); 
    }

    public getProductosOrdenados_PorCategoria () 
    {
        return this.http.get(ip + 'productosporcategoria'); 
    }


}
