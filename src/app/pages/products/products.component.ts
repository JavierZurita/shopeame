import { IProduct } from 'src/app/shared/interfaces/productInterface';
import { ItemsServiceService } from './../../shared/services/items-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  @Input() products: IProduct[] = [];
  buscador: string = "";
  vista: boolean = true;
  constructor(private itemsService: ItemsServiceService){}

  ngOnInit():void{
    this.itemsService.getItems().subscribe((res: any) => {
      console.log(res);
      this.products = res;    
    })
  }
  
  findByName(){
      this.itemsService.getItems().subscribe((res: any) => {
        this.products = res.filter((product: any) => {
          if(product.name.toLowerCase().includes(this.buscador.toLowerCase())){
            return product;
          }
        })
      })
  }

  changeWrap(){
    this.vista = true;
    console.log(this.vista);
  }
  
  changeList(){
    console.log(this.vista);
    this.vista = false;
  }
}