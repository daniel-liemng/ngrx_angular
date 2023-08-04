import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  changeChannelName,
  decrement,
  increment,
  reset,
} from 'src/app/services/store/counter.action';
import { CounterModel } from 'src/app/services/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss'],
})
export class CounterbuttonComponent {
  constructor(private store: Store<{ counter: CounterModel }>) {}

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onIncrement() {
    this.store.dispatch(increment());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  onRename() {
    this.store.dispatch(changeChannelName({ channel: 'Liz' }));
  }
}
