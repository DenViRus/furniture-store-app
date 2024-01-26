import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { IHeader } from '../../components/header/models/header.model';

export const HeaderDataActions = createActionGroup({
  source: 'HeaderData',
  events: {
    'Load HeaderData': emptyProps(),
    'Load HeaderData Success': props<{ headerData: IHeader }>(),

    'Update Search Value': props<{ searchValue: string }>(),
    'Update Dot Active': props<{ name: string }>(),
  },
});
