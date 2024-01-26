import { IFooterDesc } from './footerDesc.model';
import { IFooterNav } from './footerNav.model';
import { IFooterRow } from './footerRow.model';

export interface IFooter {
  desc: IFooterDesc;
  navigation: IFooterNav[];
  row: IFooterRow;
}
