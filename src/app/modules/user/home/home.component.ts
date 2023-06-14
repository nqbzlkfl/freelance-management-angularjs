import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../data/model/user.model';
import { UserService } from '../../../data/service/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users.map(user => {
          return {
            ...user,
            joinedDateAt: moment(user.createdAt).format('DD/MM/YYYY')
          };
        });
      },
      error => console.log(error)
    );
  }
  
  navigateToCreateUser() {
    this.router.navigate(['/create-user']);
  }

  editUser(userId: number) {
    this.router.navigate(['/users', userId]);
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
    });
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * 6) + 10;
      color += letters[randomIndex];
    }
    return color;
  }
}