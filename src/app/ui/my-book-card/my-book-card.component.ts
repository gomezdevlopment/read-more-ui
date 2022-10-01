import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-my-book-card',
  templateUrl: './my-book-card.component.html',
  styleUrls: ['./my-book-card.component.css'],
})
export class MyBookCardComponent implements OnInit {
  @Input() book?: Book;
  @Input() onOpenModal?: (string: string, id: number) => void;
  public bookToDelete?: Book;
  constructor(public service: BookService) {}

  openModal(id?: number) {
    if (this.onOpenModal != null && id != null) {
      this.onOpenModal('delete', id);
    }
  }

  updateStatus(status: string) {
    if (this.book != null) {
      this.book.status = status;
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
    console.log('init');
  }
}
