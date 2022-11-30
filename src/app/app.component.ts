import { Component } from '@angular/core';
import { Card, DataService } from './data.service';
import { FormControl } from '@angular/forms';
import { catchError, mergeMap, of } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly cardIds: ReadonlyArray<number> = [1, 2, 3, 5];
  readonly control = new FormControl();
  readonly mockCard: Card = {name: '', id: -0, type: 'KEK'}

  controlSubscription = this.control.valueChanges.pipe(
    mergeMap((value) => this.dataService.getDataById(value).pipe(catchError(() => of(this.mockCard))))
  )

  // в качестве обработки ошибки должен быть ретрай, а не of

  constructor(
    private dataService: DataService,
  ) {

  }

  onStopClick() {
    // complete()
  }

  /*
  * On user input select get Card data and show name in template
  * If user press stop button - cancel card request completely and clear current shown card
  *
  * */
}
