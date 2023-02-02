import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  protected token=localStorage.getItem('id_token')
  protected user_email=localStorage.getItem('email')
  user$:Observable<object> = new Observable<object>();
  constructor() { 
    this.user$=new Observable<object>((user)=>{
      if(!(this.token && this.user_email)){ 
        user.next({status:false})
        return }
      fetch(`${environment.api_url}/validateToken`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, body: JSON.stringify({ email:this.user_email, token:this.token })
      })
        .then(async (response) => await response.json())
        .then((res) => {
          if (res.status == 'ok') {
            user.next({status:true,data:res.data})
          }
          else{
            user.next({status:false})
          }
        })
    })
    
  }

}
