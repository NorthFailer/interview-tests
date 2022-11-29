import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card, DataService } from './data.service';
import { catchError, concatMap, EMPTY, map } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly control = new FormControl();
  cards: Card[] = [];

  cards$ = this.control.valueChanges
    .pipe(concatMap((controlValue) => this.dataService.getCard(controlValue)
        .pipe(
          map((card) => {
            this.cards.push(card);
            }
          )
        ).pipe(
          // catchError([])
        )
      )
    ).subscribe();

  constructor(
    private dataService: DataService,
  ) {

  }


  /*
  * On user input number(N) request Cards from id starts from 1 to N
  * Show all responded Cards in template in the same time
  * Keep the cards in order 1 to N
  * Skip cards with error response
  * */
}
