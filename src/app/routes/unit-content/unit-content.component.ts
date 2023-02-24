import { Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { ContentSubmitterComponent } from 'src/app/components/content-submitter/content-submitter.component';
import { NewLectureComponent } from 'src/app/components/new-lecture/new-lecture.component';
import { NewUnitComponent } from 'src/app/components/new-unit/new-unit.component';
import { VideoPlayerComponent } from 'src/app/components/video-player/video-player.component';
import { SubjectDetailsProviderService } from 'src/app/services/data-access/subject-details-provider.service';
import { AuthStateService } from 'src/app/services/states/auth-state.service';
import { ContentSource } from 'src/app/types/content-source';
import { LocalData } from 'src/app/types/local-data';
import { Teacher } from 'src/app/types/teacher';

@Component({
  selector: 'app-unit-content',
  templateUrl: './unit-content.component.html',
  styleUrls: ['./unit-content.component.css']
})
export class UnitContentComponent implements OnInit,OnDestroy {
  @ViewChild("videoContainer", { read: ViewContainerRef }) videoContainerRef!: ViewContainerRef;
  videoComponentRef!: ComponentRef<VideoPlayerComponent>
  @ViewChild("addContentPopup",{read: ViewContainerRef}) popupContainerRef!: ViewContainerRef;
  popupComponentRef!:ComponentRef<ContentSubmitterComponent>
  @ViewChild("addLecturePopup",{read: ViewContainerRef}) newLectureContainerRef!: ViewContainerRef;
  newLectureComponentRef!:ComponentRef<NewLectureComponent>
  @ViewChild("addUnitPopup",{read: ViewContainerRef}) newUnitContainerRef!: ViewContainerRef;
  newUnitComponentRef!:ComponentRef<NewUnitComponent>
  public subject: any = {}
  public unit:any = {}
  public units = []
  public showSideBar=true
  public section!: any
  public cid = 0
  public sid = -1
  public uid = 0
  public id = ""
  public selected = false
  public next: any = {}
  public prev: any = {}
  public prevExists = false
  public nextExists = false
  public isAdmin=false
  public isTeacher = false
  public teacherData!:Teacher
  public authStateSub!:Subscription
  public showAddLectureButton = true
  public showAddUnitButton = true
  constructor(private authState:AuthStateService,
              private route: ActivatedRoute, private router: Router, 
              private _detailsProvider: SubjectDetailsProviderService) { }

  ngOnInit() {
    this.authStateSub=this.authState.user$.subscribe((data:LocalData)=>{
      console.log(data)
      if(data.role == 'teacher'){
        this.isAdmin=true
        this.isTeacher = true
        this.teacherData = data.data
      }
    })
    let id = this.route.snapshot.paramMap.get('id') as string
    let uid = this.route.snapshot.paramMap.get('uid') as string
    let cid = this.route.snapshot.paramMap.get('cid') as string
    this.cid = parseInt(cid)
    this.uid = parseInt(uid)
    this.id = id
    this._detailsProvider.getDetails(id).then((res) => {
      let subject = res
      this.subject = subject
      this.units = subject['units']
      console.log(subject['units'])
      let unit = subject['units'][parseInt(uid)]
      let section = unit['contents'][parseInt(cid)]
      this.unit = unit
      this.section = section
      this.selected = true
      this.next = unit['contents'][parseInt(cid) + 1]
      this.prev = unit['contents'][parseInt(cid) - 1]
      this.prevExists = (parseInt(cid) - 1 >= 0)
      this.nextExists = (parseInt(cid) + 1 < unit['contents'].length)
    })
  }
  ngOnDestroy(){
    this.authStateSub.unsubscribe()
  }
  toggleSideBar(){
    this.showSideBar=!this.showSideBar
  }
  onSelect(uid: number, cid: number) {
    window.location.href = `/subject/${this.id}/${uid}/${cid}`

  }
  ifUnitActive(i: number) {
    return i == this.uid
  }
  ifSectionActive(i: number, j: number) {
    return j == this.cid && i == this.uid
  }
  ifSourceActive(i:number){
    return i==this.sid
  }
  onClick(ch: number) {
    switch (ch) {
      case 1:
        if (Object.keys(this.next).length == 0) break
        window.location.href = `/subject/${this.id}/${this.uid}/${this.cid + 1}`
        break
      case -1:
        if (Object.keys(this.prev).length == 0) return
        window.location.href = `/subject/${this.id}/${this.uid}/${this.cid - 1}`
    }
  }
  onAddUnit(){
    this.showAddUnitButton=false
    this.newUnitContainerRef.clear()
    this.newUnitComponentRef=this.newUnitContainerRef.createComponent(NewUnitComponent)
    this.newUnitComponentRef.instance.id=this.id
    this.newUnitComponentRef.instance.SubmittedEvent.pipe(
      take(1)
    ).subscribe(e=>{
      this.newUnitContainerRef.clear()
      this.showAddUnitButton=true
    })
  }
  onAddContent(){
    this.popupContainerRef.clear()
    this.popupComponentRef = this.popupContainerRef.createComponent(ContentSubmitterComponent)
    this.popupComponentRef.instance.id=this.id
    this.popupComponentRef.instance.uid=this.uid
    this.popupComponentRef.instance.cid=this.cid
    this.popupComponentRef.instance.teacherData=this.teacherData
    this.popupComponentRef.instance.closeEvent.pipe(
      take(1)
    ).subscribe(e=>{
      this.popupContainerRef.clear()
    })
  }
  onAddLecture(i:number){
    this.showAddLectureButton=false
    this.newLectureContainerRef.clear()
    this.newLectureComponentRef=this.newLectureContainerRef.createComponent(NewLectureComponent)
    this.newLectureComponentRef.instance.id=this.id
    this.newLectureComponentRef.instance.uid=i
    this.newLectureComponentRef.instance.SubmittedEvent.pipe(
      take(1)
    ).subscribe(e=>{
      this.newLectureContainerRef.clear()
      this.showAddLectureButton=true
    })
  }
  playContent(source:ContentSource,i:number) {
    this.sid=i
    this.videoContainerRef.clear()
    this.videoComponentRef = this.videoContainerRef.createComponent(VideoPlayerComponent)
    this.videoComponentRef.instance.sourceData = source
  }
}
