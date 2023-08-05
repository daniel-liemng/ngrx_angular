import { createAction, props } from '@ngrx/store';
import { BlogModel } from './blog.model';

export const loadBlog = createAction('loadBlog');
export const addBlog = createAction(
  'addBlog',
  props<{ blogInput: BlogModel }>()
);
export const updateBlog = createAction(
  'updateBlog',
  props<{ blogInput: BlogModel }>()
);
