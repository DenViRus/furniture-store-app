import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-products-slider-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-slider-card.component.html',
  styleUrl: './products-slider-card.component.scss',
})
export class ProductsSliderCardComponent {
  @Input() product: IProduct | undefined;
}
