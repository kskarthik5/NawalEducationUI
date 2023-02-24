import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from 'src/app/services/auth/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [RegisterService]
})

export class SignupComponent implements OnInit {
  role: string = 'student'
  constructor(private _registerService: RegisterService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  setRole(role: string) {
    this.role = role
  }
  onSubmit(form: NgForm) {
    if (form.value['password'] != form.value['rpassword'])
      alert('Passwords do not match')
    else if (!Object.values(form.value).includes('')) {
      let data = {user:{ name: form.value['name'], password: form.value['password'], email: form.value['email']}, role: this.role }
      this._registerService.register(data)
    }
  }
}
