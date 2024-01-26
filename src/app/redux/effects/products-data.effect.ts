import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { ProductsDataService } from '../../components/products/services/products-data.service';
import { ProductsDataActions } from '../actions/products-data.action';

@Injectable()
export class ProductsDataEffects {
  constructor(
    private actions$: Actions,
    private productsDataService: ProductsDataService
  ) {}

  loadProductsData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsDataActions.loadProductsData),
      switchMap(() =>
        this.productsDataService
          .getProductsData()
          .pipe(
            map((productsData) =>
              ProductsDataActions.loadProductsDataSuccess({ productsData })
            )
          )
      )
    );
  });
}
