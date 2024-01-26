import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { IFooter } from '../../components/footer/models/footer.model';

export const FooterDataActions = createActionGroup({
  source: 'FooterData',
  events: {
    'Load FooterData': emptyProps(),
    'Load FooterData Success': props<{ footerData: IFooter }>(),
  },
});
