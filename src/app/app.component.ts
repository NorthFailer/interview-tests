import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from './data.service';
import { catchError, of, Subject, switchMap, tap } from 'rxjs';

const ids = [1, 2, 3, 4, 5, 6];

@Component({
  selector: 'app-root',
  template: `
    <div>The card type: "{{ (card$ | async)?.type }}"</div>

    <button (click)="onRandomizeClick()">Randomize</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  readonly randomNumber$ = new Subject<number>();
  readonly card$ = this.randomNumber$.pipe(
    switchMap((id) => this.dataService.getData(id).pipe(
      tap(v => console.log(v)),
      catchError(() => of(undefined)),
    )),
  );

  constructor(
    private dataService: DataService,
  ) {

  }

  onRandomizeClick() {
    this.randomNumber$.next(ids[Math.floor(Math.random() * ids.length)]);
  }

  /*
  * Method should get card from dataService and update it
  */
}
