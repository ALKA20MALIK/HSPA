import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService, private alertService: NotificationService,
    private router: Router) { }

  ngOnInit() {
  }
  onLogin(loginForm : NgForm){
    let token  = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.userName);
      this.alertService.success('User is logged in successfully');
      this.router.navigate(['/']);
    }
    else{
      this.alertService.error('User is not logged in');
    }
  }
  onLogout(){
    localStorage.removeItem('token');
  }

}
