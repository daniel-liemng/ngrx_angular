import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogModel } from './blog.model';

const getBlogState = createFeatureSelector<BlogModel[]>('blog');

export const getBlog = createSelector(getBlogState, (state) => {
  return state;
});
