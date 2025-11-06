import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-olvidar-contrasenia',
  templateUrl: './olvidar-contrasenia.page.html',
  styleUrls: ['./olvidar-contrasenia.page.scss'],
  standalone: false
})
export class OlvidarContraseniaPage {
  correo: string = '';
  mensaje: string = '';
  error: string = '';

  recuperar() {
    // Aquí va la lógica para recuperar contraseña
    // Si es exitoso: this.mensaje = 'Revisa tu correo para recuperar tu contraseña';
    // Si hay error: this.error = 'No se pudo enviar el correo';
  }
}