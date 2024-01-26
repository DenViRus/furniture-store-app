import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { BenefitsDataService } from 'src/app/components/benefits/services/benefits-data.service';

import { BenefitsDataActions } from '../actions/benefits-data.action';

@Injectable()
export class BenefitsDataEffects {
  constructor(
    private actions$: Actions,
    private benefitsDataService: BenefitsDataService
  ) {}

  loadBenefitsData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BenefitsDataActions.loadBenefitsData),
      switchMap(() =>
        this.benefitsDataService
          .getBenefitsData()
          .pipe(
            map((benefitsData) =>
              BenefitsDataActions.loadBenefitsDataSuccess({ benefitsData })
            )
          )
      )
    );
  });
}
