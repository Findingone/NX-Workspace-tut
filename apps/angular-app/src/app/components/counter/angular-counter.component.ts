import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactConversionComponent } from '../React-component';
import Counter from '../../../../../../libs/counter/src/lib/counter';

@Component({
  selector: 'angular-react-angular-counter',
  standalone: true,
  imports: [CommonModule, ReactConversionComponent],
  templateUrl: './angular-counter.component.html',
  styleUrl: './angular-counter.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngularCounterComponent {
  counter = 0;
  reactCounter = Counter;
  increaseCounterByOne() {
    this.counter += 1;
  }
}
