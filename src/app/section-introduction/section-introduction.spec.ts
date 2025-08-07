import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIntroduction } from './section-introduction';

describe('SectionIntroduction', () => {
  let component: SectionIntroduction;
  let fixture: ComponentFixture<SectionIntroduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionIntroduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionIntroduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
