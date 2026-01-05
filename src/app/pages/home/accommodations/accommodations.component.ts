import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ACCOMMODATIONS } from '../../../core/data/accommodations.data';
import { Accommodation } from '../../../core/models/accommodation.model';

@Component({
  selector: 'app-accommodations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './accommodations.component.html',
})
export class AccommodationsComponent {
  accommodations: Accommodation[] = ACCOMMODATIONS;

  getStartingPrice(rooms: any[]): number {
    return Math.min(...rooms.map(r => r.price));
  }
}
