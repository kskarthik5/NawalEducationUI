import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewUnitContentService } from '../../services/data-change/new-unit-content.service';

@Component({
  selector: 'app-new-lecture',
  templateUrl: './new-lecture.component.html',
  styleUrls: ['./new-lecture.component.css']
})
export class NewLectureComponent implements OnInit {
  name!:string
  @Input()
  id!:string
  uid!:number
  @Output()
  SubmittedEvent=new EventEmitter<boolean>()
  constructor(private submitter:NewUnitContentService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let value=this.name
    if(!value) this.SubmittedEvent.emit(true)
    this.submitter.submit(this.id,this.uid,value).then((res)=>{
      if(res){
        window.location.reload()
      }
    })
  }
  triggerClose(){
    this.SubmittedEvent.emit(true)
  }
}
