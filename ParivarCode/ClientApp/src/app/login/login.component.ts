import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionStorageService } from '../service/sessionstorage.service';

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

  constructor(private router: Router, private sessionstorage: SessionStorageService) { }

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
      // To DO : We need to validate OTP by calling third party api and redirect below code accordingly.


      // If user OTP is matched with third party then check entered mobile number used in any of the family? If yes then redirect in that family list page other wise shw create family page.

      this.router.navigate(['family']);
      if (this.otp.value = "1111") {
        sessionStorage.setItem("session-mobile", this.mobile.value);
        //if ()
       
       

       // this.router.navigate(['family-create']);
      }
     

    }
  }
}


