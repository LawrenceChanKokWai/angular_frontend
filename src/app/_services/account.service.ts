import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  localUrl = environment.localUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  /**
   * Created On: 27 July 2022
   * By: Lawrence Chan
   * Login Credential POST method.
   * Connecting to the API URL.
   * Save Jwt token to application local storage once credential is checked Ok and valid (true),
   * else return false
   * @param loginObj holds the login Object(Email & Password)
   */
  login(loginObj: any){
    return this.http.post<any>("https://localhost:44352/api/Auth/login", loginObj)
      .pipe(map(response => {
        let result = response;
        if(result && result.token){
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
        // console.log(response) <-for checking purpose only
      }))
  }

  /**
   * Created On: 28 July 2022
   * By: Lawrence Chan
   * Logout Service.
   * Removes Jwt token in the application local storage
   */
  logout(){
    localStorage.removeItem('token');
  }

  /**
   * Created On: 28 July 2022
   * By: Lawrence Chan
   * Used for checking token expiry.
   */
  isLoggedIn(){
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');

    if(!token)
      return false;

    //let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpiry = jwtHelper.isTokenExpired(token);
    return !isExpiry;

    /*For testing purposes
    console.log("Expiration", expirationDate);
    console.log("isExpired", isExpiry);*/
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token)
      return null;
    return new JwtHelperService().decodeToken(token);
  }

  /*login(model: User) {
    var path = 'login';

    // console.log(model);

    if (model.email.includes('candidate')) {
      path = 'candidate';
    }

    return this.http.get(this.localUrl + path + '?email=' + model.email).pipe(
      map((response: any) => {
        // console.log(response[0]);
        const user = response[0];
        if (user) {
          this.setCurrentUser(user);
        }
        // console.log('asd' + this.currentUser$)
      })
    )
  }

  logout() {
    localStorage.removeItem('user_role');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');
    this.currentUserSource.next(null as any);
  }

  setCurrentUser(user: User) {
    // if (user) {
    //   // user.roles = [];
    //   // const roles = this.getDecodedToken(user.token).role;
    //   // Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    // }
    localStorage.setItem('user_role', user.role);
    localStorage.setItem('user_email', user.email);
    localStorage.setItem('user_name', user.name);
    localStorage.setItem('user_id', user.id.toString());
    this.currentUserSource.next(user);
  }

  getDecodedToken(token: any) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  getCurrentUser() {
    return this.currentUser$;
  }*/
}
