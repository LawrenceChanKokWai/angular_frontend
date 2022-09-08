import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AccountService} from "./account.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router:Router, private accountService:AccountService) { }

  canActivate(){
    if(this.accountService.isLoggedIn())
      return true;
    this.router.navigate(['/']);
    return false;
  }
}
