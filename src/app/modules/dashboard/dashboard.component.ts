import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profile: any;
  constructor(
    private auth: AuthenticationService
  ) {
    this.profile = localStorage.getItem('profile');
    console.log(this.profile);
   }

  ngOnInit() {
  }

}
