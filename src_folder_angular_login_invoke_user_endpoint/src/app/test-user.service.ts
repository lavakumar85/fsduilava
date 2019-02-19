import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Users} from "./Users";

//import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class TestUserService {
 
  token: string;
  baseUrl: string;
  baseUrl1: string;
  TOKEN_KEY: string = 'AuthToken';
  USER_EMAIL: string = 'Email';
  USER_ID: string = 'UserId';
  constructor(private http: HttpClient) {
    this.token = sessionStorage.getItem(this.TOKEN_KEY);
    this.baseUrl = "http://localhost:8080/users/";
    //this.baseUrl1 = "http://localhost:8084/users/email";
  }
/*
  getBaseUrlById(id: number): string {
    return this.baseUrl + "/" + id;
  }
  getBaseUrlByEmail(username: string): string {
    return this.baseUrl1 + "/" + username;
  }

  getJsonContentTypeHeader(): RequestOptions {
    this.token = sessionStorage.getItem(this.TOKEN_KEY);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token);
    return new RequestOptions({ headers: headers });
  }

  getJsonContentTypeHeader1(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }
  addUser(user: Users): Observable<Users> {
    return this.http.post(this.baseUrl, JSON.stringify(user), this.getJsonContentTypeHeader1()).pipe(
      map(data => data.json())
    );
  }
  getUserByEmail(username: string): Observable<any> {
    this.token = sessionStorage.getItem(this.TOKEN_KEY);
    const theaders = new Headers({'Authorization': 'Bearer ' + this.token});
    const options = new RequestOptions({headers: theaders});
    return this.http.get(this.getBaseUrlByEmail(username), { headers: theaders }).pipe(
      map(data => data.json())
    );
  }
*/

getAllUsers():Promise<any> { 
  
  this.token = sessionStorage.getItem(this.TOKEN_KEY);
  //const theaders = new HttpHeaders({'Authorization': 'Bearer ' + this.token});
  let theaders: HttpHeaders = new HttpHeaders({'Authorization': 'Bearer ' + this.token});
  //const options = new RequestOptions({headers: theaders});
  /*return this.http.get(this.baseUrl, { headers: theaders }).pipe(
    map(data => data.json())
  );*/

  return this.http.get(this.baseUrl, { headers: theaders }).toPromise();
  //.then(res => {return <Users[]>res;  });
              //.then(res => {console.log(res); });
              
}
}
