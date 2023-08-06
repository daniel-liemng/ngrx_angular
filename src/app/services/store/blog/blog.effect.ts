import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import { LOAD_BLOG, loadBlogFail, loadBlogSuccess } from './blog.action';
import { map, exhaustMap, catchError, EMPTY, of } from 'rxjs';

@Injectable()
export class BlogEffects {
  constructor(private action$: Actions, private service: MasterService) {}

  _blog = createEffect(() =>
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
}
