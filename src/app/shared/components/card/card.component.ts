import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/productInterface';
import { ProductServiceService } from '../../services/product.service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() item!: IProduct;
  @Input() vista: string = "";

  constructor(private productService: ProductServiceService){}
  saveData(){
    this.productService.setProduct(this.item);
    console.log(this.productService.getProduct());
    this.productService.setModificar(true);
  }
}
