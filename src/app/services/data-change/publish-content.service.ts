import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublishContentService {
  constructor() { }
  publish(teacher_name:string,teacher_id:string,title:string,video_url:string,description:string,id:string,uid:number,cid:number){
    return fetch(`${environment.api_url}/publishContent`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({teacher_name,teacher_id,title,video_url,description,id,uid,cid}),
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
