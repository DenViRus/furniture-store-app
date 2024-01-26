import { createReducer, on } from '@ngrx/store';

import { IBenefits } from '../../components/benefits/models/benefits.model';
import { BenefitsDataActions } from '../actions/benefits-data.action';

export const benefitsDataFeatureKey = 'benefitsData';

export interface BenefitsState extends IBenefits {}

export const initialState: IBenefits = {
  title: '',
  benefits: [],
};

export const benefitsReducer = createReducer(
  initialState,
  on(
    BenefitsDataActions.loadBenefitsDataSuccess,
    (state, { benefitsData }): BenefitsState => ({ ...state, ...benefitsData })
  )
);
