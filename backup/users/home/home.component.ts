import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../data/service/user.service';
import { User } from '../../data/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  editUser(userId: number): void {
    this.router.navigate(['/users', userId]);
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(() => {
        this.loadUsers();
      });
    }
  }

  createUser(): void {
    this.router.navigate(['/create-user']);
  }
}