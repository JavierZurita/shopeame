import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navroutes',
  templateUrl: './navroutes.component.html',
  styleUrls: ['./navroutes.component.scss']
})
export class NavroutesComponent {
  @Input() link: string = "";
  @Input() url: string = "";
  @Input() text: string = "";
}
