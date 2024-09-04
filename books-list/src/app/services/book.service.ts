import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private storageKey = 'books';

  getBooks(): Book[] {
    const books = localStorage.getItem(this.storageKey);

    return books ? JSON.parse(books) : [];
  }

  saveBooks(books: Book[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(books));
  }

  addBook(book: Book): void {
    const books = this.getBooks();

    books.push(book);
    this.saveBooks(books);
  }

  updateBook(updatedBook: Book): void {
    const books = this.getBooks().map(book => 
      book.id === updatedBook.id ? updatedBook : book
    );

    this.saveBooks(books);
  }

  deleteBook(bookId: number): void {
    const books = this.getBooks().filter(book => book.id !== bookId);

    this.saveBooks(books);
  }
}
