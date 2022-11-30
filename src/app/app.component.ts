import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormControl } from '@angular/forms';
import { map, startWith, Subject, switchMap, takeUntil } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly cardIds: ReadonlyArray<number> = [1, 2, 3, 5];
  readonly control = new FormControl();

  readonly card$ = this.control.valueChanges.pipe(
    map((value: string) => parseInt(value)),
    switchMap((id) => this.dataService.getDataById(id).pipe(
      startWith(null),
      takeUntil(this.forceStopRequest$),
    )),
  );

  readonly forceStopRequest$ = new Subject<void>();

  constructor(
    private dataService: DataService,
  ) {

  }

  onStopClick() {
    this.forceStopRequest$.next();
  }

  /*
  * On user input select get Card data and show name in template
  * If user press stop button - cancel card request completely and clear current shown card
  *
  * */
}
