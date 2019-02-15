import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsloginService {

  isLoginedUser = localStorage.getItem('token');
  constructor() { }

  isLogined() {
    return this.isLoginedUser
  }

  logout() {
    localStorage.removeItem('token')
    return true
  }
}
