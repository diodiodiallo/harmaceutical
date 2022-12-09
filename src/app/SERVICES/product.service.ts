import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  urlbase="http://localhost:3000/product"

   

  constructor( private httpClient: HttpClient) { }
  getAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlbase);

  }
 public getById(id:string | null){
  return this.httpClient.get<Product>(this.urlbase + '/' +id);

 }
  public createPhone(product: Product): Observable<Object>{
    return this.httpClient.post(`${this.urlbase}`, product)
  }
  public deleteProduct(id: number) : Observable<Product>{
    return this.httpClient.delete<Product>(`${this.urlbase}/${id}`);
  }
   public updateProduct(id: string | null , product: Product): Observable<Object>{
    return this.httpClient.put<Product>(`${this. urlbase}/${id}`, product);
  }


  


}
