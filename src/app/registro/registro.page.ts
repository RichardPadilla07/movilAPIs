import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage {
  correo: string = '';
  contrasena: string = '';
  error: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async registrar() {
    this.error = '';
    try {
      const cred = await this.afAuth.createUserWithEmailAndPassword(this.correo, this.contrasena);
      await cred.user?.sendEmailVerification();
      // Redirige a la página de registro exitoso
      this.router.navigate(['/registro-exitoso']);
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        this.error = 'El correo ya está registrado. Intenta con otro.';
      } else if (err.code === 'auth/invalid-email') {
        this.error = 'El correo no es válido.';
      } else if (err.code === 'auth/weak-password') {
        this.error = 'La contraseña debe tener al menos 6 caracteres.';
      } else {
        this.error = 'No se pudo crear la cuenta. Intenta de nuevo.';
      }
    }
  }
}