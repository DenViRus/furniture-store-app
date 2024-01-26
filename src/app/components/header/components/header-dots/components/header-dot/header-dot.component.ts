import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { HeaderDataActions } from '../../../../../../redux/actions/header-data.action';
import { IHeaderDot } from '../../models/headerDot.model';

@Component({
  selector: 'app-header-dot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-dot.component.html',
  styleUrl: './header-dot.component.scss',
})
export class HeaderDotComponent {
  @Input() headerDot: IHeaderDot | null = null;

  constructor(private store: Store) {}

  public onToggleDot(): void {
    this.store.dispatch(
      HeaderDataActions.updateDotActive({ name: this.headerDot?.name || '' })
    );
  }
}
