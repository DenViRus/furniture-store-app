import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectMobNavBtn } from '../../../../../../redux/selectors/header-data.selector';
import { IMobNavBtn } from '../../models/mobNavBtn.model';

@Component({
  selector: 'app-header-nav-button',
  standalone: true,
  imports: [],
  templateUrl: './header-nav-button.component.html',
  styleUrl: './header-nav-button.component.scss',
})
export class HeaderNavButtonComponent implements OnInit, OnDestroy {
  mobNavBtn: IMobNavBtn | null = null;

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit(): void {
    const mobNavBtnSubscription = this.store
      .select(selectMobNavBtn)
      .pipe(
        tap((mobNavBtn) => {
          this.mobNavBtn = mobNavBtn;
        })
      )
      .subscribe();

    this.subscriptions.add(mobNavBtnSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
