import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {IProduct} from '../../shared/interfaces/productInterface';
import { ItemsServiceService } from 'src/app/shared/services/items-service.service';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  @Output() newProduct = new EventEmitter();
  product: IProduct = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    stars: 0,
    image: ''
  }

  sendNewProduct(){
    console.log(this.product);
    // this.newProduct.emit({...this.product});   
    this.itemsService.postItems(this.product)
  }

  constructor(private itemsService: ItemsServiceService) {}

  ngOnInit(): void {
    
  }
}
