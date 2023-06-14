import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, CreateUserComponent, EditUserComponent],
  imports: [CommonModule, FormsModule],
  exports: [HomeComponent, CreateUserComponent, EditUserComponent]
})
export class UsersModule {}