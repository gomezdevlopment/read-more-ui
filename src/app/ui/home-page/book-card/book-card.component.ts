import { Component, Input, OnInit } from '@angular/core';
import { BookInfo } from 'src/app/models/bookInfo';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  @Input() bookInfo?: BookInfo;

  constructor() {}

  ngOnInit(): void {}
}
