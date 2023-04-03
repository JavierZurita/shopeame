import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/productInterface';
@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  
  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get("http://localhost:3000/products");
  }
  postItems(product: IProduct){
    return this.http.post("http://localhost:3000/products", product).subscribe();
  }
  putItems(product: IProduct, id:number){
    console.log(`http://localhost:3000/products/${id}`);
    return this.http.put(`http://localhost:3000/products/${id}`, product).subscribe();
  }
  deleteItems(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`).subscribe();

  }
}
