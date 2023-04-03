import { IProduct } from 'src/app/shared/interfaces/productInterface';
import { Component, OnInit, Input } from '@angular/core';
import { ItemsServiceService } from 'src/app/shared/services/items-service.service';
import { ProductServiceService } from 'src/app/shared/services/product.service.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  modificar: boolean = this.productService.getModificar();
  id!:number;
  editProduct: IProduct = this.productService.getProduct();
  product: IProduct = {
    id: this.id,
    name: 'Default',
    price: 0.00,
    description: 'Description default',
    stars: 2,
    image: '../../../assets/images/default.png'
  }

  sendNewProduct(){
    console.log(this.product);
    this.itemsService.postItems(this.product);
  }
  
  modify(){
    this.itemsService.putItems(this.product,this.product.id)
    console.log("Put ",this.product);
    this.productService.setModificar(false);
  }
  constructor(private itemsService: ItemsServiceService, private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.itemsService.getItems().subscribe((res: any) => {
      this.id = res.length + 1;
      console.log(this.id);
    })   

    if(this.productService.getModificar()){ 
      this.product = {
        id: this.editProduct.id,
        name: this.editProduct.name,
        price: this.editProduct.price,
        description: this.editProduct.description,
        stars: this.editProduct.stars,
        image: this.editProduct.image
      } 
      this.productService.setModificar(false);
    }  
  }
}
