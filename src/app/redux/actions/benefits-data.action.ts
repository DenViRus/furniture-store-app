import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { IBenefits } from '../../components/benefits/models/benefits.model';

export const BenefitsDataActions = createActionGroup({
  source: 'BenefitsData',
  events: {
    'Load BenefitsData': emptyProps(),
    'Load BenefitsData Success': props<{ benefitsData: IBenefits }>(),
  },
});
