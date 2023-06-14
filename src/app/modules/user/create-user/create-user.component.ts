import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../data/model/user.model';
import { UserService } from '../../../data/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  user: User = {
    name: '',
    username: '',
    email: '',
    phone_number: '',
    skill_set: '',
    hobby: '',
  };

  skillSetInput = '';
  hobbyInput = '';

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  createUser() {
    console.log('vvv user', this.user);
    this.userService.createUser(this.user).subscribe(() => {
      this.user = {
        name: '',
        username: '',
        email: '',
        phone_number: '',
        skill_set: '',
        hobby: ''
      };
      this.skillSetInput = '';
      this.hobbyInput = '';
      this.router.navigate(['/home']);
    });
  }
  
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}