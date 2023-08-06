import { createAction, props } from '@ngrx/store';
import { BlogModel } from './blog.model';

export const LOAD_BLOG_SUCCESS = '[Blog Page] Load Blog Success';
export const LOAD_BLOG = '[Blog Page] Load Blog';

// export const loadBlog = createAction('loadBlog');
export const loadBlog = createAction(LOAD_BLOG);

export const loadBlogSuccess = createAction(
  LOAD_BLOG_SUCCESS,
  props<{ blogList: BlogModel[] }>()
);

export const addBlog = createAction(
  'addBlog',
  props<{ blogInput: BlogModel }>()
);

export const updateBlog = createAction(
  'updateBlog',
  props<{ blogInput: BlogModel }>()
);

export const deleteBlog = createAction('deleteBlog', props<{ id: number }>());
