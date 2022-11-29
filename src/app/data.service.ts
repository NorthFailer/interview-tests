import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type CardType = 'KEK' | 'ЧЕБУРРЕК' | 'PEPEGA' | 'OMEGA';

export interface Card {
  name: string;
  id: number;
  type: CardType;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  getData(): Observable<Card[]> {
    return of([
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
    ]);
  }
}
