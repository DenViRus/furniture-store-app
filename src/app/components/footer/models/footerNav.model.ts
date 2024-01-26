import { IFooterNavItem } from '../components/footer-nav/models/footerNavItem.model';

export interface IFooterNav {
  id: string;
  title: string;
  group: string;
  navList: IFooterNavItem[];
}
