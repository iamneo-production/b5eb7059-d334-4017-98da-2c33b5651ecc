import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpremiumplansComponent } from './userpremiumplans.component';

describe('UserpremiumplansComponent', () => {
  let component: UserpremiumplansComponent;
  let fixture: ComponentFixture<UserpremiumplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpremiumplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpremiumplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
