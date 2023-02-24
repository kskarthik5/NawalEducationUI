import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutService } from 'src/app/services/auth/logout.service';
import { AuthStateService } from 'src/app/services/states/auth-state.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  public menu = false
  public notloggedIn = true
  public user:any = {}
  constructor(private authState: AuthStateService,private router:Router, private logoutService: LogoutService) {
  }

  ngOnInit(): void {
    this.authState.user$.subscribe((data: any) => {
      if (data.status) {
        this.notloggedIn = false
        this.user=data
        console.log(data)
      }
    })
  }
  toggleMenu() {
    this.menu = !this.menu
  }
  logout() {
    this.logoutService.logout()
  }
}
