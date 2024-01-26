import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectNavList } from '../../../../../../redux/selectors/header-data.selector';
import { IHeaderNavListItem } from './../../models/headerNavListItem.model';
import { HeaderNavListItemComponent } from './components/header-nav-list-item/header-nav-list-item.component';

@Component({
  selector: 'app-header-nav-list',
  standalone: true,
  imports: [HeaderNavListItemComponent],
  templateUrl: './header-nav-list.component.html',
  styleUrl: './header-nav-list.component.scss',
})
export class HeaderNavListComponent implements OnInit, OnDestroy {
  navList: IHeaderNavListItem[] = [];

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit(): void {
    const navListSubscription = this.store
      .select(selectNavList)
      .pipe(
        tap((navList) => {
          this.navList = navList;
        })
      )
      .subscribe();

    this.subscriptions.add(navListSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
