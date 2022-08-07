import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveBlogListComponent } from './admin-approve-blog-list.component';

describe('AdminApproveBlogListComponent', () => {
  let component: AdminApproveBlogListComponent;
  let fixture: ComponentFixture<AdminApproveBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApproveBlogListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
