import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BookCardComponent } from './ui/book-card/book-card.component';
import { FormsModule } from '@angular/forms';
import { MyBooksComponent } from './ui/my-books/my-books.component';
import { MyBookCardComponent } from './ui/my-book-card/my-book-card.component';
import { NavbarComponent } from './ui/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, BookCardComponent, MyBooksComponent, MyBookCardComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
