import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesProviderService } from 'src/app/services/data-access/coursesprovider.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourseListComponent implements OnInit {
  public courses=[]
  constructor(private _coursesprovider:CoursesProviderService,private router:Router) { }

  ngOnInit(): void {
    this._coursesprovider.getCourses().then(res=>this.courses=res)
  }
  onSelect(course:any):void{
    this.router.navigate(['/course',course['nano_id']])
  }
}
