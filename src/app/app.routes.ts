import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-page';
import { FeedComponent } from './pages/feed/feed-page';
import { LandingComponent } from './pages/landing/landing-page';
import { ProfileComponent } from './pages/profile/profile';
import { SiglePostComponent } from './pages/sigle-post/sigle-post';
import { ChatComponent } from './pages/chat-page/chat-page';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'auth', component: HomeComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'profile', component: ProfileComponent  },
  { path: 'single-post', component: SiglePostComponent },
  {path: 'chats', component: ChatComponent },
  { path: '**', redirectTo: '' } // Por si escriben una ruta que no existe
];