import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-page';
import { FeedComponent } from './pages/feed/feed-page'; // Importa el nuevo
import { LandingComponent } from './pages/landing/landing-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'landing', component: LandingComponent },
  { path: '**', redirectTo: '' } // Por si escriben una ruta que no existe
];      