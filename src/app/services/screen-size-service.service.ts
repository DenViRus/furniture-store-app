import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeServiceService {
  private screenWidthSubject = new BehaviorSubject<number>(0);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidthSubject.next(window.innerWidth);

      fromEvent(window, 'resize')
        .pipe(
          debounceTime(100),
          map((event) => (event.target as Window).innerWidth)
        )
        .subscribe(this.screenWidthSubject);
    }
  }

  get screenWidth$(): Observable<number> {
    return this.screenWidthSubject.asObservable();
  }
}
