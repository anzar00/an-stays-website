import { Component } from '@angular/core';
import { TEAM_MEMBERS } from '../../core/data/team.data';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  team = TEAM_MEMBERS;
}
