import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ACCOMMODATIONS } from '../../core/data/accommodations.data';
import { Accommodation } from '../../core/models/accommodation.model';

@Component({
  selector: 'app-property-details',
  standalone: true,
  templateUrl: './property-details.component.html',
})
export class PropertyDetailsComponent implements OnInit, OnDestroy {
  property?: Accommodation;

  currentSlide = 0;
  intervalId: any;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.property = ACCOMMODATIONS.find(p => p.id === id);
  }

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    if (!this.property?.gallery?.length) return;

    this.resetInterval();

    this.currentSlide =
      (this.currentSlide + 1) % this.property.gallery.length;
  }

  prevSlide() {
    if (!this.property?.gallery?.length) return;

    this.resetInterval();

    this.currentSlide =
      (this.currentSlide - 1 + this.property.gallery.length) %
      this.property.gallery.length;
  }

  goToSlide(index: number) {
    this.resetInterval();
    this.currentSlide = index;
  }

  resetInterval() {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}