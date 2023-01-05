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
