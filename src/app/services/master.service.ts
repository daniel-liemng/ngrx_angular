import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/blog/blog.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  haveAccess() {
    return true;
  }

  getAllBlogs(): Observable<BlogModel[]> {
    return this.http.get<BlogModel[]>('http://localhost:3000/blogs');
  }

  createBlog(blogInput: BlogModel) {
    return this.http.post('http://localhost:3000/blogs', blogInput).pipe(
      tap(() => {
        this.http.get<BlogModel>(
          'http://localhost:3000/blogs?_limit=1&_sort=id&_order=desc'
        );
      })
    );
  }

  updateBlog(blogInput: BlogModel) {
    return this.http.put(
      `http://localhost:3000/blogs/${blogInput.id}`,
      blogInput
    );
  }

  deleteBlog(blogId: number) {
    return this.http.delete(`http://localhost:3000/blogs/${blogId}`);
  }
}
