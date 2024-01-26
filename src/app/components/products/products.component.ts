import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { ProductsDataActions } from '../../redux/actions/products-data.action';
import { selectProductsData } from '../../redux/selectors/products-data.selector';
import { ProductsSliderComponent } from './components/products-slider/products-slider.component';
import { ProductsTabsComponent } from './components/products-tabs/products-tabs.component';
import { IProducts } from './models/products.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsTabsComponent, ProductsSliderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  productsData: IProducts | null = null;

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(ProductsDataActions.loadProductsData());

    const productsSubscription = this.store
      .select(selectProductsData)
      .pipe(
        tap((products) => {
          this.productsData = products;
        })
      )
      .subscribe();

    this.subscriptions.add(productsSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
