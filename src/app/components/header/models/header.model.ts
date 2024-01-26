import { IHeaderContent } from '../components/header-content/models/headerContent.model';
import { IHeaderDot } from '../components/header-dots/models/headerDot.model';
import { IHeaderNav } from '../components/header-nav/models/headerNav.model';

export interface IHeader {
  nav: IHeaderNav;
  content: IHeaderContent;
  dots: IHeaderDot[];
}
