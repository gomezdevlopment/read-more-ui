import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css'],
})
export class MyBooksComponent implements OnInit {
  constructor(public service: BookService) {}

  public myBooks: Book[] = [];
  public testUserId = 'testUserId';
  public getBooks() {
    return this.service.getBooks(this.testUserId).subscribe({
      next: (res) => {
        this.myBooks = res;
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
