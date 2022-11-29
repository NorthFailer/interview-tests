import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CardType, DataService } from './data.service';
import { map, startWith, switchMap } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly options: CardType[] = ['KEK', 'OMEGA', 'PEPEGA', 'OMEGA'];
  readonly control = new FormControl(this.options[0]);

  readonly cards$ = this.control.valueChanges.pipe(
    startWith(this.control.value),
    switchMap((cardType) => this.dataService.getData().pipe(
      map((cards) => cards.filter((card) => card.type === cardType)),
    )),
  );

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
