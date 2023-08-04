import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { customIncrement } from 'src/app/services/store/counter.action';
import { CounterModel } from 'src/app/services/store/counter.model';
import { getChannelName } from 'src/app/services/store/counter.selector';
import { AppStateModel } from 'src/app/services/store/global/appstate.model';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
})
export class CustomCounterComponent implements OnInit, OnDestroy {
  counterInput!: number;
  actionType!: string;

  channelName!: string;
  counterSubscribe!: Subscription;

  // constructor(private store: Store<{ counter: CounterModel }>) {}
  constructor(private store: Store<AppStateModel>) {}

  ngOnInit(): void {
    this.counterSubscribe = this.store
      .select(getChannelName)
      .subscribe((data) => {
        this.channelName = data;
        console.log('custome');
      });

    // this.counterSubscribe = this.store.select('counter').subscribe((data) => {
    //   this.channelName = data.channelName;
    //   console.log('custom');
    // });
  }

  ngOnDestroy(): void {
    this.counterSubscribe.unsubscribe();
  }

  onIncrement() {
    this.store.dispatch(
      customIncrement({
        value: +this.counterInput,
        actionType: this.actionType,
      })
    );
  }
}
