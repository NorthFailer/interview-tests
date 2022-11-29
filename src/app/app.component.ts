import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private dataService: DataService,
  ) {

  }


  /*
  *
  * Get data on user select input, filter data by "CardType"
  * Show name, and ID on card template of filtered items
  *
  * */
}
