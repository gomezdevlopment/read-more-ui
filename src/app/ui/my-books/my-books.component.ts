import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookInfo } from 'src/app/models/bookInfo';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css'],
})
export class MyBooksComponent implements OnInit {
  constructor(public service: BookService) {}

  public myBooks: Book[] = [];
  public reading: Book[] = [];
  public wantToRead: Book[] = [];
  public read: Book[] = [];
  public bookToDeleteId?: number;

  refresh() {
    this.myBooks = [];
    this.reading = [];
    this.wantToRead = [];
    this.read = [];
    this.getBooks();
  }

  public testUserId = 'testUserId';
  public getBooks() {
    return this.service.getBooks(this.testUserId).subscribe({
      next: (res) => {
        this.myBooks = res;
        console.log(res);

        this.myBooks.forEach((book) => {
          switch (book.status) {
            case 'currently reading':
              this.reading.push(book);
              break;
            case 'want to read':
              this.wantToRead.push(book);
              break;
            case 'already read':
              this.read.push(book);
              break;
          }
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getBooks();
  }

  public deleteBook() {
    if (this.bookToDeleteId != null) {
      this.service.deleteBook(this.bookToDeleteId).subscribe({
        next: (res) => {
          console.log(res);
          this.refresh();
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  public onOpenModal = (mode: String, id: number) => {
    this.bookToDeleteId = id;
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'delete') {
      button.setAttribute('data-bs-target', '#deleteModal');
    }
    container?.appendChild(button);
    button.click();
  };
}
