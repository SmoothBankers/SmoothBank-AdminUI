import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  invalidRegistration: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@smoothstack.com$')]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPass: new FormControl('', Validators.required),
  })

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPass() {
    return this.form.get('confirmPass');
  }

  signIn() {
    this.userService.register(this.form.value)
      .subscribe(result => {
        if (result) {
          this.router.navigate(['/']);
        }
        else {
          this.invalidRegistration = true;
        }
      })
  }

}
