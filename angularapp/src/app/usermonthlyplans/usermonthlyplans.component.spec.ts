import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermonthlyplansComponent } from './usermonthlyplans.component';

describe('UsermonthlyplansComponent', () => {
  let component: UsermonthlyplansComponent;
  let fixture: ComponentFixture<UsermonthlyplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermonthlyplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermonthlyplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
