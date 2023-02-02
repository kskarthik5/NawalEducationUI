import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsProviderService {

  constructor() { }
  getSubjects(course_id:String){
    return fetch(`${environment.api_url}/getSubjects`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({course_id}),
    })
      .then(async (response) => await response.json())
      .then((res) => {
        if (res.status != 'ok') {
          alert('Some error occured while fetching courses')
          return []
        }
        else {
          return res.data
        }
      })
  }
}
