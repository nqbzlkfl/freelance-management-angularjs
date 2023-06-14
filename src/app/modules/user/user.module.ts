import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SharedModule } from '../../shared/shared.module';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateUserComponent,
    EditUserComponent,
    DeleteConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class UserModule { }
