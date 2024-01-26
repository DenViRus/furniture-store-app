import { Component, Input } from '@angular/core';

import { IFooterNav } from '../../models/footerNav.model';
import { FooterNavItemComponent } from './components/footer-nav-item/footer-nav-item.component';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [FooterNavItemComponent],
  templateUrl: './footer-nav.component.html',
  styleUrl: './footer-nav.component.scss',
})
export class FooterNavComponent {
  @Input() navData: IFooterNav | null = null;
}
