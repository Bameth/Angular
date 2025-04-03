import { Injectable, signal } from '@angular/core';
import { IAuthService } from '../IAuthService';
import { Observable, of } from 'rxjs';
import { LoginResponse, Role, User } from '../../model/user.model';
import { MOCK_USER } from '../../mock/user.mock';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationMockService implements IAuthService {
  currentUserSignal = signal<User | null>(null);
  constructor() { }
  hasRole(role: Role): boolean {
    return this.isAuthenticated() && this.currentUserSignal()?.role === role
  }
  isClient(): boolean {
    return this.isAuthenticated() && this.currentUserSignal()?.role === 'client'
  }
  isAdmin(): boolean {
    return this.isAuthenticated() && this.currentUserSignal()?.role === 'admin'
  }
  isAuthenticated(): boolean {
    return !!this.currentUserSignal();
  }
  login(username: string, password: string): Observable<LoginResponse> {
    const userConnected = MOCK_USER.find((user: User) => user.login == username && user.password == password)
    if (userConnected) {
      this.currentUserSignal.set(userConnected);
      return of
        (
          {
            message: 'Authentication successful',
            success: true,
            data: userConnected
          }
        );
    }
    else {
      return of
        (
          {
            message: 'ERROR: Authentication failed',
            success: false,
            data: null
          }
        );
    }
  }
  logout(): void {
    this.currentUserSignal.set(null);
  }
}

