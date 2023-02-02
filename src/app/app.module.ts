import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { CarousalMainComponent } from './components/carousal-main/carousal-main.component';
import { ReccomendationMainComponent } from './components/reccomendation-main/reccomendation-main.component';
import { LoginMainComponent } from './routes/login-main/login-main.component';
import { Hero1Component } from './components/hero1/hero1.component';
import { CardsComponent } from './components/cards/cards.component';
import { Blog1Component } from './components/blog1/blog1.component';
import { Blog2Component } from './components/blog2/blog2.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './routes/signup/signup.component';
import { ContactComponent } from './routes/contact/contact.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HomeComponent } from './routes/home/home.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LeftScrollComponent } from './components/left-scroll/left-scroll.component';
import { CourseListComponent } from './routes/courselist/courselist.component';
import { CourseComponent } from './routes/course/course.component';
import { BannerComponent } from './components/banner/banner.component';
import { SubjectDetailComponent } from './routes/subject-detail/subject-detail.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { UnitContentComponent } from './routes/unit-content/unit-content.component';
import { AboutusComponent } from './routes/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    MainHeaderComponent,
    CarousalMainComponent,
    ReccomendationMainComponent,
    LoginMainComponent,
    LeftScrollComponent,
    Hero1Component,
    CardsComponent,
    Blog1Component,
    Blog2Component,
    FooterComponent,
    SignupComponent,
    ContactComponent,
    DropdownComponent,
    HomeComponent,
    DashboardComponent,
    CourseListComponent,
    CourseComponent,
    BannerComponent,
    SubjectDetailComponent,
    VideoPlayerComponent,
    UnitContentComponent, 
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
