import { createReducer, on } from '@ngrx/store';

import { IProducts } from '../../components/products/models/products.model';
import { ProductsDataActions } from '../actions/products-data.action';

export const productsDataFeatureKey = 'productsData';

export interface ProductsState extends IProducts {}

export const initialState: IProducts = {
  title: '',
  tabs: [],
  products: {
    chairs: [],
    beds: [],
    sofas: [],
    lamps: [],
  },
  filterProducts: [],
};

export const productsReducer = createReducer(
  initialState,
  on(
    ProductsDataActions.loadProductsDataSuccess,
    (state, { productsData }): ProductsState => {
      const updatedState = { ...state, ...productsData };
      const activeTab = updatedState.tabs.find((tab) => tab.active)?.name;
      let updatedFilterProducts = [];
      if (activeTab === 'All') {
        updatedFilterProducts = [
          ...updatedState.products.chairs,
          ...updatedState.products.beds,
          ...updatedState.products.sofas,
          ...updatedState.products.lamps,
        ];
      } else {
        updatedFilterProducts =
          updatedState.products[
            activeTab?.toLowerCase() as keyof typeof updatedState.products
          ] || [];
      }
      return {
        ...updatedState,
        filterProducts: updatedFilterProducts,
      };
    }
  ),
  on(ProductsDataActions.updateTabActive, (state, { name }): ProductsState => {
    const updatedTabs = state.tabs.map((tab) => ({
      ...tab,
      active: tab.name === name ? !tab.active : false,
    }));

    const activeTab = updatedTabs.find((tab) => tab.active)?.name;
    let updatedFilterProducts = [];

    if (activeTab === 'All') {
      updatedFilterProducts = [
        ...state.products.chairs,
        ...state.products.beds,
        ...state.products.sofas,
        ...state.products.lamps,
      ];
    } else {
      updatedFilterProducts =
        state.products[
          activeTab?.toLowerCase() as keyof typeof state.products
        ] || [];
    }

    return {
      ...state,
      tabs: updatedTabs,
      filterProducts: updatedFilterProducts,
    };
  })
);
