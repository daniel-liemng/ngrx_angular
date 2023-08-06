import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import {
  ADD_BLOG,
  LOAD_BLOG,
  addBlog,
  addBlogSuccess,
  loadBlogFail,
  loadBlogSuccess,
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
}
