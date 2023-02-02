import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentSubjectDataService } from 'src/app/services/data-access/current-subject-data.service';
import { SubjectDetailsProviderService } from 'src/app/services/data-access/subject-details-provider.service';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  public units = []
  public subject = {}
  public subjectName = ""
  public subjectBanner=""
  public id=""
  constructor(private _subjectDataService: CurrentSubjectDataService, private route: ActivatedRoute, private _detailsprovider: SubjectDetailsProviderService, private router: Router) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') as string
    this.id=id
    this._detailsprovider.getDetails(id)
      .then(res => {
        this.units = res['units']
        this.subject = res
        this.subjectName=res.name
        this.subjectBanner=res['banner_img']
      })
  }
  onSelect(uid:number,cid:number){
    this.router.navigate([`/subject/${this.id}/${uid}/${cid}`])

  }


}
