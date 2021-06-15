import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })



  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  signIn() {
    this.authService.login(this.form.value)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/']);
        }
        else {
          this.invalidLogin = true;
        }
      })
  }
}
