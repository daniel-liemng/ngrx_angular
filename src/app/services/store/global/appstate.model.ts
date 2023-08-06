import { BlogModel, Blogs } from '../blog/blog.model';
import { CounterModel } from '../counter.model';

export interface AppStateModel {
  isLoading: boolean;
  // counter: CounterModel;
  // blog: Blogs;
}
