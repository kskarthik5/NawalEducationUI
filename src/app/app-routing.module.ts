import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './routes/aboutus/aboutus.component';

import { ContactComponent } from './routes/contact/contact.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginMainComponent } from './routes/login-main/login-main.component';
import { SignupComponent } from './routes/signup/signup.component';
import { CourseListComponent } from './routes/courselist/courselist.component';
import { CourseComponent } from './routes/course/course.component';
import { SubjectDetailComponent } from './routes/subject-detail/subject-detail.component';
import { UnitContentComponent } from './routes/unit-content/unit-content.component';
const routes: Routes = [
  {path: 'login',component: LoginMainComponent},
  {path: '',component: HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: 'about',component: AboutusComponent},
  {path: 'courses',component: CourseListComponent},
  {path: 'course/:id',component: CourseComponent},
  {path:'subject/:id',component: SubjectDetailComponent},
  {path:'subject/:id/:uid/:cid',component: UnitContentComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'contact',component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [LoginMainComponent];