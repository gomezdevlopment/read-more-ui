import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-my-book-card',
  templateUrl: './my-book-card.component.html',
  styleUrls: ['./my-book-card.component.css'],
})
export class MyBookCardComponent implements OnInit {
  @Input() book?: Book;
  constructor() {}

  ngOnInit(): void {}
}
