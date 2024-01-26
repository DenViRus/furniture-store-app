import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { IProducts } from '../../components/products/models/products.model';

export const ProductsDataActions = createActionGroup({
  source: 'ProductsData',
  events: {
    'Load ProductsData': emptyProps(),
    'Load ProductsData Success': props<{ productsData: IProducts }>(),

    'Update Tab Active': props<{ name: string }>(),
  },
});
