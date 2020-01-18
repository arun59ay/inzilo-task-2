import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  loginTab: boolean = true;
  signUpTab: boolean = false;

  registerForm: FormGroup;
  submitted = false;
  submittedLogin = false;


  constructor(private router: Router, private formBuilder: FormBuilder, private service: ServiceService) { }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  onClickLoginButton() {
    this.loginTab = true;
    this.signUpTab = false;
  }
  onClickSignUPButton() {
    this.signUpTab = true;
    this.loginTab = false;
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get fb() { return this.loginForm.controls; }


  errorMessageFlag = false;
  errorMessage: any;
  password: any;

  onSubmitRegister() {
    this.errorMessageFlag = false;
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.errorMessageFlag = true;
      return this.errorMessage = "Form not filled.";
    } else if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.errorMessageFlag = true;
      this.errorMessage = "Password didn't matched."
    } else {
      this.errorMessageFlag = false;
      this.service.setFormData(this.registerForm.value);
      this.signUpTab = false;
      this.loginTab = true;
      localStorage.setItem("id", this.registerForm.value.email);
      this.password = this.registerForm.value.password;
      this.registerForm.reset();
      console.log("user details", this.registerForm.value);

      // this.router.navigate(['/dashboard']);
    }
  }

  errorCredientialFlag = false;
  errorCrediential: any;
  onSubmitLogin() {
    if (this.loginForm.invalid) {
      this.submittedLogin = true;
    } else if (localStorage.getItem("id") === this.loginForm.value.email && this.password === this.loginForm.value.password) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorCredientialFlag = true;
    }
  }


}
