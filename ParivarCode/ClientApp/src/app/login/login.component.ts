import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css'],

})

export class LoginComponent {

  otphide = true;
  btnmobilehide = false;

  ngOnInit(): void {
  }

  constructor(private router: Router) { }

  mobileForm = new FormGroup({
    mobile: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.required])
  });

  otpForm = new FormGroup({
    otp: new FormControl('', [Validators.minLength(4), Validators.maxLength(4), Validators.required])
  });


  get mobile(): any {
    return this.mobileForm.get('mobile');
  }

  get otp(): any {
    return this.otpForm.get('otp');
  }


  onSubmitmobileForm() {
    if (this.mobileForm.valid) {
      this.otphide = false;
      this.btnmobilehide = true;
      console.log(this.mobile.value);
      console.log(this.mobileForm.status);
    }
  }
  onSubmitotpform() {
    if (this.otpForm.valid) {
      console.log("OTP : " + this.otp.value);
      console.log(this.otpForm.status);
      this.router.navigate(['family-create']);
    }
  }
}


