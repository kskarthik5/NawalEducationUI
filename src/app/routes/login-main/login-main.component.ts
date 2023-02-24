import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css'],
  providers:[LoginService]
})
export class LoginMainComponent implements OnInit {
  role: string = 'student'
  constructor(private _loginService:LoginService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  setRole(role: string) {
    this.role = role
  }
  onSubmit(form:NgForm): void {
    this._loginService.login(form.value['email'],form.value['password'],this.role)
  }
}
