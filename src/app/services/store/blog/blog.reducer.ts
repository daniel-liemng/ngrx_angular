import { createReducer, on } from '@ngrx/store';
import { initialBlogState } from './blog.state';
import { addBlog, loadBlog } from './blog.action';

const _blogReducer = createReducer(
  initialBlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
      blogList: state.blogList,
    };
  }),
  on(addBlog, (state, action) => {
    const _blog = { ...action.blogInput };
    _blog.id = state.blogList.length + 1;
    return {
      ...state,
      blogList: [...state.blogList, _blog],
    };
  })
);

export const blogReducer = (state: any, action: any) => {
  return _blogReducer(state, action);
};
