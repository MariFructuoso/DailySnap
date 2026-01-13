import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngIf

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeForm: 'login' | 'register' | null = null;

  toggleForm(formName: 'login' | 'register') {
    if (this.activeForm === formName) {
      this.activeForm = null;
    } else {
      this.activeForm = formName;
    }
  }
}