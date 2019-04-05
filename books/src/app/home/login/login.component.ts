import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';

import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();
  loginErrors: string[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.auth.login(user).subscribe(
      loggedUser => {
        console.log(loggedUser);

        this.router.navigateByUrl('books');
      },
      error => {
        this.handleErrors(error.error);
      }
    );
  }

  private handleErrors(errors: string | string[]): void {
    this.loginErrors = Array.isArray(errors) ? errors : [errors];
  }
}
