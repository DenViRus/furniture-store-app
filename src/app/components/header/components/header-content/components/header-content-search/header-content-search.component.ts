import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { HeaderDataActions } from '../../../../../../redux/actions/header-data.action';
import { IHeaderSearch } from '../../models/headerSearch.model';
import { selectContentSearch } from './../../../../../../redux/selectors/header-data.selector';

@Component({
  selector: 'app-header-content-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header-content-search.component.html',
  styleUrl: './header-content-search.component.scss',
})
export class HeaderContentSearchComponent implements OnInit, OnDestroy {
  contentSearch: IHeaderSearch | null = null;
  searchVal = '';

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit(): void {
    const headerSearchSubscription = this.store
      .select(selectContentSearch)
      .pipe(
        tap((headerSearch) => {
          this.contentSearch = headerSearch;
        })
      )
      .subscribe();

    this.subscriptions.add(headerSearchSubscription);
  }

  public onSearch() {
    this.store.dispatch(
      HeaderDataActions.updateSearchValue({
        searchValue: this.searchVal.trim(),
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
