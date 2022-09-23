import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookInfo } from '../models/bookInfo';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  constructor(public client: HttpClient) {}
  readonly baseUrl = 'http://localhost:8080/search/';

  getBooks(input: string): Observable<BookInfo[]> {
    return this.client.get<BookInfo[]>(this.baseUrl + input);
  }
}
