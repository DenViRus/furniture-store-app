import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss',
})
export class TestComponentComponent {

  paragraph: string = 'This is a test component';
}
