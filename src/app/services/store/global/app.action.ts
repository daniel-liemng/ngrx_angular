import { createAction, props } from '@ngrx/store';

export const SHOW_ALERT = '[App Event] Show Alert';
export const EMPTY_ACTION = '[App Event] Empty';

export const ShowAlert = createAction(
  SHOW_ALERT,
  props<{ message: string; actionResult: string }>()
);

export const EmptyAction = createAction(EMPTY_ACTION);
