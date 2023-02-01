import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { SessionStorageService } from '../service/sessionstorage.service';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';


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
  

  constructor(private router: Router, private sessionstorage: SessionStorageService, private loginservice: LoginService, private _snackBar: MatSnackBar, private appcomponent: AppComponent, private http: HttpClient ) { }

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

      var mobilenumber = "91" + this.mobile.value;
      var smsbody = this.userlogin.otp + " OTP is login to Shree Hirjidada Website - RworldComp";     

      const headers = {
        'Authorization': 'Basic dklvaXFqYW13T1J0V3EwWXM3THc6VFBNcnJocXhBZ3huRFlNQmE4eHRCRDdDc0JWOERmNG1wakVjVkJrRg==',       
        'Content-Type': 'application/json',
      };
      const body = {
        Text: smsbody,
        Number: mobilenumber,
        SenderId: 'HIRJID',
        DRNotifyUrl: 'http://www.hirjidada.com/notifyurl',
        DRNotifyHttpMethod: 'POST',
        Tool: 'API'
      }

      this.http.post<any>(`https://restapi.smscountry.com/v0.1/Accounts/vIoiqjamwORtWq0Ys7Lw/SMSes/`, body, { headers }).subscribe({
        next: (data) => {

          console.log("this.smsresponse.Success : " + data.Success);
          if (data.Success == "True") {            
            this.loginservice.getUserLoginByMobile(this.mobile.value).subscribe(result => {
              this.userlogin.mobile = this.mobile.value;
              if (result.mobile == null || result.mobile < 0) {
                this.userlogin.isLoginSuccess = false;
                this.userlogin.loginAttemp = 0;
                this.AddUserLogin();
              }
              else {
                this.userlogin.isLoginSuccess = false;
                this.userlogin.loginAttemp = result.loginAttemp;
                this.userlogin.userLoginID = result.userLoginID;
                this.UpdateUserLogin();
              }
            });

            this._snackBar.open('OTP sent Successfully', '', {
              horizontalPosition: 'center',
              verticalPosition: 'top',
              duration: 4000,
              panelClass: ['my-snack-bar']
            });
          }
          else {
            this._snackBar.open('OTP is not sent. Please try again', '', {
              horizontalPosition: 'center',
              verticalPosition: 'top',
              duration: 6000,
              panelClass: ['my-snack-bar-error']
            });
          }
        },
        error: (err) => {
          this._snackBar.open('OTP is not sent. Please try again', '', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 6000,
            panelClass: ['my-snack-bar-error']
          });
          console.log(err);
        }
      }
      );
    }
  }
  onSubmitotpform() {
    if (this.otpForm.valid) {
      console.log("OTP : " + this.otp.value);

      if (this.userlogin.otp == this.otp.value) {
        sessionStorage.setItem("session-mobile", this.mobile.value);
        this.userlogin.isLoginSuccess = true;
        this.userlogin.loginAttemp += 1;
        this.loginservice.getUserLoginByMobile(this.mobile.value).subscribe(result => {
          this.userlogin.userLoginID = result.userLoginID;
          this.UpdateUserLogin();
        });
        this.appcomponent.isLoggedIn = true;
        this.router.navigate(['family']);
      }
      else {

        this._snackBar.open('OTP is Invalid', '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000,
          panelClass: ['my-snack-bar-error']
        });
        console.log("OTP is Invalid");
      }
    }
  }

  AddUserLogin() {
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

  UpdateUserLogin() {
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
}


