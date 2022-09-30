import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(public client: HttpClient) {}
  readonly baseUrl = 'http://localhost:8080/';

  addBook(book: Book): Observable<Book> {
    return this.client.post<Book>(this.baseUrl + 'add', book);
  }

  getBooks(userId: string): Observable<Book[]> {
    return this.client.get<Book[]>(this.baseUrl + 'all/' + userId);
  }

  getBookById(id: number): Observable<Book> {
    return this.client.get<Book>(this.baseUrl + 'book/' + id);
  }

  deleteBook(id: number): Observable<Book> {
    return this.client.delete<Book>(this.baseUrl + 'delete/' + id);
  }
}
