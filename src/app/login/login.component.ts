
/**
 * Component Class: LoginComponent
 * Updated On: 27 July 2022
 * By: Lawrence Chan
 *
 * Added:
 * - libs from @angular/form for form controlling (27 July 2022)
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms' //added on 27 July 2022
import {Router} from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /**
   * Updated: 27 July 2022
   * By: Lawrence Chan
   */
  loginForm !: FormGroup;
  invalidLogin !: Boolean;

  /*model: User = {
    id: 0,
    email: '',
    name: '',
    role: '',
    password: ''
  };
  logins: string[] = [
    "graven.hrops@login",
    "rpietro.acctmgr@login",
    "bdevon.finance@login",
    "kariel.ustmanager@login",
    "mroy.candidate@login",
    "mroscoe.admin@login",
  ];
  email: string = "";*/

  /**
   * Updated: 27 July 2022
   * By: Lawrence Chan
   * User Defined Constructor:
   * Injected: Account Services (27 July 2022)
   * Injected: FormBuilder libs (27 July 2022)
   * @param accountService service for logIn (contains url endpoints & methods)
   * @param router
   * @param formBuilder which builds & manages the form states.
   */
  constructor(public accountService: AccountService,
              private router: Router,
              private formBuilder:FormBuilder) { }

  /**
   * Updated: 27 July 2022
   * By: Lawrence Chan
   * Interface that will be called by this class.
   * Holds the form control.
   * Email validations: input field to be required, input field to be email.
   * Password validation: input field to be required.
   */
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Password: ['', Validators.required]
    })
  }

  /**
   * Updated: 27 July 2022
   * By: Lawrence Chan
   * Using account service for logging in checks (logIn function).
   * Checks the form if input is valid.
   * -> true(check credential of value from loginForm, response true login with token.
   * [Redirect to /profile page]
   * --> false(alert failed)
   */
  signIn(){
    if(this.loginForm.valid){
      this.accountService.login(this.loginForm.value).subscribe({
        next:(response => {
          if(response)
            this.router.navigate(['/dashboard']);
            /* For testing purposes
            console.log(response)
            alert("Login Success")*/
        })
      })
    }else {
      this.invalidLogin = true;
    }
  }

  /*login() {
  // console.log(this.model);
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.model.role = localStorage.getItem('user_role') || '';
        this.model.email = localStorage.getItem('user_email') || '';
        this.model.name = localStorage.getItem('user_name') || '';
        this.router.navigateByUrl('/dashboard');
      }
    })
  }

  setEmail(email: string) {
    this.email = email;
    this.model.email = email;
  }*/

  // logout() {
  //   this.accountService.logout();
  //   this.router.navigateByUrl
  // }
}
