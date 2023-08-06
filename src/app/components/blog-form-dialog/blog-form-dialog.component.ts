import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  addBlog,
  loadBlog,
  updateBlog,
} from 'src/app/services/store/blog/blog.action';
import { BlogModel } from 'src/app/services/store/blog/blog.model';
import { getBlogById } from 'src/app/services/store/blog/blog.selector';
import { AppStateModel } from 'src/app/services/store/global/appstate.model';

@Component({
  selector: 'app-blog-form-dialog',
  templateUrl: './blog-form-dialog.component.html',
  styleUrls: ['./blog-form-dialog.component.scss'],
})
export class BlogFormDialogComponent implements OnInit {
  editBlogId!: number;
  editBlog!: BlogModel;

  constructor(
    public dialogRef: MatDialogRef<BlogFormDialogComponent>,
    private formBuilder: FormBuilder,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data?.isEdit) {
      this.editBlogId = this.data.id;
      this.store.select(getBlogById(this.editBlogId)).subscribe((data) => {
        this.editBlog = data;
        this.blogForm.setValue({
          id: this.editBlog.id,
          title: this.editBlog.title,
          description: this.editBlog.description,
        });
      });
    }
  }

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

      if (this.data?.isEdit) {
        blogInput.id = this.blogForm.value.id as number;
        this.store.dispatch(updateBlog({ blogInput }));
      } else {
        this.store.dispatch(addBlog({ blogInput }));
      }
      this.dialogRef.close();
    }
  }
}
