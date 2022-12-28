
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class LoginService {
    
  constructor() {
  }
  // This is for authenticating user with username password.
  authenticateUser(mobileNumber: string = "Will", otpGenerated: number = 1234): boolean {
    let isValid: boolean = false;
    return isValid;
  }

  generateOTP(mobileNumber: string = ""): number {
    let otp: number = Math.trunc( Math.random() * 10000);
    return otp;
  }

 
}
