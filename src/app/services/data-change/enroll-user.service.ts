import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollUserService {

  constructor() { }
  enrollUser(email:string,subject_id:string){
    return fetch(`${environment.api_url}/enrollUser`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email,nano_id:subject_id}),
    })
      .then(async (response) => await response.json())
      .then((res) => {
        if (res.status != 'ok') {
          alert('Some error occured while fetching courses')
          return false
        }
        else {
          return true
        }
      })
  }
  unenrollUser(email:string,subject_id:string){
    return fetch(`${environment.api_url}/unenrollUser`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email,nano_id:subject_id}),
    })
      .then(async (response) => await response.json())
      .then((res) => {
        if (res.status != 'ok') {
          alert('Some error occured while fetching courses')
          return false
        }
        else {
          return true
        }
      })
  }
}
