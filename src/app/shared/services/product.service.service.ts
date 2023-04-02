import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  
  modificar:boolean = false;

  product: IProduct = {
    id: 0,
    name: 'default',
    price: 0,
    description: 'Default',
    stars: 0,
    image: '../../../assets/images/default.png'
  }
  constructor() { }

  getProduct(){    
    return this.product;
  }
  setProduct(producto: IProduct){
    this.product = producto;
  }
  getModificar(){
    return this.modificar;
  }
  setModificar(valor: boolean){
    this.modificar = valor;
  }
}
