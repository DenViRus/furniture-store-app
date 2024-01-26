import { createReducer, on } from '@ngrx/store';

import { IFooter } from '../../components/footer/models/footer.model';
import { FooterDataActions } from '../actions/footer-data.action';

export const footerDataFeatureKey = 'footerData';

export interface FooterState extends IFooter {}

export const initialState: IFooter = {
  desc: {
    paragraphs: [],
  },
  navigation: [],
  row: {
    copyright: '',
    links: [],
  },
};

export const footerReducer = createReducer(
  initialState,
  on(
    FooterDataActions.loadFooterDataSuccess,
    (state, { footerData }): FooterState => ({
      ...state,
      ...footerData,
    })
  )
);
