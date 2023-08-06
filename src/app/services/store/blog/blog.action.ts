import { createAction, props } from '@ngrx/store';
import { BlogModel } from './blog.model';

export const LOAD_BLOG = '[Blog Page] Load Blog';
export const LOAD_BLOG_SUCCESS = '[Blog Page] Load Blog Success';
export const LOAD_BLOG_FAIL = '[Blog Page] Load Blog Fail';

export const ADD_BLOG = '[Blog Page] Add Blog';
export const ADD_BLOG_SUCCESS = '[Blog Page] Add Blog Success';
export const ADD_BLOG_FAIL = '[Blog Page] Add Blog Fail';

export const loadBlog = createAction(LOAD_BLOG);
// export const loadBlog = createAction('loadBlog');

export const loadBlogSuccess = createAction(
  LOAD_BLOG_SUCCESS,
  props<{ blogList: BlogModel[] }>()
);

export const loadBlogFail = createAction(
  LOAD_BLOG_FAIL,
  props<{ errorText: any }>()
);

export const addBlog = createAction(
  ADD_BLOG,
  props<{ blogInput: BlogModel }>()
);
// export const addBlog = createAction(
//   'addBlog',
//   props<{ blogInput: BlogModel }>()
// );

export const addBlogSuccess = createAction(
  ADD_BLOG_SUCCESS,
  props<{ blogInput: BlogModel }>()
);

export const updateBlog = createAction(
  'updateBlog',
  props<{ blogInput: BlogModel }>()
);

export const deleteBlog = createAction('deleteBlog', props<{ id: number }>());
