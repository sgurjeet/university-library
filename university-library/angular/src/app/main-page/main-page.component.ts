import { Component, OnInit, ViewChild } from '@angular/core';
import { bookInterface } from './../models/book';
import { BookService } from './../book.service';
import { EditBookComponent } from './../edit-book/edit-book.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpperCasePipe } from '@angular/common'
@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  private tableTitle = "Book Title";
  private tableAuthor = "Book Author";
  private tableIsAvail = "Available";

  @ViewChild(EditBookComponent) private editBookComponent: EditBookComponent;

  /* See form in the main.component.html -> it let us to update the input on time */
  private tableInputValue = "Value from TS file";

  private showButton = true;
  private displayEdit = false;
  private userName: string;
  private currBook;
  public bookList;
  public inputValue = "Valueforts"

  constructor(private bookService: BookService, private http: HttpClient) {
  }

  ngOnInit() {
    this.bookService.getBookListFromDB().subscribe((response) => {
      console.log(`Response from server is ${response}`);
      this.bookList = response;
    })
    // this.bookService.updatedTitleObservable.subscribe((title) => {
    //   console.log(`Updated value using observable is : ${title}`);
    // });
    // this.bookList = this.bookService.getBookListFromDB();
  }

  public getUserName() {
    // fetch data using http
    this.userName = "someData";
  }
  public editBook(book) {
    this.currBook = JSON.parse(JSON.stringify(book));
    this.displayEdit = !this.displayEdit;
    //console.log(this.currBook);
    setTimeout(() => this.editBookComponent.callfromparent(), 500);
  }
  public deleteBook(book){
    this.bookService.deleteBook(book).subscribe();
    window.location.reload();
  }
  handleSubmit() {
    alert("Button Clicked");
  }
  getInputValue() {
    return this.tableInputValue;
  }
  updateBook(upBook) {
    //this.bookService.setBooks(upBook);
    this.ngOnInit();
  }

  /* Styles through class function check h3 heading */
  getTitleStyles() {
    return {
      //'background': 'navy',
      'font-size': '50px',
      'margin-right': 'auto',
      'margin-left': 'auto',
      'width': '50%',
      'text-align': 'center'
    }
  }

  public getDatefromDB() {
    this.http.get("url").subscribe(); 
  }
}
