import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  sendAnalytics(value: string): Observable<void> {
    return of(undefined).pipe(
      delay(Math.random() * 1000),
    );
  }
}
