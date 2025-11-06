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

  constructor(private afAuth: AngularFireAuth) {}

  async recuperar() {
    this.mensaje = '';
    this.error = '';

    if (!this.correo || !this.correo.endsWith('@gmail.com')) {
      this.error = 'Correo invalido. Intente de nuevo.';
      return;
    }

    try {
      await this.afAuth.sendPasswordResetEmail(this.correo);
      this.mensaje = 'Si el correo esta registrado!. Revisa tu bandeja de entrada o spam para continuar el proceso.';
    } catch (err: any) {
      if (err.code === 'auth/invalid-email') {
        this.error = 'El correo no es válido.';
      } else {
        this.error = 'No se pudo enviar el correo. Intenta de nuevo.';
      }
    }
  }
}