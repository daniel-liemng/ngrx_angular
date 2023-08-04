import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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
  constructor(private store: Store<AppStateModel>) {}

  ngOnInit(): void {
    this.store.select(getBlog).subscribe((data) => {
      this.blogList = data;
    });
  }
}
