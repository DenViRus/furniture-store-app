import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HeaderState } from '../reducers/header-data.reducer';

export const selectHeaderDataState =
  createFeatureSelector<HeaderState>('headerData');

export const selectHeaderData = createSelector(
  selectHeaderDataState,
  (state: HeaderState) => state
);

export const selectNav = createSelector(
  selectHeaderDataState,
  (state: HeaderState) => state.nav
);

export const selectNavLogo = createSelector(
  selectHeaderDataState,
  (state: HeaderState) => state.nav.logo
);

export const selectNavList = createSelector(
  selectHeaderDataState,
  (state: HeaderState) => state.nav.navList
);

export const selectSubNavList = createSelector(
  selectHeaderDataState,
  (state: HeaderState) => state.nav.subNavList
);

export const selectNavCart = createSelector(
  selectHeaderDataState,
  (state: HeaderState) => state.nav.cart
);
export const selectMobNavBtn = createSelector(
  selectHeaderDataState,
  (state: HeaderState) => state.nav.mobNavBtn
);

export const selectContent = createSelector(
  selectHeaderDataState,
  (state: HeaderState) => state.content
);

export const selectContentSearch = createSelector(
  selectHeaderDataState,
  (state: HeaderState) => state.content.search
);

export const selectDots = createSelector(
  selectHeaderDataState,
  (state: HeaderState) => state.dots
);
