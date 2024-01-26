import { createReducer, on } from '@ngrx/store';

import { IHeader } from '../../components/header/models/header.model';
import { HeaderDataActions } from '../actions/header-data.action';

export const headerDataFeatureKey = 'headerData';

export interface HeaderState extends IHeader {}

export const initialState: HeaderState = {
  nav: {
    logo: { name: '', link: '' },
    navList: [],
    subNavList: [],
    cart: { name: '', count: 0, img: '', link: '' },
    mobNavBtn: { name: '', img: '' },
  },
  content: {
    title: '',
    paragraphs: [],
    search: { id: '', name: '', placeholder: '', img: '', value: '' },
  },
  dots: [],
};

export const headerReducer = createReducer(
  initialState,
  on(
    HeaderDataActions.loadHeaderDataSuccess,
    (state, { headerData }): HeaderState => ({ ...state, ...headerData })
  ),
  on(
    HeaderDataActions.updateSearchValue,
    (state, { searchValue }): HeaderState => ({
      ...state,
      content: {
        ...state.content,
        search: { ...state.content.search, value: searchValue },
      },
    })
  ),
  on(
    HeaderDataActions.updateDotActive,
    (state, { name }): HeaderState => ({
      ...state,
      dots: state.dots.map((dot) => {
        if (dot.name === name) {
          return { ...dot, active: !dot.active };
        } else {
          return { ...dot, active: false };
        }
      })
    })
  )
);
