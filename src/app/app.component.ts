import { Component } from '@angular/core';
import { Card, DataService } from './data.service';
import { FormControl } from '@angular/forms';
import { AnalyticsService } from './analytics.service';
import { concatMap, tap } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  control = new FormControl('');
  cards: Card[] = [];

  card$ = this.control.valueChanges.pipe(
    tap((value) => this.analyticsService.sendAnalytics(value || '').subscribe()),
    concatMap(
      (inputValue) => this.dataService
        .getData(inputValue || '')
    )
  ).subscribe((card) => this.cards.push(card));

  constructor(
    private dataService: DataService,
    private analyticsService: AnalyticsService,
  ) {

  }

  /*
  * On user input get data and show the card name and id in template
  * You should not show new card unless previous data received
  * Send analytics data immediately on user input
  * */
}
