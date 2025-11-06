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

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async signIn() {
    this.error = '';
    try {
      const cred = await this.afAuth.signInWithEmailAndPassword(this.correo, this.contrasena);
      if (cred.user && !cred.user.emailVerified) {
        this.error = 'Debes verificar tu correo antes de iniciar sesión. Revisa tu bandeja de entrada o Spam.';
        await this.afAuth.signOut();
        return;
      }
      this.router.navigate(['/tabs']);
    } catch (err: any) {
      this.error = 'Correo o contraseña incorrectos';
    }
  }
}