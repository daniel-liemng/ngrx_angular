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
import { map, exhaustMap, catchError, EMPTY, of, switchMap } from 'rxjs';
import { BlogModel } from './blog.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmptyAction, ShowAlert } from '../global/app.action';

@Injectable()
export class BlogEffects {
  constructor(
    private action$: Actions,
    private service: MasterService,
    private _snackBar: MatSnackBar
  ) {}

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

  // With MUI Alert
  _addBlog = createEffect(() =>
    this.action$.pipe(
      ofType(addBlog),
      switchMap((action) =>
        this.service.createBlog(action.blogInput).pipe(
          switchMap((data) =>
            of(
              addBlogSuccess({ blogInput: data as BlogModel }),
              ShowAlert({ message: 'Blog Created', actionResult: 'pass' })
            )
          ),
          catchError((err) =>
            of(
              ShowAlert({
                message: `Blog Create Failed - Due to ${err.message}`,
                actionResult: 'fail',
              })
            )
          )
          // catchError((err) => of(loadBlogFail({ errorText: err })))
        )
      )
    )
  );

  // NORMAL
  // _addBlog = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(addBlog),
  //     exhaustMap((action) => {
  //       return this.service.createBlog(action.blogInput).pipe(
  //         map((data) => {
  //           return addBlogSuccess({ blogInput: data as BlogModel });
  //         }),
  //         catchError((err) => of(loadBlogFail({ errorText: err })))
  //       );
  //     })
  //   )
  // );

  _updateBlog = createEffect(() =>
    this.action$.pipe(
      ofType(updateBlog),
      switchMap((action) =>
        this.service.updateBlog(action.blogInput).pipe(
          switchMap((res) =>
            of(
              updateBlogSuccess({ blogInput: action.blogInput }),
              ShowAlert({ message: 'Blog Updated', actionResult: 'pass' })
            )
          ),
          catchError((err) =>
            of(
              ShowAlert({
                message: `Blog Update Fail - Due to ${err.message}`,
                actionResult: 'fail',
              })
            )
          )
          // catchError((err) => of(loadBlogFail({ errorText: err })))
        )
      )
    )
  );

  _deleteBlog = createEffect(() =>
    this.action$.pipe(
      ofType(deleteBlog),
      switchMap((action) => {
        return this.service.deleteBlog(action.id).pipe(
          switchMap(() =>
            of(
              deleteBlogSuccess({ id: action.id }),
              ShowAlert({ message: 'Blog Deleted', actionResult: 'pass' })
            )
          ),
          catchError((err) =>
            of(
              ShowAlert({
                message: `Blog Delete Fail - Due to ${err.message}`,
                actionResult: 'fail',
              })
            )
          )
        );
      })
    )
  );
}
