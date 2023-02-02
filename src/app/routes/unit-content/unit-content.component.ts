import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentSubjectDataService } from 'src/app/services/data-access/current-subject-data.service';
import { SubjectDetailsProviderService } from 'src/app/services/data-access/subject-details-provider.service';

@Component({
  selector: 'app-unit-content',
  templateUrl: './unit-content.component.html',
  styleUrls: ['./unit-content.component.css']
})
export class UnitContentComponent implements OnInit {
  public subject: any = {}
  public unit = {}
  public units=[]
  public section: any = {}
  public cid = 0
  public uid = 0
  public id = ""
  public currentVideo = ""
  public selected = false
  public next: any = {}
  public prev: any = {}
  public prevExists=false
  public nextExists=false
  constructor(private route: ActivatedRoute, private router: Router, private subjectDataService: CurrentSubjectDataService, private _detailsProvider: SubjectDetailsProviderService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string
    let uid = this.route.snapshot.paramMap.get('uid') as string
    let cid = this.route.snapshot.paramMap.get('cid') as string
    this.cid = parseInt(cid)
    this.uid = parseInt(uid)
    this.id = id
    this._detailsProvider.getDetails(id).then((res) => {
      let subject = res
      this.subject = subject
      this.units=subject['units']
      let unit = subject['units'][parseInt(uid)]
      let section = unit['contents'][parseInt(cid)]
      let url = section['video_url']
      this.currentVideo = url.substring(url.indexOf('watch?') + 8)
      this.unit = unit
      this.section = section
      this.selected = true
      this.next = unit['contents'][parseInt(cid) + 1]
      this.prev = unit['contents'][parseInt(cid) - 1]
      this.prevExists=(parseInt(cid) - 1>=0)
      this.nextExists=(parseInt(cid) + 1<unit['contents'].length)
    })
  }
  onSelect(uid:number,cid:number){
    window.location.href=`/subject/${this.id}/${uid}/${cid}`

  }
  ifUnitActive(i:number){
    return i==this.uid
  }
  ifSectionActive(i:number,j:number){
    return j==this.cid && i==this.uid
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
}
