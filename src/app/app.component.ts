import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card, DataService } from './data.service';
import { catchError, forkJoin, map, of, switchMap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly control = new FormControl();

  readonly cards$ = this.control.valueChanges.pipe(
    map((number) => Array(number).fill(undefined).map((_, number) => number + 1)),
    switchMap((numbers: Array<number>) =>
      forkJoin(numbers.map((cardId) =>
        this.dataService.getCard(cardId).pipe(
          catchError(() => of(null)),
        )))),
    map((cards: (Card | null)[]) => cards.filter((card): card is Card => !!card)),
  );

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
