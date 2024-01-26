import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { HeaderSubNavListComponent } from '../header-sub-nav-list/header-sub-nav-list.component';
import { IHeaderNavListItem } from './../../../../models/headerNavListItem.model';

@Component({
  selector: 'app-header-nav-list-item',
  standalone: true,
  imports: [CommonModule, HeaderSubNavListComponent],
  templateUrl: './header-nav-list-item.component.html',
  styleUrl: './header-nav-list-item.component.scss',
})
export class HeaderNavListItemComponent {
  @Input() navItem: IHeaderNavListItem | null = null;
}
