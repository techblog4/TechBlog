import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveBlogComponent } from './admin-approve-blog.component';

describe('AdminApproveBlogComponent', () => {
  let component: AdminApproveBlogComponent;
  let fixture: ComponentFixture<AdminApproveBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
