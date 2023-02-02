import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor() { }
  logout(){
    localStorage.removeItem('id_token')
    localStorage.removeItem('email')
    window.location.href='/'
  }
}
