import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { BenefitsDataEffects } from './redux/effects/benefits-data.effect';
import { HeaderDataEffects } from './redux/effects/header-data.effect';
import { benefitsReducer } from './redux/reducers/benefits-data.reducer';
import { headerReducer } from './redux/reducers/header-data.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideState({ name: 'headerData', reducer: headerReducer }),
    provideState({ name: 'benefitsData', reducer: benefitsReducer }),
    provideEffects(
      HeaderDataEffects,
      BenefitsDataEffects
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),

  ]
};
