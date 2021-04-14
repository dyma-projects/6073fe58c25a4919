import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercices1',
  templateUrl: './exercices1.component.html',
  styleUrls: ['./exercices1.component.scss']
})
export class Exercices1Component implements OnInit {

  prenom: string;
  monType = 'date';

  constructor() {
    this.prenom = `David`;
  }

  Hello() {
    console.log ("hello");
  }
 

  ngOnInit(): void {
  }

}
