import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { HeaderDataActions } from './../../redux/actions/header-data.action';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import { HeaderDotsComponent } from './components/header-dots/header-dots.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [HeaderNavComponent, HeaderContentComponent, HeaderDotsComponent],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(HeaderDataActions.loadHeaderData());
  }
}
