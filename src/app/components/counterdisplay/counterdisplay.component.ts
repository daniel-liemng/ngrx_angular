import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/services/store/counter.model';
import { getCounter } from 'src/app/services/store/counter.selector';
import { AppStateModel } from 'src/app/services/store/global/appstate.model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss'],
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  counterNum!: number;
  channelName!: string;
  counterSubcribe!: Subscription;
  counter$!: Observable<CounterModel>;

  // constructor(private store: Store<{ counter: CounterModel }>) {}
  constructor(private store: Store<AppStateModel>) {}

  ngOnInit(): void {
    this.counterSubcribe = this.store.select(getCounter).subscribe((data) => {
      this.counterNum = data;
    });

    // WAY 1
    // this.counterSubcribe = this.store.select('counter').subscribe((data) => {
    //   this.counterNum = data.counter;
    //   // this.channelName = data.channelName;
    //   console.log('display');
    // });

    // WAY 2
    // this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    if (this.counterSubcribe) {
      this.counterSubcribe.unsubscribe();
    }
  }
}
