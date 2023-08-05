import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFormDialogComponent } from './blog-form-dialog.component';

describe('BlogFormDialogComponent', () => {
  let component: BlogFormDialogComponent;
  let fixture: ComponentFixture<BlogFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogFormDialogComponent]
    });
    fixture = TestBed.createComponent(BlogFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
