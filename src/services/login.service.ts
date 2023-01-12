import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  login(email: string, password: string): void {
    fetch(`${environment.api_url}/getUser`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ email, password })
    })
      .then(async (response) => await response.json())
      .then((res) => {
        if (res.status != 'ok') {
          alert('Invalid email address or password')
          return
        }
        else {
          alert('success')
        }
      })
  }
}
