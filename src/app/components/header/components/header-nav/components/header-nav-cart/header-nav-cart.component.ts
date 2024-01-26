import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectNavCart } from '../../../../../../redux/selectors/header-data.selector';
import { ICart } from '../../models/cart.model';

@Component({
  selector: 'app-header-nav-cart',
  standalone: true,
  imports: [],
  templateUrl: './header-nav-cart.component.html',
  styleUrl: './header-nav-cart.component.scss',
})
export class HeaderNavCartComponent implements OnInit, OnDestroy {
  navCart: ICart | null = null;

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit(): void {
    const cartSubscription = this.store
      .select(selectNavCart)
      .pipe(
        tap((cart) => {
          this.navCart = cart;
        })
      )
      .subscribe();

    this.subscriptions.add(cartSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
