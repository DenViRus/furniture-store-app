import { IBenefitParagraph } from './benefitParagraph.model';

export interface IBenefit {
  title: string;
  paragraphs: IBenefitParagraph[];
}
