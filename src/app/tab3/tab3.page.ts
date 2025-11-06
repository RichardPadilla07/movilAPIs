import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: false
})
export class Tab3Page {
  cats: any[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.getCats();
  }

  getCats() {
    this.loading = true;
    this.cats = [];
    this.http.get('https://api.thecatapi.com/v1/images/search?limit=10').subscribe((data: any) => {
      this.cats = data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
}
