import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewUnitContentService {

  constructor() { }
  submit(id:string,uid:number,title:string){
    return fetch(`${environment.api_url}/newUnitContent`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({id,uid,title}),
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
