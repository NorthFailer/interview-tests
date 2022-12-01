import { Component } from '@angular/core';
import { DataService } from './data.service';
import { catchError, concatMap, EMPTY, from, zip } from "rxjs";


@Component({
  selector: 'app-root',
  template: `
    Logos: {{ logosString }}
  `,
})
export class AppComponent {

  logosString: string = '';

  private ids = [5, 2, 10, 5, 3];

  logosArray$ = zip(from(this.ids).pipe(
    concatMap((id) => this.dataService.getCard(id).pipe(
        catchError(() => EMPTY),
        concatMap((card) => this.dataService.getLogo(card.id).pipe(
          catchError(() => EMPTY),
        )),
      )
    )
  )).subscribe((logosArr) => this.logosString = `${logosArr.map((logos) => logos.alt).join(', ')}...` );

  constructor(
    private dataService: DataService,
  ) {

  }

  // 1) from ids
  // 2) get card
  // 3) if Y - get logos -> alt, alt
  // 3) if N - empty if no Card
  // 4) array -> to format
  // zip to pack array

  /*
  * Get cards by existing ids
  * If card exists get it logo by id and add to logos array
  * Show available card logos alts in template in format "alt, alt, alt..."
  */
}
