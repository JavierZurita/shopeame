import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parrafo',
  templateUrl: './parrafo.component.html',
  styleUrls: ['./parrafo.component.scss']
})
export class ParrafoComponent {

  @Input() titulo: string = "";
  @Input() text: string = "";
}
