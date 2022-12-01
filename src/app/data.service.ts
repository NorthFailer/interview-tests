import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';

export type CardType = 'KEK' | 'ЧЕБУРРЕК' | 'PEPEGA' | 'OMEGA';

export interface Card {
  name: string;
  id: number;
  type: CardType;
}

export interface CardLogo {
  id: number;
  alt: string;
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

const logos: CardLogo[] = [
  {
    id: 3,
    alt: 'Dildo',
  },
  {
    id: 5,
    alt: 'Logogo',
  },
  {
    id: 10,
    alt: 'Goooloogooloo',
  },
];

@Injectable({ providedIn: 'root' })
export class DataService {
  getCard(id: number): Observable<Card> {
    const card = cards[id];

    if (card) {
      return of(card).pipe(
        delay(Math.random() * 1000),
      );
    } else {
      return throwError(() => `[404] Card ID: ${id} not found!`);
    }
  }

  getLogo(id: number): Observable<CardLogo> {
    const logo = logos[id];

    if (logo) {
      return of(logo).pipe(
        delay(Math.random() * 1000),
      );
    } else {
      return throwError(() => `[404] Logo ID: ${id} not found!`);
    }
  }
}
