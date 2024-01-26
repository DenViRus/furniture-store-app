import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

import { SliderMoveModel } from '../models/sliderMove.model';

@Directive({
  selector: '[appProductsSliderUi]',
  standalone: true,
})
export class ProductsSliderUiDirective implements OnChanges {
  @Input() sliderMove: SliderMoveModel | null = null;

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnChanges(): void {
    if (!this.sliderMove) {
      return;
    }
    const animationClass =
      this.sliderMove === SliderMoveModel.Left ? 'slideRight' : 'slideLeft';
    this.renderer2.addClass(this.el.nativeElement, animationClass);

    setTimeout(() => {
      this.renderer2.removeClass(this.el.nativeElement, animationClass);
    }, 200);
  }
}
