import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectNavLogo } from '../../../../../../redux/selectors/header-data.selector';
import { ILogo } from '../../models/logo.model';

@Component({
  selector: 'app-header-nav-logo',
  standalone: true,
  imports: [],
  templateUrl: './header-nav-logo.component.html',
  styleUrl: './header-nav-logo.component.scss',
})
export class HeaderNavLogoComponent implements OnInit, OnDestroy {
  navLogo: ILogo | null = null;

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit(): void {
    const logoSubscription = this.store
      .select(selectNavLogo)
      .pipe(
        tap((logo) => {
          this.navLogo = logo;
        })
      )
      .subscribe();

    this.subscriptions.add(logoSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
