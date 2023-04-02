import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  anno: number = 2020;
   constructor(){
    this.anno = new Date().getFullYear();
  }
}
