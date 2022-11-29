import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card, CardType, DataService } from './data.service';
import { map } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly options: CardType[] = ['KEK', 'OMEGA', 'PEPEGA', 'OMEGA'];
  readonly control = new FormControl(this.options[0]);
  private cards: Card[] = [];
  sortedCards: Card[] = [];



  constructor(
    private dataService: DataService,
  ) {

  }

  ngOnInit() {
    this.dataService
      .getData()
      .subscribe((cards) => this.cards = cards);

    this.sortedCards = this.filterCards(this.cards, this.control.getRawValue())

    this.control.valueChanges.pipe(
      map((val) => {
        this.sortedCards = this.filterCards(this.cards, val)
      })
    ).subscribe()
  }

  filterCards(cards: Card[], type: CardType | null): Card[] {
    if (!type) return cards;
    return cards.filter((card) => card.type === type)
  }

  // ngAfterViewInit() {
  // }

/*  ngAfterViewChecked() {
    const userInput = document.getElementsByTagName("select");
    const selectedTypeOption = userInput[0].value;
    this.sortedCards = this.cards.filter((card) => card.type === selectedTypeOption);
  }*/

  // onOptionChange(event: Event) {
  //   this.sortedCards = this.sortedCards = this.cards.filter((card) => card.type === (<HTMLSelectElement>event.target).value);
  // }

  /* void
    ngAfterViewInit() {
    const userInput = document.getElementsByTagName("select");
    console.log(userInput[0].value);
  }
  *
  *
  * */


  /*
  *
  * Get data on user select input, filter data by "CardType"
  * Show name, and ID on card template of filtered items
  *
  * steps to do:
  *  1) observe changes in select input // * not to show: subscribe on init or viewInit*
  *  2) on input change - get data from app.component.service.getData
  *  3) filterData
  *
  *  optional:
  *  - there is a method to check if CardType is REALLY changed (not remember which one)
  *  - where to subscribe on data change: in template | async pipe or using subscribe in my component
  *
  *
  *
  *  Honest fails while approaching:
  *  - long time to recall the name of component lifecycle
  *  - how to get select change observable
  *  - best approach to get cardData properly
  *  - proper event on select. No triggering events on option click, but on select. MUDAK!
  * */
}
