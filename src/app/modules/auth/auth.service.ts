import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() {}

  login(username: string, password: string): Observable<boolean> {
    // Perform authentication logic here, e.g., checking against a hardcoded account
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      return of(true);
    } else {
      this.isAuthenticated = false;
      return of(false);
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}