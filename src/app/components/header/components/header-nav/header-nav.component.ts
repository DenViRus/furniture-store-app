import { Component } from '@angular/core';

import { HeaderNavButtonComponent } from './components/header-nav-button/header-nav-button.component';
import { HeaderNavCartComponent } from './components/header-nav-cart/header-nav-cart.component';
import { HeaderNavListComponent } from './components/header-nav-list/header-nav-list.component';
import { HeaderNavLogoComponent } from './components/header-nav-logo/header-nav-logo.component';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
  imports: [
    HeaderNavLogoComponent,
    HeaderNavListComponent,
    HeaderNavCartComponent,
    HeaderNavButtonComponent,
  ],
})
export class HeaderNavComponent {}
