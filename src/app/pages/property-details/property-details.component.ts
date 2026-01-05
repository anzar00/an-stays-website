import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ACCOMMODATIONS } from '../../core/data/accommodations.data';
import { Accommodation } from '../../core/models/accommodation.model';

@Component({
  selector: 'app-property-details',
  standalone: true,
  templateUrl: './property-details.component.html',
})
export class PropertyDetailsComponent {
  property?: Accommodation;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.property = ACCOMMODATIONS.find(p => p.id === id);
  }
}
