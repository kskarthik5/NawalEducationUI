import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { LoginMainComponent } from './routes/login-main/login-main.component';
import { SignupComponent } from './routes/signup/signup.component';
import { ContactComponent } from './routes/contact/contact.component';
import { HomeComponent } from './routes/home/home.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './routes/courselist/courselist.component';
import { CourseComponent } from './routes/course/course.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { UnitContentComponent } from './routes/unit-content/unit-content.component';
import { AboutusComponent } from './routes/aboutus/aboutus.component';
import { ContentSubmitterComponent } from './components/content-submitter/content-submitter.component';
import { NewLectureComponent } from './components/new-lecture/new-lecture.component';
import { NewUnitComponent } from './components/new-unit/new-unit.component';
import { NewSubjectComponent } from './components/new-subject/new-subject.component';
import { NewCourseComponent } from './components/new-course/new-course.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    MainHeaderComponent,
    LoginMainComponent,
    SignupComponent,
    ContactComponent,
    HomeComponent,
    CourseListComponent,
    CourseComponent,
    VideoPlayerComponent,
    UnitContentComponent,
    ContentSubmitterComponent,
    NewLectureComponent,
    NewUnitComponent,
    NewSubjectComponent,
    NewCourseComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxYoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
