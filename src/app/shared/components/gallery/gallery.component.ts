import { Component, Input, OnInit} from '@angular/core';
import { IProduct } from '../../interfaces/productInterface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{

  @Input() products: IProduct[] = [];
  @Input() vista: string = "wrap"

  constructor(){}

  ngOnInit(): void {
    console.log("GALLERY: ",this.vista);
  }
  
}
