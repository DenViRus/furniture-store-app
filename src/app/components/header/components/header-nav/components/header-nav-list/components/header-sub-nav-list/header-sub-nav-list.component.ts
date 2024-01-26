import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectSubNavList } from '../../../../../../../../redux/selectors/header-data.selector';
import { IHeaderSubNavListItem } from '../../models/headerSubNavListItem.model';
import { HeaderSubNavListItemComponent } from './components/header-sub-nav-list-item/header-sub-nav-list-item.component';

@Component({
  selector: 'app-header-sub-nav-list',
  standalone: true,
  imports: [HeaderSubNavListItemComponent],
  templateUrl: './header-sub-nav-list.component.html',
  styleUrl: './header-sub-nav-list.component.scss',
})
export class HeaderSubNavListComponent implements OnInit, OnDestroy {
  subNavList: IHeaderSubNavListItem[] = [];

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit(): void {
    const cartSubscription = this.store
      .select(selectSubNavList)
      .pipe(
        tap((cart) => {
          this.subNavList = cart;
        })
      )
      .subscribe();

    this.subscriptions.add(cartSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
