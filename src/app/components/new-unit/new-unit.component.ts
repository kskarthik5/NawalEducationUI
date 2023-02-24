import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewUnitService } from 'src/app/services/data-change/new-unit.service';

@Component({
  selector: 'app-new-unit',
  templateUrl: './new-unit.component.html',
  styleUrls: ['./new-unit.component.css']
})
export class NewUnitComponent implements OnInit {
  title!:string
  @Input()
  id!:string
  @Output()
  SubmittedEvent=new EventEmitter<boolean>()
  constructor(private submitter:NewUnitService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let value=this.title
    if(!value) this.SubmittedEvent.emit(true)
    this.submitter.submit(this.id,value).then((res)=>{
      if(res){
        window.location.reload()
      }
    })
  }
  triggerClose(){
    this.SubmittedEvent.emit(true)
  }
}
