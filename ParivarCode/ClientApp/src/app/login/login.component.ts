import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { SessionStorageService } from '../service/sessionstorage.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css'],

})

export class LoginComponent {
   
  otphide = true;
  btnmobilehide = false; 
  userlogin: UserLogin = new UserLogin;

  ngOnInit(): void {
    this.mobileForm.reset();
  }
  
  

  constructor(private router: Router, private sessionstorage: SessionStorageService, private loginservice : LoginService) { }

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
      this.mobileForm.controls.mobile.disable();
      this.otphide = false;
      this.btnmobilehide = true;
      
      this.userlogin.otp = this.loginservice.generateOTP();
      //CALL SMS SERVICE
      this.loginservice.getUserLoginByMobile(this.mobile.value).subscribe(result => {
        this.userlogin.mobile = this.mobile.value;
        this.userlogin.isLoginSuccess = false;
        this.userlogin.loginAttemp = 0;
        
        if (result.mobile == null || result.mobile < 0) {      
          this.loginservice.AddUserLogin(this.userlogin)
            .subscribe({
              next: (any) => {
                console.log("inserted records Successfully");
              },
              error: (err) => {
                console.log(err);
              }
            }
            );
        }
        else {
          this.userlogin.loginAttemp = result.loginAttemp;
          this.userlogin.userLoginID = result.userLoginID;
          this.loginservice.updateUserLogin(this.userlogin)
            .subscribe({
              next: (any) => {
                console.log("updated records Successfully");
              },
              error: (err) => {
                console.log(err);
              }
            }
            );
        }
      });

      console.log(this.userlogin.otp);
      console.log(this.mobile.value);
      console.log(this.mobileForm.status);
    }
  }
  onSubmitotpform() {
    if (this.otpForm.valid) {
      console.log("OTP : " + this.otp.value);

      if (this.userlogin.otp == this.otp.value) {
        sessionStorage.setItem("session-mobile", this.mobile.value);
        this.router.navigate(['family']);
      }
      else {
        console.log("OTP is Invalid");
      }
    }
  }
}


