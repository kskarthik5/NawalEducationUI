import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrolledSubjectDataService {

  constructor() { }
  getData(enrolled:Array<string>){
    return fetch(`${environment.api_url}/getEnrolled`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({enrolled}),
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
