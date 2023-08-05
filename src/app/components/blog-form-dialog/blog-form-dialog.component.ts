import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlog } from 'src/app/services/store/blog/blog.action';
import { BlogModel } from 'src/app/services/store/blog/blog.model';
import { AppStateModel } from 'src/app/services/store/global/appstate.model';

@Component({
  selector: 'app-blog-form-dialog',
  templateUrl: './blog-form-dialog.component.html',
  styleUrls: ['./blog-form-dialog.component.scss'],
})
export class BlogFormDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BlogFormDialogComponent>,
    private formBuilder: FormBuilder,
    private store: Store<AppStateModel>
  ) {}

  blogForm = this.formBuilder.group({
    id: this.formBuilder.control(0),
    title: this.formBuilder.control('', Validators.required),
    description: this.formBuilder.control('', Validators.required),
  });

  saveBlog() {
    if (this.blogForm.valid) {
      const blogInput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string,
      };
      this.store.dispatch(addBlog({ blogInput }));
      this.dialogRef.close();
    }
  }
}
