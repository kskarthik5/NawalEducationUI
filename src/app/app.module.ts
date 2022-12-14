import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftscrollComponent } from './leftscroll/leftscroll.component';
import { AfterclickclassComponent } from './afterclickclass/afterclickclass.component';




@NgModule({
  declarations: [
    AppComponent,
    LeftscrollComponent,
    AfterclickclassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
