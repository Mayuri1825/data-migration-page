import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBenefits } from './section-benefits';

describe('SectionBenefits', () => {
  let component: SectionBenefits;
  let fixture: ComponentFixture<SectionBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionBenefits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBenefits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
