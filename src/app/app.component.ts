import { Component, OnInit } from '@angular/core';
import { Card, DataService } from './data.service';
import { catchError, concatMap, from, of } from "rxjs";


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
    from(this.ids)
      .pipe(
        concatMap((id) => this.dataService.getData(id).pipe(catchError(() => of(this.DEFAULT_CARD)))),
      )
      .subscribe((card) => this.cards.push(card));
  }
}
