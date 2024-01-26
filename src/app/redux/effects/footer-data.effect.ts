import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { FooterDataService } from '../../components/footer/services/footer-data.service';
import { FooterDataActions } from '../actions/footer-data.action';

@Injectable()
export class FooterDataEffects {
  constructor(
    private actions$: Actions,
    private footerDataService: FooterDataService
  ) {}

  loadFooterData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FooterDataActions.loadFooterData),
      switchMap(() =>
        this.footerDataService
          .getFooterData()
          .pipe(
            map((footerData) =>
              FooterDataActions.loadFooterDataSuccess({ footerData })
            )
          )
      )
    );
  });
}
