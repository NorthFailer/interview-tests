import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly cardIds: ReadonlyArray<number> = [1, 2, 3, 5];
  readonly control = new FormControl();

  constructor(
    private dataService: DataService,
  ) {

  }

  onStopClick() {

  }

  /*
  * On user input select get Card data and show name in template
  * If user press stop button - cancel card request completely and clear current shown card
  *
  * */
}
