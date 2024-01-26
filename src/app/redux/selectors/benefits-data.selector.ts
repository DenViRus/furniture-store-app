import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BenefitsState } from '../reducers/benefits-data.reducer';

export const selectBenefitsDataState =
  createFeatureSelector<BenefitsState>('benefitsData');

export const selectBenefitsData = createSelector(
  selectBenefitsDataState,
  (state: BenefitsState) => state
);
