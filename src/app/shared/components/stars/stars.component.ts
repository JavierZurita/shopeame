import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() stars: number = 0;
  estrella: any[] = [];
  constructor(){}

  ngOnInit(): void{
    for(let i = 0; i < this.stars; i++){
      this.estrella.push("");
    } 
  }
}
