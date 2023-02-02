import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubjectsProviderService } from 'src/app/services/data-access/subjectsprovider.service';
import { EnrollUserService } from 'src/app/services/data-change/enroll-user.service';
import { AuthStateService } from 'src/app/services/states/auth-state.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit,OnDestroy {
  public subjects=[]
  public userData:any
  public courseName=""
  public authStateSub:Subscription
  constructor(private route:ActivatedRoute,private authState:AuthStateService,private enrollUserService:EnrollUserService,private router:Router,private _subjectsprovider:SubjectsProviderService) { 
    this.authStateSub=this.authState.user$.subscribe((data:any)=>{
      if(data.status) this.userData=data.data
    })
  }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id') as string
    this._subjectsprovider.getSubjects(id)
    .then(res=>{
      this.subjects=res.subjects
      this.courseName=res.name
    })
  }
  ngOnDestroy(): void {
      this.authStateSub.unsubscribe()  
    }
  onSelect(subject:any){
    this.router.navigate([`/subject/${subject['nano_id']}/${0}/${0}`])
  }
  onUnitSelect(sid:number,uid:number){
    this.router.navigate([`/subject/${this.subjects[sid]['nano_id']}/${uid}/${0}`])
  }
  onEnroll(id:number){
    if(!this.userData) {
      window.location.href="/login"
    }
    this.enrollUserService.enrollUser(this.userData['email'],this.subjects[id]['nano_id']).then((res)=>{ window.location.href=this.router.url })
    
  }
  unEnroll(id:number){
    this.enrollUserService.unenrollUser(this.userData['email'],this.subjects[id]['nano_id']).then((res)=>{ window.location.href=this.router.url })
  }
  isEnrolled(id:string){
    if(!this.userData) return false
    return this.userData['enrolled'].includes(id)
  }
}
