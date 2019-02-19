import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { TestUserService } from './test-user.service';
import {Users} from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  allUsers: Users[];
  TOKEN_KEY: string = 'AuthToken';
  USER_EMAIL: string = 'Email';
  USER_ID: string = 'UserId';
  constructor(private aservice:AuthService, private tuService:TestUserService){}

  login()
  {
    this.aservice.attemptAuth('alex123', 'alex123').subscribe(
      (data)=>{console.log("logged in successfully"+ data.result.username);
      window.sessionStorage.removeItem(this.TOKEN_KEY);
      window.sessionStorage.setItem(this.TOKEN_KEY, data.result.token);
      window.sessionStorage.setItem(this.USER_EMAIL, data.result.username);
      console.log('this is saved token' + sessionStorage.getItem(this.TOKEN_KEY));
      console.log('this is saved username' + sessionStorage.getItem(this.USER_EMAIL));
    }
    )
  }

  getUsers()
  {
    this.tuService.getAllUsers().then(
    res=>{console.log(res); this.allUsers = res;}
    );
  }
}
