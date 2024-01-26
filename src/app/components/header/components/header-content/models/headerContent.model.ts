import { IHeaderParagraph } from './headerParagraph.model';
import { IHeaderSearch } from './headerSearch.model';

export interface IHeaderContent {
  title: string;
  paragraphs: IHeaderParagraph[];
  search: IHeaderSearch;
}
