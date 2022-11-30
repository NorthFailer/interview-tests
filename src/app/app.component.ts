import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormControl } from '@angular/forms';
import { AnalyticsService } from './analytics.service';
import { concatMap, filter, tap } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  control = new FormControl('');

  readonly card$ = this.control.valueChanges.pipe(
    filter((value): value is string => !value),
    tap((value) => this.analyticsService.sendAnalytics(value).subscribe()),
    concatMap((value) => this.dataService.getData(value)),
  );

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
