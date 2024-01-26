import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { BenefitsDataActions } from '../../redux/actions/benefits-data.action';
import { selectBenefitsData } from '../../redux/selectors/benefits-data.selector';
import { BenefitComponent } from './components/benefit/benefit.component';
import { IBenefits } from './models/benefits.model';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [BenefitComponent],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent implements OnInit, OnDestroy {
  benefitsData: IBenefits | null = null;

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(BenefitsDataActions.loadBenefitsData());

    const benefitsSubscription = this.store
      .select(selectBenefitsData)
      .pipe(
        tap((benefits) => {
          this.benefitsData = benefits;
        })
      )
      .subscribe();

    this.subscriptions.add(benefitsSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
