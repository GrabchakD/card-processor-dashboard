import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/user";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('accessDeniedModal', { static: false }) accessDeniedModal!: ElementRef;

  OPERATOR_NAME_STRING: string = "Operator-Name";
  TOKEN_STRING: string = "token";

  user: User = new User();
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  /*public login() {
    this.authService.login(this.user)
  }*/


  public login() {
    this.authService.login(this.user).subscribe({
      next: (response: any) => {
        let token = response.headers.get("Authorization");
        let operatorName = response.headers.get(this.OPERATOR_NAME_STRING);

        if (typeof token === "string") {
          localStorage.setItem(this.TOKEN_STRING, token);
        }

        if (typeof operatorName === "string") {
          localStorage.setItem(this.OPERATOR_NAME_STRING, operatorName);
        }

        this.router.navigate(['/orders']);
      },
      error: (err: any) => {
        this.errorMessage = err.message;
      }
    });
  }
}
