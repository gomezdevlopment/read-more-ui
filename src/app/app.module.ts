import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BookCardComponent } from './ui/home-page/book-card/book-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomePageComponent, BookCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
