import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-my-book-details',
  templateUrl: './my-book-details.component.html',
  styleUrls: ['./my-book-details.component.css'],
})
export class MyBookDetailsComponent implements OnInit {
  constructor(
    public service: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  bookId?: number;
  book?: Book;

  getBook(id: number) {
    if (id != null) {
      this.service.getBookById(id).subscribe({
        next: (res) => {
          this.book = res;
          this.selectedValue = this.book.rating;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  updateRating() {
    if (this.book != null) {
      this.book.rating = this.selectedValue;
      this.service.updateBook(this.book).subscribe({
        next: (res) => {
          console.log('success' + res);
        },
        error: (err) => {
          console.log('error');
        },
      });
    }
  }

  ngOnInit(): void {
    this.bookId = Number(this.activatedRoute.snapshot.paramMap.get('bookId'));
    this.getBook(this.bookId);
  }

  /**Star Rating*/
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number = this.book?.rating ?? 0;

  countStar(star: number) {
    this.selectedValue = star;
    this.updateRating();
  }

  addClass(star: number) {
    let ab = '';
    for (let i = 0; i < star; i++) {
      ab = 'starId' + i;
      document.getElementById(ab)?.classList.add('selected');
    }

    for (let i = star; i < 5; i++) {
      ab = 'starId' + i;
      document.getElementById(ab)?.classList.remove('selected');
    }
  }
  removeClass(star: number) {
    let ab = '';
    for (let i = 0; i < this.selectedValue; i++) {
      ab = 'starId' + i;
      document.getElementById(ab)?.classList.add('selected');
    }
    for (let i = star - 1; i >= this.selectedValue; i--) {
      ab = 'starId' + i;
      document.getElementById(ab)?.classList.remove('selected');
    }
  }
}
