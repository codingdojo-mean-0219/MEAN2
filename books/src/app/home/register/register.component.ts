import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';
import { Router } from '@angular/router';
import { User } from 'src/app/models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new User();
  registrationErrors: string[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.auth.register(user).subscribe(
      newUser => {
        console.log(newUser);
        this.router.navigateByUrl('books');
      },
      error => {
        console.log(error);

        this.handleErrors(error.error);
      }
    );
  }

  private handleErrors(errors: string | string[]): void {
    this.registrationErrors = Array.isArray(errors) ? errors : [errors];
  }
}
