import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductsState } from '../reducers/products-data.reducer';

export const selectProductsDataState =
  createFeatureSelector<ProductsState>('productsData');

export const selectProductsData = createSelector(
  selectProductsDataState,
  (state: ProductsState) => state
);

export const selectTabs = createSelector(
  selectProductsDataState,
  (state: ProductsState) => state.tabs
);

export const selectProducts = createSelector(
  selectProductsDataState,
  (state: ProductsState) => state.products
);

export const selectFilterProducts = createSelector(
  selectProductsDataState,
  (state: ProductsState) => state.filterProducts
);
