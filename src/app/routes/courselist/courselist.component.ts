import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Subscribable, Subscription, take } from 'rxjs';
import { NewCourseComponent } from 'src/app/components/new-course/new-course.component';
import { CoursesProviderService } from 'src/app/services/data-access/coursesprovider.service';
import { AuthStateService } from 'src/app/services/states/auth-state.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourseListComponent implements OnInit {
  @ViewChild("addSubjectPopup", { read: ViewContainerRef }) newCourseContainerRef!: ViewContainerRef;
  newCourseComponentRef!: ComponentRef<NewCourseComponent>
  public courses = []
  public isAdmin = false
  public authStateSub!: Subscription
  public showAddCourseButton = false
  constructor(private _coursesprovider: CoursesProviderService,
    private router: Router,
    private authState: AuthStateService
  ) {

  }

  ngOnInit(): void {
    this.authStateSub = this.authState.user$.subscribe((data: any) => {
      if (data.role == 'teacher') {
        this.isAdmin = true
        this.showAddCourseButton = true

      }
    })
    this._coursesprovider.getCourses().then(res => this.courses = res)
  }
  onSelect(course: any): void {
    console.log(course)
    this.router.navigate(['/course', course['nano_id']])
  }
  ngOnDestroy(): void {
    this.authStateSub.unsubscribe()  
  }
  addCourse() {
    this.showAddCourseButton = false
    this.newCourseContainerRef.clear()
    this.newCourseComponentRef = this.newCourseContainerRef.createComponent(NewCourseComponent)
    this.newCourseComponentRef.instance.SubmittedEvent.pipe(
      take(1)
    ).subscribe(e => {
      this.newCourseContainerRef.clear()
      this.showAddCourseButton = true
    })
  }
}

