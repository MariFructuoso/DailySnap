import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- IMPORTANTE: Importar esto

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // <--- IMPORTANTE: Añadirlo aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variable para guardar qué formulario está abierto (login, register o null)
  activeForm: 'login' | 'register' | null = null;

  // Función para abrir/cerrar los formularios
  toggleForm(formName: 'login' | 'register') {
    // Si pulsamos el mismo que ya está abierto, lo cerramos (null)
    if (this.activeForm === formName) {
      this.activeForm = null;
    } else {
      // Si no, abrimos el nuevo
      this.activeForm = formName;
    }
  }
}