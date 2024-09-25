import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  OPERATOR_NAME_STRING: string = "Operator-Name";

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(user: User) {
    let form = {
      "login": user.login,
      "password": user.password
    };


    return this.http.post(
      'http://localhost:8080/api/v1/login', form, {observe: 'response'}).pipe(
      catchError(error => {
        return throwError(() => new Error('Invalid login or password. Try again'));
      })
    );
    /*this.http.post(
      'http://localhost:8080/api/v1/login', form, {observe: 'response'})
      .subscribe(response => {
        let token = response.headers.get("Authorization");
        let operatorName = response.headers.get(this.OPERATOR_NAME_STRING);
        console.log(operatorName)
        if (typeof token === "string") {
          localStorage.setItem(this.TOKEN_STRING, token);
        }

        if (typeof operatorName === "string") {
          localStorage.setItem(this.OPERATOR_NAME_STRING, operatorName);
        }

        this.router.navigate(['/orders']);
      });*/
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public getOperatorNameFormStorage(): string {
    let operatorName = localStorage.getItem(this.OPERATOR_NAME_STRING)
    if (typeof operatorName === "string") {
      return operatorName
    } else {
      //TODO throw error, add error message
      return ""
    }
  }
}
