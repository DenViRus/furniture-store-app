import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectDesc } from '../../../../redux/selectors/footer-data.selector';
import { HeaderNavLogoComponent } from '../../../header/components/header-nav/components/header-nav-logo/header-nav-logo.component';
import { IFooterDesc } from '../../models/footerDesc.model';

@Component({
  selector: 'app-footer-desc',
  standalone: true,
  imports: [HeaderNavLogoComponent],
  templateUrl: './footer-desc.component.html',
  styleUrl: './footer-desc.component.scss',
})
export class FooterDescComponent implements OnInit, OnDestroy {
  descData: IFooterDesc | null = null;

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit() {
    const descSubscription = this.store
      .select(selectDesc)
      .pipe(
        tap((desc) => {
          this.descData = desc;
        })
      )
      .subscribe();

    this.subscriptions.add(descSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
