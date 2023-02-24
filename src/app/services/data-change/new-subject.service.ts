import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewSubjectService {

  constructor() { }
  submit(id:string,name:string,description:string,banner_img:string){
    return fetch(`${environment.api_url}/newSubject`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({id,name,description,banner_img}),
    })
      .then(async (response) => await response.json())
      .then((res) => {
        if (res.status != 'ok') {
          // alert('Some error occured while fetching courses')
          return false
        }
        else {
          return true
        }
      })
  }
}
