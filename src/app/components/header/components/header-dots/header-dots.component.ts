import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectDots } from './../../../../redux/selectors/header-data.selector';
import { HeaderDotComponent } from './components/header-dot/header-dot.component';
import { IHeaderDot } from './models/headerDot.model';

@Component({
  selector: 'app-header-dots',
  standalone: true,
  imports: [HeaderDotComponent],
  templateUrl: './header-dots.component.html',
  styleUrl: './header-dots.component.scss',
})
export class HeaderDotsComponent implements OnInit, OnDestroy {
  headerDots: IHeaderDot[] = [];

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit(): void {
    const dotsSubscription = this.store
      .select(selectDots)
      .pipe(
        tap((dots) => {
          this.headerDots = dots;
        })
      )
      .subscribe();

    this.subscriptions.add(dotsSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
