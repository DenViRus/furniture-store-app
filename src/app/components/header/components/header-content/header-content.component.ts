import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectContent } from '../../../../redux/selectors/header-data.selector';
import { HeaderContentSearchComponent } from './components/header-content-search/header-content-search.component';
import { IHeaderContent } from './models/headerContent.model';

@Component({
  selector: 'app-header-content',
  standalone: true,
  imports: [HeaderContentSearchComponent],
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss',
})
export class HeaderContentComponent implements OnInit, OnDestroy {
  headerContent: IHeaderContent | null = null;

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit(): void {
    const headerContentSubscription = this.store
      .select(selectContent)
      .pipe(
        tap((headerContent) => {
          this.headerContent = headerContent;
        })
      )
      .subscribe();

    this.subscriptions.add(headerContentSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
