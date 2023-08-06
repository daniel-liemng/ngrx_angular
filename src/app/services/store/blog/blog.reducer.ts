import { createReducer, on } from '@ngrx/store';
import { initialBlogState } from './blog.state';
import {
  addBlog,
  addBlogSuccess,
  deleteBlog,
  deleteBlogSuccess,
  loadBlog,
  loadBlogFail,
  loadBlogSuccess,
  updateBlog,
  updateBlogSuccess,
} from './blog.action';
import { BlogModel } from './blog.model';

const _blogReducer = createReducer(
  initialBlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
      // isLoading: false,
    };
  }),
  on(loadBlogSuccess, (state, action) => {
    return {
      ...state,
      blogList: [...action.blogList],
      errorMessage: '',
      // isLoading: false,
    };
  }),
  on(loadBlogFail, (state, action) => {
    return {
      ...state,
      blogList: [],
      errorMessage: action.errorText.message,
      // isLoading: false,
    };
  }),
  // on(addBlog, (state, action) => {
  //   const _blog = { ...action.blogInput };
  //   _blog.id = Math.floor(Math.random() * Date.now());
  //   return {
  //     ...state,
  //     blogList: [...state.blogList, _blog],
  //   };
  // }),
  on(addBlogSuccess, (state, action) => {
    const _blog = { ...action.blogInput };
    return {
      ...state,
      blogList: [...state.blogList, _blog],
      // isLoading: false,
    };
  }),
  on(updateBlogSuccess, (state, action) => {
    const _blog = { ...action.blogInput };
    const updatedBlogs = state.blogList.map((blog: BlogModel) => {
      return _blog.id === blog.id ? _blog : blog;
    });
    return {
      ...state,
      blogList: updatedBlogs,
      // isLoading: false,
    };
  }),
  // on(updateBlog, (state, action) => {
  //   const _blog = { ...action.blogInput };
  //   const updatedBlogs = state.blogList.map((blog: BlogModel) => {
  //     return _blog.id === blog.id ? _blog : blog;
  //   });
  //   console.log('7878', updatedBlogs);
  //   return {
  //     ...state,
  //     blogList: updatedBlogs,
  //   };
  // }),
  on(deleteBlogSuccess, (state, action) => {
    const updatedBlogs = state.blogList.filter((blog: BlogModel) => {
      return blog.id !== action.id;
    });
    return {
      ...state,
      blogList: updatedBlogs,
      // isLoading: false,
    };
  })
  // on(deleteBlog, (state, action) => {
  //   const updatedBlogs = state.blogList.filter((blog: BlogModel) => {
  //     return blog.id !== action.id;
  //   });
  //   return {
  //     ...state,
  //     blogList: updatedBlogs,
  //   };
  // }),
);

export const blogReducer = (state: any, action: any) => {
  return _blogReducer(state, action);
};
