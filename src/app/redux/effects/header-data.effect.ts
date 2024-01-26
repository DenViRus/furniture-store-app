import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { HeaderDataService } from 'src/app/components/header/services/header-data.service';

import { HeaderDataActions } from '../actions/header-data.action';

@Injectable()
export class HeaderDataEffects {
  constructor(
    private actions$: Actions,
    private headerDataService: HeaderDataService
  ) {}

  loadHeaderData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HeaderDataActions.loadHeaderData),
      switchMap(() =>
        this.headerDataService
          .getHeaderData()
          .pipe(
            map((headerData) =>
              HeaderDataActions.loadHeaderDataSuccess({ headerData })
            )
          )
      )
    );
  });
}
