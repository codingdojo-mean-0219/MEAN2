import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../../models';
import { NgForm } from '@angular/forms';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  constructor(
    private readonly bookService: BookService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();
    console.log('submitting form', this.book);

    // this.books.push(this.book);

    this.bookService.createBook(this.book).subscribe(book => {
      console.log('new book', book);

      this.router.navigateByUrl('/');
    });
    // this.createBook.emit(this.book);

    // this.book = new Book();

    // form.reset();

    // console.log('this books', this.books);
  }
}
