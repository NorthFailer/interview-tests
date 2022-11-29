import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export type CardType = 'KEK' | 'ЧЕБУРРЕК' | 'PEPEGA' | 'OMEGA';

export interface Card {
  name: string;
  id: number;
  type: CardType;
}

const cards: Card[] =[
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
]

@Injectable({ providedIn: 'root' })
export class DataService {
  getData(value: string): Observable<Card> {
    return of(cards[Math.floor(Math.random() * cards.length)]).pipe(
      delay(Math.random() * 1000),
    );
  }
}
