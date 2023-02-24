import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewUnitService } from 'src/app/services/data-change/new-unit.service';
import { NewCourseService } from 'src/app/services/data-change/new-course.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  title!:string
  description!:string
  banner_img!:string
  @Output()
  SubmittedEvent=new EventEmitter<boolean>()
  constructor(private submitter:NewCourseService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let title=this.title
    let description=this.description
    let banner_img=this.banner_img
    if(!title || !description || !banner_img) this.SubmittedEvent.emit(true)
    this.submitter.submit(title,description,banner_img).then((res)=>{
      if(res){
        window.location.reload()
      }
    })
  }
  triggerClose(){
    this.SubmittedEvent.emit(true)
  }
}
