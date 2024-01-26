import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectTabs } from './../../../../redux/selectors/products-data.selector';
import { ProductsTabComponent } from './components/products-tab/products-tab.component';
import { IProductsTab } from './models/productsTab.model';

@Component({
  selector: 'app-products-tabs',
  standalone: true,
  imports: [ProductsTabComponent],
  templateUrl: './products-tabs.component.html',
  styleUrl: './products-tabs.component.scss',
})
export class ProductsTabsComponent implements OnInit, OnDestroy {
  productsTabs: IProductsTab[] = [];

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit(): void {
    const tabsSubscription = this.store
      .select(selectTabs)
      .pipe(
        tap((tabs) => {
          this.productsTabs = tabs;
        })
      )
      .subscribe();

    this.subscriptions.add(tabsSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
