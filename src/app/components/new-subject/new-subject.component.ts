import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewSubjectService } from 'src/app/services/data-change/new-subject.service';

@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.css']
})
export class NewSubjectComponent implements OnInit {

  title!:string
  description!:string
  banner_img!:string
  @Input()
  id!:string
  @Output()
  SubmittedEvent=new EventEmitter<boolean>()
  constructor(private submitter:NewSubjectService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let title=this.title
    let description=this.description
    let banner_img=this.banner_img
    if(!title || !description || !banner_img) this.SubmittedEvent.emit(true)
    this.submitter.submit(this.id,title,description,banner_img).then((res)=>{
      if(res){
        window.location.reload()
      }
    })
  }
  triggerClose(){
    this.SubmittedEvent.emit(true)
  }
}
