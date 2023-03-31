import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/productInterface';
@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get("http://localhost:3000/products")
  }
  postItems(product: IProduct){
    return this.http.post("http://localhost:3000/products", product)
  }
}
