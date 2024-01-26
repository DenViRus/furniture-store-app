import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProductsDataActions } from '../../../../../../redux/actions/products-data.action';
import { IProductsTab } from './../../models/productsTab.model';

@Component({
  selector: 'app-products-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-tab.component.html',
  styleUrl: './products-tab.component.scss',
})
export class ProductsTabComponent {
  @Input() productsTab: IProductsTab | null = null;

  constructor(private store: Store) {}

  public onToggleTab(): void {
    if (!this.productsTab?.active) {
      this.store.dispatch(
        ProductsDataActions.updateTabActive({
          name: this.productsTab?.name || '',
        })
      );
    }
  }
}
