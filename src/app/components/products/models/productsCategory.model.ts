import { IProduct } from './../components/products-slider/models/product.model';

export interface IProductsCategory {
  chairs: IProduct[];
  beds: IProduct[];
  sofas: IProduct[];
  lamps: IProduct[];
}
