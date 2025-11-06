import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  memes: any[] = [];
  allMemes: any[] = [];
  loading = false;
  correo = '';
  contrasena = '';
  error = '';

  constructor(private afAuth: AngularFireAuth, private router: Router, private http: HttpClient) {}

  ionViewWillEnter() {
    this.correo = '';
    this.contrasena = '';
    this.error = '';
    this.getMemes();
  }

  getMemes() {
    this.loading = true;
    this.http.get('https://api.imgflip.com/get_memes').subscribe((data: any) => {
      this.allMemes = data.data.memes;
      this.setRandomMemes();
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  setRandomMemes() {
    // Selecciona 10 memes aleatorios sin repetir
    const shuffled = this.allMemes.sort(() => 0.5 - Math.random());
    this.memes = shuffled.slice(0, 10);
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
