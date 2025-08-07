import { Component, signal } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { SectionIntroduction } from "./section-introduction/section-introduction";
// Import BrowserAnimationsModule to enable animations in Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionChallenges } from './section-challenges/section-challenges';
import { SectionSolutions } from './section-solutions/section-solutions';
import { SectionBenefits } from './section-benefits/section-benefits';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: 
  [  Navbar,
     SectionIntroduction,
     SectionChallenges, 
     SectionSolutions,
     SectionBenefits
            ]
})
export class App {
  protected readonly title = signal('data-migration-page');
}
