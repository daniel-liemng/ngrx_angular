import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogFormDialogComponent } from 'src/app/components/blog-form-dialog/blog-form-dialog.component';
import { deleteBlog, loadBlog } from 'src/app/services/store/blog/blog.action';
import { BlogModel } from 'src/app/services/store/blog/blog.model';
import { getBlog } from 'src/app/services/store/blog/blog.selector';
import { AppStateModel } from 'src/app/services/store/global/appstate.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogList!: BlogModel[];

  // constructor(private store: Store<{ blog: BlogModel[] }>) {}
  constructor(private store: Store<AppStateModel>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(loadBlog());
    this.store.select(getBlog).subscribe((data) => {
      this.blogList = data;
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(BlogFormDialogComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  updateBlog(id: number) {
    this.dialog.open(BlogFormDialogComponent, {
      data: { id, isEdit: true },
    });
  }

  deleteBlog(id: number) {
    if (confirm('Are you sure you want to delete it?')) {
      this.store.dispatch(deleteBlog({ id }));
    }
  }
}
