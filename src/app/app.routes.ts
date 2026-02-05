import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'property/:id', component: PropertyDetailsComponent},
  {path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
