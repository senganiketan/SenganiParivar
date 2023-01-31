import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { UserLogin } from '../model/UserLogin';


@Injectable({
  providedIn: 'root'
})

export class LoginService {   
   
  constructor(private http: HttpClient) {
  }

  public AddUserLogin(userlogin: UserLogin) {
    return this.http.post(`${environment.apiUrl}/UserLogin/AddUserLogin`, userlogin);
  }
  

  public getUserLoginByMobile(mobile: number): Observable<UserLogin> {
    return this.http.get<UserLogin>(`${environment.apiUrl}/UserLogin/GetUserLoginByMobile?Mobile=` + mobile);
  }


  public updateUserLogin(userlogin: UserLogin): Observable<UserLogin> {
    var result = this.http.put<UserLogin>(`${environment.apiUrl}/UserLogin/UpdateUserLogin`, userlogin);
    return result;
  }




  public SendSMS(mobile: number, otp: number): boolean {    

    var mobilenumber = "91" + mobile;
    var smsbody = otp + " OTP is login to Shree Hirjidada Website - RworldComp";
    var APIResult = false;
    
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
   
    var result = this.http.post<any>(`https://restapi.smscountry.com/v0.1/Accounts/vIoiqjamwORtWq0Ys7Lw/SMSes/`, body, { headers }).subscribe(data => {     
      APIResult = (data.Success.toLowerCase() == 'true');
      console.log("Success : " + data.Success);
      console.log("APIResult : " + APIResult);      
    });   
    return APIResult;   
  }

 
  generateOTP(): number {
    var otp;
    
    var randomNumber = Math.random();
    
    if (randomNumber < 0.1) {
      randomNumber = randomNumber * 10;
    }
    otp = Math.trunc(randomNumber * 10000);
    
    return otp;
  }

 
}
