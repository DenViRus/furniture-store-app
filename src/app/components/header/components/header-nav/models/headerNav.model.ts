import { IHeaderSubNavListItem } from '../components/header-nav-list/models/headerSubNavListItem.model';
import { ICart } from './cart.model';
import { IHeaderNavListItem } from './headerNavListItem.model';
import { ILogo } from './logo.model';
import { IMobNavBtn } from './mobNavBtn.model';

export interface IHeaderNav {
  logo: ILogo;
  navList: IHeaderNavListItem[];
  subNavList: IHeaderSubNavListItem[];
  cart: ICart;
  mobNavBtn: IMobNavBtn;
}
