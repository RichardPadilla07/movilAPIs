import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  correo: string = '';
  contrasena: string = '';
  error: string = '';

  signIn() {
    // Aquí va la lógica de inicio de sesión
    // Si hay error, puedes asignar un mensaje a this.error
    // this.error = 'Correo o contraseña incorrectos';
  }
}