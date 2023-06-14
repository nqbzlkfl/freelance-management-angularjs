import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../data/model/user.model';
import { UserService } from '../../../data/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = {
    name: '',
    username: '',
    email: '',
    phone_number: '',
    skill_set: '',
    hobby: ''
  };

  skillSetInput = '';
  hobbyInput = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(userId).subscribe(
      user => {
        this.user = user;
        // this.skillSetInput = user.skill_set.join(',');
        // this.hobbyInput = user.hobby.join(',');
      },
      error => console.log(error)
    );
  }

  updateUser() {
    // Convert skill_set and hobby inputs to arrays
    // this.user.skill_set = this.skillSetInput.split(',').map(skill => skill.trim());
    // this.user.hobby = this.hobbyInput.split(',').map(hobby => hobby.trim());

    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.updateUser(userId, this.user).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}