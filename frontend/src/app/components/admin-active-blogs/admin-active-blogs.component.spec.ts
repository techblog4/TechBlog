import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActiveBlogsComponent } from './admin-active-blogs.component';

describe('AdminActiveBlogsComponent', () => {
  let component: AdminActiveBlogsComponent;
  let fixture: ComponentFixture<AdminActiveBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActiveBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActiveBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
