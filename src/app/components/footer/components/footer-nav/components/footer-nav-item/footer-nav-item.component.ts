import { Component, Input } from '@angular/core';

import { IFooterNavItem } from '../../models/footerNavItem.model';

@Component({
  selector: 'app-footer-nav-item',
  standalone: true,
  imports: [],
  templateUrl: './footer-nav-item.component.html',
  styleUrl: './footer-nav-item.component.scss',
})
export class FooterNavItemComponent {
  @Input() itemData: IFooterNavItem | null = null;
}
