import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRejectedBlogsComponent } from './admin-rejected-blogs.component';

describe('AdminRejectedBlogsComponent', () => {
  let component: AdminRejectedBlogsComponent;
  let fixture: ComponentFixture<AdminRejectedBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRejectedBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRejectedBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
