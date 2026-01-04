import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { WhatsappFabComponent } from './shared/components/whatsapp-fab/whatsapp-fab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, WhatsappFabComponent],
  template: `
    <app-navbar />
    <router-outlet />
    <app-whatsapp-fab />
  `
})
export class AppComponent {}
