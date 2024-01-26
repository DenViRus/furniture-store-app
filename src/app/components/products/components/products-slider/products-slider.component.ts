import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectFilterProducts } from '../../../../redux/selectors/products-data.selector';
import { ScreenSizeServiceService } from '../../../../services/screen-size-service.service';
import { ProductsSliderUiDirective } from '../../directives/products-slider-ui.directive';
import { SliderMoveModel } from '../../models/sliderMove.model';
import { ProductsSliderCardComponent } from './components/products-slider-card/products-slider-card.component';
import { IProduct } from './models/product.model';

@Component({
  selector: 'app-products-slider',
  standalone: true,
  imports: [ProductsSliderCardComponent, ProductsSliderUiDirective],
  templateUrl: './products-slider.component.html',
  styleUrl: './products-slider.component.scss',
})
export class ProductsSliderComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  private subscriptions = new Subscription();

  activeSlideIndex: number = 0;
  maxVisibleSlides: number = 4;
  moveName = SliderMoveModel;
  sliderMoveParam: SliderMoveModel | null = null;

  constructor(
    private store: Store,
    private screenSizeServiceService: ScreenSizeServiceService
  ) {}

  ngOnInit(): void {
    const productsSubscription = this.store
      .select(selectFilterProducts)
      .pipe(
        tap((products) => {
          this.products = products;
        })
      )
      .subscribe();

    this.subscriptions.add(productsSubscription);

    const screenSizeSubscription = this.screenSizeServiceService.screenWidth$
      .pipe(
        tap((screenWidth) => {
          if (screenWidth < 600) {
            this.maxVisibleSlides = 1;
          } else if (screenWidth < 920) {
            this.maxVisibleSlides = 2;
          } else if (screenWidth < 1230) {
            this.maxVisibleSlides = 3;
          } else {
            this.maxVisibleSlides = 4;
          }
        })
      )
      .subscribe();

    this.subscriptions.add(screenSizeSubscription);
  }

  moveToNextSlide(move: SliderMoveModel) {
    this.sliderMoveParam = move;
    if (this.products.length > 0) {
      const newProducts = [...this.products];
      const firstItem = newProducts.shift();
      if (firstItem) {
        newProducts.push(firstItem);
      }
      this.products = newProducts;
    }
    setTimeout(() => (this.sliderMoveParam = null), 200);
  }

  moveToPrevSlide(move: SliderMoveModel) {
    this.sliderMoveParam = move;
    if (this.products.length > 0) {
      const newProducts = [...this.products];
      const lastItem = newProducts.pop();
      if (lastItem) {
        newProducts.unshift(lastItem);
      }
      this.products = newProducts;
    }
    setTimeout(() => (this.sliderMoveParam = null), 200);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
