import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EnrolledSubjectDataService } from 'src/app/services/data-access/enrolled-subject-data.service';
import { AuthStateService } from 'src/app/services/states/auth-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  user :any= {}
  loggedIn = false
  slider: any
  defaultTransform: any
  enrolled=[]
  authStateSub:Subscription

  constructor(private authState: AuthStateService,private enrolledData:EnrolledSubjectDataService) {
    this.authStateSub=this.authState.user$.subscribe((data: any) => {
      console.log(data)
      if (data.status) {
        this.loggedIn = true
        this.user = data['data']
        if(data.role=='teacher') window.location.href="/courses"
        this.enrolledData.getData(data['data']['enrolled']).then(res=>{
          this.enrolled=res
        })

      }
      else{
        window.location.href="/about"
      }
    })
  }
  onSelect(subject:any){
    window.location.href=`/subject/${subject['nano_id']}/${0}/${0}`
  }
  onUnitSelect(sid:number,uid:number){
    window.location.href=`/subject/${this.enrolled[sid]['nano_id']}/${uid}/${0}`
  }
  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform = 0
  }
  ngOnDestroy(): void {
    this.authStateSub.unsubscribe()
  }

}
