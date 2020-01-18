import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOptionsComponent } from './pricing-options.component';

describe('PricingOptionsComponent', () => {
  let component: PricingOptionsComponent;
  let fixture: ComponentFixture<PricingOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
