import { Component } from '@angular/core';
import { Card, DataService } from './data.service';


@Component({
  selector: 'app-root',
  template: `
    <div>The card type: "{{ card?.type }}"</div>

    <button (click)="onRandomizeClick()">Randomize</button>
  `,
})
export class AppComponent {

  cardId?: number;
  card?: Card;

  readonly ids = [1, 2, 3, 4, 5, 6];

  constructor(
    private dataService: DataService,
  ) {

  }

  onRandomizeClick() {
    this.cardId = this.ids[Math.floor(Math.random() * this.ids.length)];
  }

  /*
  * Method should get card from dataService and update it
  */
  private updateCard() {

  }
}
