import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddonsComponent } from './adminaddons.component';

describe('AdminaddonsComponent', () => {
  let component: AdminaddonsComponent;
  let fixture: ComponentFixture<AdminaddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
