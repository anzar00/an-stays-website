import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AccommodationsComponent } from './accommodations/accommodations.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AccommodationsComponent],
  template: `
    <app-hero />
    <app-accommodations />
  `,
})
export class HomeComponent {}
