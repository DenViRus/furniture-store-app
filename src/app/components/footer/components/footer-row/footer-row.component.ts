import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';

import { selectRow } from '../../../../redux/selectors/footer-data.selector';
import { IFooterRow } from '../../models/footerRow.model';

@Component({
  selector: 'app-footer-row',
  standalone: true,
  imports: [],
  templateUrl: './footer-row.component.html',
  styleUrl: './footer-row.component.scss',
})
export class FooterRowComponent implements OnInit, OnDestroy {
  rowData: IFooterRow | null = null;

  private subscriptions = new Subscription();

  constructor(private store: Store) {}

  ngOnInit() {
    const rowSubscription = this.store
      .select(selectRow)
      .pipe(
        tap((row) => {
          this.rowData = row;
        })
      )
      .subscribe();

    this.subscriptions.add(rowSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
