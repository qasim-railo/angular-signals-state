import { Component, inject } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
 stateService = inject(StateService);
}
