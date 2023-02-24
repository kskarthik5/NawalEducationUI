import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { LocalData } from 'src/app/types/local-data';
@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  protected token=localStorage.getItem('id_token')
  protected user_email=localStorage.getItem('email')
  protected role=localStorage.getItem('role')
  user$:Observable<LocalData> = new Observable<LocalData>();
  constructor() { 
    this.user$=new Observable<LocalData>((user)=>{
      if(!(this.token && this.user_email)){ 
        user.next({status:false} as LocalData)
        return }
      fetch(`${environment.api_url}/validateToken`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, body: JSON.stringify({ email:this.user_email, role:this.role,token:this.token })
      })
        .then(async (response) => await response.json())
        .then((res) => {
          if (res.status == 'ok') {
            user.next({status:true,role:this.role,data:res.data} as LocalData)
          }
          else{
            user.next({status:false} as LocalData)
          }
        })
    })
    
  }

}
