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
    name: 'Sofa',
    price: 895.50,
    description: 'Sofa muy cómodo para echarse la siesta o ver la tele',
    stars: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcNAB3-g0IHEpCfQT2Disc3vKPdIrWpBqI7njtLNGk_yC3P2GdfybYDAV9XAfnM0FAZU&usqp=CAU'
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
        id: this.editProduct?.id,
        name: this.editProduct?.name,
        price: this.editProduct?.price,
        description: this.editProduct?.description,
        stars: this.editProduct?.stars,
        image: this.editProduct?.image
      } 
      this.productService.setModificar(false);
    } else {
        this.product = {
          id: this.id,
          name: 'Sofa',
          price: 895.50,
          description: 'Sofa muy cómodo para echarse la siesta o ver la tele',
          stars: 2,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcNAB3-g0IHEpCfQT2Disc3vKPdIrWpBqI7njtLNGk_yC3P2GdfybYDAV9XAfnM0FAZU&usqp=CAU'
        }
      }    
  }
}
