import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { HomeComponent } from './modules/user/home/home.component';
import { CreateUserComponent } from './modules/user/create-user/create-user.component';
import { EditUserComponent } from './modules/user/edit-user/edit-user.component';
import { AuthGuard } from './modules/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'create-user', component: CreateUserComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: EditUserComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }