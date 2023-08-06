import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import {
  ADD_BLOG,
  LOAD_BLOG,
  addBlog,
  addBlogSuccess,
  deleteBlog,
  deleteBlogSuccess,
  loadBlogFail,
  loadBlogSuccess,
  updateBlog,
  updateBlogSuccess,
} from './blog.action';
import { map, exhaustMap, catchError, EMPTY, of } from 'rxjs';
import { BlogModel } from './blog.model';

@Injectable()
export class BlogEffects {
  constructor(private action$: Actions, private service: MasterService) {}

  _loadBlog = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_BLOG),
      exhaustMap((action) => {
        return this.service.getAllBlogs().pipe(
          map((data) => {
            return loadBlogSuccess({ blogList: data });
          }),
          catchError((err) => of(loadBlogFail({ errorText: err })))
        );
      })
    )
  );

  _addBlog = createEffect(() =>
    this.action$.pipe(
      ofType(addBlog),
      exhaustMap((action) => {
        return this.service.createBlog(action.blogInput).pipe(
          map((data) => {
            return addBlogSuccess({ blogInput: data as BlogModel });
          }),
          catchError((err) => of(loadBlogFail({ errorText: err })))
        );
      })
    )
  );

  _updateBlog = createEffect(() =>
    this.action$.pipe(
      ofType(updateBlog),
      exhaustMap((action) => {
        return this.service.updateBlog(action.blogInput).pipe(
          map(() => {
            return updateBlogSuccess({ blogInput: action.blogInput });
          }),
          catchError((err) => of(loadBlogFail({ errorText: err })))
        );
      })
    )
  );

  _deleteBlog = createEffect(() =>
    this.action$.pipe(
      ofType(deleteBlog),
      exhaustMap((action) => {
        return this.service.deleteBlog(action.id).pipe(
          map(() => {
            return deleteBlogSuccess({ id: action.id });
          }),
          catchError((err) => of(loadBlogFail({ errorText: err })))
        );
      })
    )
  );
}
