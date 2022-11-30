import { Component, OnInit } from '@angular/core';
import { Card, DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cards = new Array<Card>();

  readonly ids = [1, 2, 4];

  private readonly DEFAULT_CARD: Card = {
    id: -1,
    name: 'DEFAULT',
    type: 'ЧЕБУРРЕК',
  };

  constructor(
    private dataService: DataService,
  ) {

  }

  ngOnInit() {
    this.updateCards();
  }

  /*
  * Implement method to update cards by existing ids
  * Show DEFAULT_CARD on place of error card response
  * Keep cards order
  * */
  updateCards() {

  }

}
