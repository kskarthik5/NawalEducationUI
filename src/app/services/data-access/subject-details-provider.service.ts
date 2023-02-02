import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectDetailsProviderService {

  constructor() { }
  getDetails(nano_id:string){
    return fetch(`${environment.api_url}/getSubjectDetails`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({nano_id}),
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
