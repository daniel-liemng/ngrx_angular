import { createReducer, on } from '@ngrx/store';
import { initialBlogState } from './blog.state';
import { loadBlog } from './blog.action';

const _blogReducer = createReducer(
  initialBlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
    };
  })
);

export const blogReducer = (state: any, action: any) => {
  return _blogReducer(state, action);
};
