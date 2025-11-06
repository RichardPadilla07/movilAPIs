import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  registrar() {
    // Aquí va la lógica para registrar un usuario
    // Ejemplo: this.authService.registrar(this.nombre, this.correo, this.contrasena);
  }
}