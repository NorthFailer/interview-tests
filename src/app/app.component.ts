import { Component } from '@angular/core';
import { CardLogo, DataService } from './data.service';


@Component({
  selector: 'app-root',
  template: `
    Logos:
  `,
})
export class AppComponent {

  logos: CardLogo[] = [];

  private ids = [5, 2, 10, 5, 3];

  constructor(
    private dataService: DataService,
  ) {

  }

  /*
  * Get cards by existing ids
  * If card exists get it logo by id and add to logos array
  * Show available card logos alts in template in format "alt, alt, alt..."
  */
  updateLogos() {

  }
}
