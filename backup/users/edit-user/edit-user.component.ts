import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../data/service/user.service';
import { User } from '../../data/model/user.model';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadUser(userId);
  }

  loadUser(userId: number): void {
    this.userService.getUser(userId).subscribe(user => {
      this.user = user;
      // Convert comma-separated strings to skill_set and hobby arrays
      this.user.skill_set = this.user.skill_set.split(',');
      this.user.hobby = this.user.hobby.split(',');
    });
  }

  updateUser(): void {
    // Convert skill_set and hobby arrays to comma-separated strings
    this.user.skill_set = this.user.skill_set.join(',');
    this.user.hobby = this.user.hobby.join(',');

    this.userService.updateUser(this.user.id, this.user).subscribe(() => {
      // Redirect to home page after successful update
      this.router.navigate(['/']);
    });
  }
}