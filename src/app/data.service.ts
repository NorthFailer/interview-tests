import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';

export type CardType = 'KEK' | 'ЧЕБУРРЕК' | 'PEPEGA' | 'OMEGA';

export interface Card {
  name: string;
  id: number;
  type: CardType;
}
const cardsById = new Map<number, Card>([
  [1, {name: 'One', id: 1, type: 'ЧЕБУРРЕК'}],
  [2, {name: 'Two', id: 2, type: 'KEK'}],
  [3, {name: 'Three', id: 3, type: 'OMEGA'}],
  [6, {name: 'Six', id: 6, type: 'PEPEGA'}],
  [9, {name: 'Nine', id: 9, type: 'KEK'}],
  [12, {name: 'Twelve', id: 12, type: 'OMEGA'}],
])


@Injectable({ providedIn: 'root' })
export class DataService {

  getCard(id: number): Observable<Card> {
    const card = cardsById.get(id);

    if (card) {
      return of(card).pipe(
        delay(Math.random() * 2000),
      );
    } else {
      return throwError(() => `[404] Card with ID: ${id} not found`);
    }
  }
}
