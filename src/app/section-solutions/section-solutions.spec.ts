import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSolutions } from './section-solutions';

describe('SectionSolutions', () => {
  let component: SectionSolutions;
  let fixture: ComponentFixture<SectionSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
