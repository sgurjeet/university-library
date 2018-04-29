import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { BookService } from './book.service';
import { BooksListComponent } from './books-list/books-list.component';
import { RouterModule, Routes } from '@angular/router';
import { RequestBookComponentComponent } from './request-book-component/request-book-component.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CustomUpperCase } from './pipe/custom-uppercase-pipe';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';

// To implement routing facility so that we can route components on basics of URL.
// Array of routes in the whole website.
const routes: Routes = [
  // redirect to home when user types URL as localhost:4200
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'requestBook', component: RequestBookComponentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainPageComponent,
    FooterComponent,
    BooksListComponent,
    RequestBookComponentComponent,
    EditBookComponent,
    CustomUpperCase
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // to add the routes array (defined above @ line 16) at the root level
    RouterModule.forRoot(routes)
  ],
  providers: [BookService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }