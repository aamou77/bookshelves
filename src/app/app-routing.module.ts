import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from './auth/sing-in/sing-in.component';
import { SingUpComponent } from './auth/sing-up/sing-up.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path:'auth/signup',component:SingUpComponent},
  {path:'auth/signin',component:SingInComponent},
  {path:'books', canActivate:[AuthGuardService], component:BookListComponent},
  {path:'books/new',canActivate:[AuthGuardService], component: BookFormComponent},
  {path:'books/view/:id',canActivate:[AuthGuardService], component:SingleBookComponent},
  {path:'', redirectTo: 'books',pathMatch:'full'},
  {path:'**',redirectTo: 'books'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
