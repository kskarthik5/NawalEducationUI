import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router:Router) {}
  login(email: string, password: string,role :string): boolean {
    fetch(`${environment.api_url}/login`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ email, password, role })
    })
      .then(async (response) => await response.json())
      .then((res) => {
        if (res.status != 'ok') {
          alert('Invalid email address or password')
        }
        else {
          localStorage.setItem('email', email);
          localStorage.setItem('id_token', res.token);
          localStorage.setItem('role', role);
          window.location.href="/"
        }
      })
    return false
  }
}
