import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [RouterLink],      
  templateUrl: './feed-page.html',
})
export class FeedComponent {
}