import { IProduct } from './../components/products-slider/models/product.model';
import { IProductsTab } from './../components/products-tabs/models/productsTab.model';
import { IProductsCategory } from './productsCategory.model';

export interface IProducts {
  title: string;
  tabs: IProductsTab[];
  products: IProductsCategory;
  filterProducts: IProduct[];
}
