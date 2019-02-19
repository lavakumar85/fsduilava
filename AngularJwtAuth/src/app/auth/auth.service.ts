import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';

const httpOptions = {
  //headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
  //headers: new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://localhost:4200' }) 
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
   // 'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/add';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    
    console.log("Hellloooo"+this.signupUrl);
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
