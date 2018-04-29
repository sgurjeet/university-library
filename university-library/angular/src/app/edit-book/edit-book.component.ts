import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from './../book.service';
import { bookInterface } from '../models/book';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Input() selectedBook;
  @Output() bookUpdated = new EventEmitter();

  constructor(private bookService: BookService) {

  }
  public isChecked: boolean;
  ngOnInit() {
    if (this.selectedBook.isAvail == "true")
      this.isChecked = true;
    else this.isChecked = false;
  }


  updateTitle() {
    let title = this.selectedBook.title;
    this.bookService.setTitle(title);
  }
  callfromparent() {
    // console.log("Called from parent");
  }
  updateToParent() {
    console.log(`Output object : ${JSON.stringify(this.selectedBook)}`);
    this.bookUpdated.emit(this.selectedBook);
  }

  formSubmit(form) {
    let book: bookInterface = {
      'name': form.bookName.value,
      'author': form.bookAuthor.value,
      'isAvail': this.isChecked
    }
    this.bookService.updateBook(book).subscribe();
    window.location.reload();
  }

}
