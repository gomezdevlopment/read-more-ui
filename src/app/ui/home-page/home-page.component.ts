import { Component, OnInit } from '@angular/core';
import { BookInfo } from 'src/app/models/bookInfo';
import { GoogleBooksService } from 'src/app/services/google-books.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  searchResults: BookInfo[] = [];
  input: string = '';

  constructor(public service: GoogleBooksService) {}

  searchBooks(input: string) {
    this.service.getBooks(input).subscribe({
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
