import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get('/assets/news.json');
  }
}
