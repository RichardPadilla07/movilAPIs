import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false
})
export class Tab2Page {
  jokes: any[] = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.getJokes();
  }

  getJokes() {
    this.http.get('https://v2.jokeapi.dev/joke/Any?amount=10').subscribe((data: any) => {
      this.jokes = data.jokes;
    });
  }
}
