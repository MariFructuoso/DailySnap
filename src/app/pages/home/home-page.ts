import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngIf

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomeComponent {
  activeForm: 'login' | 'register' | null = null;

  constructor(private router: Router) {}

  toggleForm(formName: 'login' | 'register') {
    if (this.activeForm === formName) {
      this.activeForm = null;
    } else {
      this.activeForm = formName;
    }
  }

  onLogin() {
    // Aquí es donde validarías con MySQL en el futuro
    console.log('Login exitoso, navegando...');
    this.router.navigate(['/feed']); 
  }
}
