import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookInfo } from 'src/app/models/bookInfo';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input() bookInfo?: BookInfo;
  constructor(public service: BookService) {}
  public book?: Book;

  addBookToUserBooks(status: string) {
    if (this.bookInfo != null) {
      this.book = {
        id: 0,
        bookId: this.bookInfo.id,
        title: this.bookInfo.title,
        author: this.bookInfo.authors.toString(),
        description: this.bookInfo.description,
        startDate: Date.now.toString(),
        finishDate: '',
        status: status,
        rating: 0,
        image: this.bookInfo.smallThumbnail,
        userId: 0,
      };

      this.service.addBook(this.book).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  ngOnInit(): void {}
}
