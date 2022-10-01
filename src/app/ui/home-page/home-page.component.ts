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
  public myBooks: Book[] = [];
  searchResults: BookInfo[] = [];
  input: string = '';

  constructor(
    public googleBookService: GoogleBooksService,
    public bookService: BookService
  ) {}

  public testUserId = 'testUserId';

  isBookInList(bookInfo: BookInfo): string {
    for (var i = 0; i < this.myBooks.length; i++) {
      if (this.myBooks[i].bookId === bookInfo.id) {
        return this.myBooks[i].status;
      }
    }
    return 'null';
  }

  public getBooks() {
    return this.bookService.getBooks(this.testUserId).subscribe({
      next: (res) => {
        this.myBooks = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

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

  ngOnInit(): void {
    this.getBooks();
  }
}
