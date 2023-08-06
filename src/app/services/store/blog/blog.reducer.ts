import { createReducer, on } from '@ngrx/store';
import { initialBlogState } from './blog.state';
import {
  addBlog,
  deleteBlog,
  loadBlog,
  loadBlogSuccess,
  updateBlog,
} from './blog.action';
import { BlogModel } from './blog.model';

const _blogReducer = createReducer(
  initialBlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
    };
  }),
  on(loadBlogSuccess, (state, action) => {
    return {
      ...state,
      blogList: [...action.blogList],
    };
  }),
  on(addBlog, (state, action) => {
    const _blog = { ...action.blogInput };
    _blog.id = Math.floor(Math.random() * Date.now());
    return {
      ...state,
      blogList: [...state.blogList, _blog],
    };
  }),
  on(updateBlog, (state, action) => {
    const _blog = { ...action.blogInput };
    const updatedBlogs = state.blogList.map((blog: BlogModel) => {
      return _blog.id === blog.id ? _blog : blog;
    });
    console.log('7878', updatedBlogs);
    return {
      ...state,
      blogList: updatedBlogs,
    };
  }),
  on(deleteBlog, (state, action) => {
    const updatedBlogs = state.blogList.filter((blog: BlogModel) => {
      return blog.id !== action.id;
    });
    return {
      ...state,
      blogList: updatedBlogs,
    };
  })
);

export const blogReducer = (state: any, action: any) => {
  return _blogReducer(state, action);
};
