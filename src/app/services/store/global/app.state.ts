import { blogReducer } from '../blog/blog.reducer';
import { counterReducer } from '../counter.reducer';
import { appReducer } from './app.reducer';

export const appState = {
  counter: counterReducer,
  blog: blogReducer,
  app: appReducer,
};
