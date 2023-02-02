import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from './services/states/auth-state.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nawal';
  constructor(private router: Router, private authState:AuthStateService) {
    // router.navigate(["/home"])
  }
}
