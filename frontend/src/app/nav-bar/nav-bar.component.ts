import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInUser!: string;

  constructor(private notifyService: NotificationService) { }

  ngOnInit() {
  }
  loggedIn(){
   this.loggedInUser = localStorage.getItem('token') as string;
   return this.loggedInUser;
  }
  onLogout(){
   localStorage.removeItem('token');
   this.notifyService.success('User is logged out successfully');
  }

}
