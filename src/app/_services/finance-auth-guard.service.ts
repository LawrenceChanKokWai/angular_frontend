
/**
 * This class holds the Auth Guard for UST routes.
 * Created by: Lawrence Chan
 * Created on: 29 July 2022
 */
import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AccountService} from "./account.service";

@Injectable({
  providedIn: 'root'
})
export class FinanceAuthGuard {

  /**
   * User-defined constructor.
   * Injected router for navigation purposes.
   * Injected account service in getting user info from decoded Jwt token.
   * @param router used for navigation
   * @param accountService used for getting information from the decoded jwt token
   */
  constructor(private router: Router, private accountService:AccountService) { }

  /**
   * Checks for current user which is logged in.
   * Checks for current user role ID if equals to finance roleId
   * return true for access, false -> navigate to no access page
   */
  canActivate(){
    let user = this.accountService.currentUser;
    if(user && user.RoleId == 4)
      return true;
    this.router.navigate(['/no-access']);
    return false;
  }
}
