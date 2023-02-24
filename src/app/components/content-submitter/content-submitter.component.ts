import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PublishContentService } from 'src/app/services/data-change/publish-content.service';
import { Teacher } from 'src/app/types/teacher';

@Component({
  selector: 'app-content-submitter',
  templateUrl: './content-submitter.component.html',
  styleUrls: ['./content-submitter.component.css']
})
export class ContentSubmitterComponent implements OnInit {
  @Input()
  id!:string
  uid!:number
  cid!:number
  teacherData!:Teacher
  @Output()
  closeEvent=new EventEmitter<boolean>()
  constructor(private _publishContentService:PublishContentService) { }

  ngOnInit(): void {

  }
  onSubmit(form:NgForm):void{
    console.log(form.value)
    this._publishContentService.publish(this.teacherData.name,
                                        this.teacherData.nano_id,
                                        form.value['title'],
                                        form.value['video_url'],
                                        form.value['description'],
                                        this.id,
                                        this.uid,
                                        this.cid
                                        )
    .then((res)=>{
      if(res){
        alert("Published Successfully")
        window.location.reload()
      }
    })
  }
  triggerClose(){
    this.closeEvent.emit(true)
  }
}
