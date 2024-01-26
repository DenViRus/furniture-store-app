import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FooterState } from '../reducers/footer-data.reducer';

export const selectFooterDataState =
  createFeatureSelector<FooterState>('footerData');

export const selectFooterData = createSelector(
  selectFooterDataState,
  (state: FooterState) => state
);

export const selectDesc = createSelector(
  selectFooterDataState,
  (state: FooterState) => state.desc
);

export const selectNavigation = createSelector(
  selectFooterDataState,
  (state: FooterState) => state.navigation
);

export const selectRow = createSelector(
  selectFooterDataState,
  (state: FooterState) => state.row
);
