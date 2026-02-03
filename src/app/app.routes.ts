import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-page';
import { FeedComponent } from './pages/feed/feed-page'; // Importa el nuevo

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: '**', redirectTo: '' } // Por si escriben una ruta que no existe
];      