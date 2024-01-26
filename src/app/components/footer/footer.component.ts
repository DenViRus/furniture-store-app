import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { FooterDataActions } from '../../redux/actions/footer-data.action';
import { selectNavigation } from '../../redux/selectors/footer-data.selector';
import { FooterDescComponent } from './components/footer-desc/footer-desc.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
import { FooterRowComponent } from './components/footer-row/footer-row.component';
import { IFooterNav } from './models/footerNav.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterDescComponent, FooterNavComponent, FooterRowComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit, OnDestroy {
  navigationData: IFooterNav[] = [];

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(FooterDataActions.loadFooterData());

    const navigationSubscription = this.store
      .select(selectNavigation)
      .pipe(
        tap((navigation) => {
          this.navigationData = navigation;
        })
      )
      .subscribe();

    this.subscriptions.add(navigationSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
