import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../data/service/user.service';
import { User } from '../../data/model/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  newUser: User = {
    name: '',
    username: '',
    email: '',
    phone_number: '',
    skill_set: '',
    hobby: ''
  };

  constructor(private router: Router, private userService: UserService) {}

  createUser(): void {
    // Convert skill_set and hobby arrays to comma-separated strings
    this.newUser.skill_set = this.newUser.skill_set.join(',');
    this.newUser.hobby = this.newUser.hobby.join(',');

    this.userService.createUser(this.newUser).subscribe(() => {
      // Redirect to home page after successful creation
      this.router.navigate(['/']);
    });
  }
}