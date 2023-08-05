import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogFormDialogComponent } from 'src/app/components/blog-form-dialog/blog-form-dialog.component';
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

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     data: { name: '' },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }
}
