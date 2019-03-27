import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Book } from '../../models';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  selectedBook: Book;
  sub: Subscription;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    console.log('ng on init');
    this.sub = this.bookService.getBooks().subscribe(books => {
      console.log(books);

      this.books = books;
    });
  }
  ngOnDestroy(): void {
    console.log('ng on destroy');

    this.sub.unsubscribe();
  }

  onSelect(book: Book) {
    console.log('selecting book', book);

    // this.selectedBook = book;
    //                  (         expression      ) (if true) (if false)
    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(book: Book) {
    console.log('creating book', book);
    this.bookService.createBook(book).subscribe(createdBook => {
      console.log(createdBook);

      this.books.push(createdBook);
    });
    // this.books.push(book);
  }

  onDelete(event: Event, book: Book) {
    event.stopPropagation();

    this.bookService.removeBook(book.id).subscribe(removedBook => {
      console.log('deleting book', removedBook);

      this.books = this.books.filter(b => b.id !== removedBook.id);
    });
  }
}
