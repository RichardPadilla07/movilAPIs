import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  meme: any = null;

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.getMeme();
  }

  getMeme() {
    this.http.get('https://www.reddit.com/r/memes/random/.json').subscribe((data: any) => {
      const post = data[0]?.data?.children[0]?.data;
      this.meme = {
        title: post.title,
        url: post.url,
      };
    });
  }
}
