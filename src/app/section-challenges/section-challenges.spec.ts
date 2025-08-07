import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionChallenges } from './section-challenges';

describe('SectionChallenges', () => {
  let component: SectionChallenges;
  let fixture: ComponentFixture<SectionChallenges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionChallenges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionChallenges);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
