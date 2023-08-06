import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSpinnerState } from 'src/app/services/store/global/app.selector';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getSpinnerState).subscribe((data) => {
      this.isLoading = data;
    });
  }
}
