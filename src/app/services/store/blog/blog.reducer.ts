import { createReducer, on } from '@ngrx/store';
import { initialBlogState } from './blog.state';
import { addBlog, loadBlog, updateBlog } from './blog.action';

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
  }),
  on(updateBlog, (state, action) => {
    const _blog = { ...action.blogInput };
    const updatedBlogs = state.blogList.map((blog) => {
      return _blog.id === blog.id ? _blog : blog;
    });
    return {
      ...state,
      blogList: [...updatedBlogs],
    };
  })
);

export const blogReducer = (state: any, action: any) => {
  return _blogReducer(state, action);
};
