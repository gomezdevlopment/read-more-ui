import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { MyBookDetailsComponent } from './ui/my-book-details/my-book-details.component';
import { MyBooksComponent } from './ui/my-books/my-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'myBooks', component: MyBooksComponent },
  { path: 'myBooks/details/:bookId', component: MyBookDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
