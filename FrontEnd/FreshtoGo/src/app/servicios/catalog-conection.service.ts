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
        return this.http.get('http://18.216.65.170:3001/api/products'); 
    }

    public getProductos_id (retorno:Producto)
    {
        let varBusqeda = String(retorno.nombre);
        //return this.http.post('http://18.217.114.84:3000/api/products', retorno); 
        return this.http.get('http://18.216.65.170:3001/api/products/' + varBusqeda); 
    }

    public getProductosOrdenados_Alfabeticamente () 
    {
        return this.http.get('http://18.216.65.170:3001/api/productosalfa'); 
    }

    public getProductosOrdenados_PorPrecios () 
    {
        return this.http.get('http://18.216.65.170:3001/api/productosporprecio'); 
    }

    public getProductosOrdenados_PorCategoria () 
    {
        return this.http.get('http://18.216.65.170:3001/api/productosporcategoria'); 
    }


}
