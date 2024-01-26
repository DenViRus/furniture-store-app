import { Component, Input } from '@angular/core';

import { IBenefit } from '../../models/benefit.model';

@Component({
  selector: 'app-benefit',
  standalone: true,
  imports: [],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.scss',
})
export class BenefitComponent {
  @Input() benefitData: IBenefit | null = null;
}
