import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
} from 'src/app/services/store/counter.action';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss'],
})
export class CounterbuttonComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
