import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  mobileMenuOpen = false;

  constructor(private router: Router, private viewport: ViewportScroller) {}
  
  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }

  scrollToAccommodations(event: Event) {
    event.preventDefault();
    const scroll = () => this.viewport.scrollToAnchor('accommodations');
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => setTimeout(scroll));
    } else {
      scroll();
    }
    this.closeMenu();
  }
}
