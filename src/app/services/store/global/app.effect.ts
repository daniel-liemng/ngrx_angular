import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { EmptyAction, ShowAlert } from './app.action';

@Injectable()
export class AppEffects {
  constructor(private action$: Actions, private _snackBar: MatSnackBar) {}

  _showAlert = createEffect(() =>
    this.action$.pipe(
      ofType(ShowAlert),
      exhaustMap((action) => {
        return this.showSnackbarAlert(action.message, action.actionResult)
          .afterDismissed()
          .pipe(
            map(() => {
              return EmptyAction();
            })
          );
      })
    )
  );

  showSnackbarAlert(message: string, actionResult: string = 'fail') {
    let _class = actionResult === 'pass' ? 'green-snackbar' : 'red-snackbar';

    return this._snackBar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: [_class],
      duration: 3000,
    });
  }
}
