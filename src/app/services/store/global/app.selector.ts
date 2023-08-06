import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStateModel } from './appstate.model';

const getAppState = createFeatureSelector<AppStateModel>('app');

export const getSpinnerState = createSelector(getAppState, (state) => {
  return state.isLoading;
});
