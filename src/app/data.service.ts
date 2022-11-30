import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';

export type CardType = 'KEK' | 'ЧЕБУРРЕК' | 'PEPEGA' | 'OMEGA';

export interface Card {
  name: string;
  id: number;
  type: CardType;
}

const cards: Card[] = [
  {
    name: 'One',
    id: 1,
    type: 'PEPEGA',
  },
  {
    name: 'Three',
    id: 3,
    type: 'KEK',
  },
  {
    name: 'Two',
    id: 2,
    type: 'ЧЕБУРРЕК',
  },
  {
    name: 'Five',
    id: 5,
    type: 'ЧЕБУРРЕК',
  },
];

@Injectable({ providedIn: 'root' })
export class DataService {
  getDataById(id: number): Observable<Card> {
    const card = cards.find((card) => card.id === id);

    if (card) {
      return of(card).pipe(
        delay(Math.random() * 4000),
      );
    } else {
      return throwError(() => `[404] Card ID:${id} not found!`).pipe(
        delay(Math.random() * 1000),
      );
    }
  }
}
