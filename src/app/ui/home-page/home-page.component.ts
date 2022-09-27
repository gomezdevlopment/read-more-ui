import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookInfo } from 'src/app/models/bookInfo';
import { BookService } from 'src/app/services/book.service';
import { GoogleBooksService } from 'src/app/services/google-books.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  searchResults: BookInfo[] = [];
  input: string = '';

  constructor(
    public googleBookService: GoogleBooksService,
    public bookService: BookService
  ) {}

  searchBooks(input: string) {
    this.googleBookService.getBooks(input).subscribe({
      next: (res) => {
        this.searchResults = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {}
}
