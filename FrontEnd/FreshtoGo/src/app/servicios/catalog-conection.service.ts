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
        return this.http.get('http://52.15.119.221:3000/api/products'); 
    }

    public getProductos_id (retorno:Producto)
    {
        return this.http.post(ip + '/products', retorno); 
    }

    public getProductosOrdenados_Alfabeticamente () 
    {
        return this.http.get('http://52.15.119.221:3000/api/products'); 
    }

    public getProductosOrdenados_PorPrecios () 
    {
        return this.http.get('http://52.15.119.221:3000/api/products'); 
    }

    public getProductosOrdenados_PorCategoria () 
    {
        return this.http.get('http://52.15.119.221:3000/api/products'); 
    }


}
