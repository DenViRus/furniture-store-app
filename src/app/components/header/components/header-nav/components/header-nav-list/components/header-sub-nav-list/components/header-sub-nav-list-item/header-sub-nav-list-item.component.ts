import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { IHeaderSubNavListItem } from '../../../../models/headerSubNavListItem.model';

@Component({
  selector: 'app-header-sub-nav-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-sub-nav-list-item.component.html',
  styleUrl: './header-sub-nav-list-item.component.scss',
})
export class HeaderSubNavListItemComponent {
  @Input() subNavItem: IHeaderSubNavListItem | null = null;
}
