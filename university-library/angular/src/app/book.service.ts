import { Injectable } from '@angular/core';
import { bookInterface } from './models/book';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {

  private updatedTitleSource = new Subject<string>();
  public updatedTitleObservable = this.updatedTitleSource.asObservable();


  constructor(private http: HttpClient) { }

  public getBookListFromDB() {
    console.log("In getbookslistdfromdb");
    return this.http.get<bookInterface[]>('http://localhost:8000/books');
  }
  public addBook(book){
    console.log("In addBook in BookService");
    return this.http.post('http://localhost:8000/books/addBook',book);
  }

  public updateBook(book:bookInterface){
    return this.http.put(`http://localhost:8000/books/updateBook/${book.name}`,book);
  }

  public deleteBook(book:bookInterface){
    return this.http.delete(`http://localhost:8000/books/deleteBook/${book.name}`);
  }
  public setTitle(title) {
    //console.log(`New Title : ${title}`);
    this.updatedTitleSource.next(title);
  }
}
