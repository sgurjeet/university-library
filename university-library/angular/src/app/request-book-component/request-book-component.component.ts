import { Component, OnInit } from '@angular/core';
import { bookInterface } from '../models/book';
import { BookService } from '../book.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-request-book-component',
  templateUrl: './request-book-component.component.html',
  styleUrls: ['./request-book-component.component.css']
})

export class RequestBookComponentComponent implements OnInit {

  isChecked: boolean = true;
  constructor(private bookService: BookService,private router:Router) { }

  ngOnInit() {
  }

  public addBook(form) {
    console.log("In addBook of request-book-component");
    var book: bookInterface = {
      'name': form.bookName.value,
      'author': form.bookAuthor.value,
      'isAvail': this.isChecked
    }
    this.bookService.addBook(book).subscribe();
    this.router.navigateByUrl('/home');
  }

}
