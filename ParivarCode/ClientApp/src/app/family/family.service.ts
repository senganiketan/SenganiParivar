import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Family } from '../model/Family';
import { OriginalVillage } from '../model/OriginalVillage';

@Injectable({
  providedIn: 'root'
})


export class FamilyService {

 
  
  constructor(private http: HttpClient) {
  }

  public getfamily(): Observable<Family[]> {
    return this.http.get<Family[]>(`${environment.apiUrl}/Family/GetFamily`);    
  }
  public getfamilyByFamilyID(familyid: number): Observable<Family> {       
    return this.http.get<Family>(`${environment.apiUrl}/Family/GetFamilyByID/` + familyid);
  }
  public getfamilyByMobile(mobilenumber: number): Observable<Family[]> {
    return this.http.get<Family[]>(`${environment.apiUrl}/Family/GetFamilyByMobile/` + mobilenumber);
  }
  public createfamily(family: Family) {       
    return this.http.post(`${environment.apiUrl}/Family/AddFamily`, family);
  }
  public getOriginalVillage() {
    return this.http.get<OriginalVillage[]>(`${environment.apiUrl}/OriginalVillage/GetOriginalVillages`);
  }


  public updatefamily(family: Family): Observable<Family> {
    var result = this.http.put<Family>(`${environment.apiUrl}/Family/UpdateFamily`, family);
    return result;
  }


  public deletefamily(familyid: number): Observable<any> {
    var result = this.http.delete<any>(`${environment.apiUrl}/Family/DeleteFamily/?id=` + familyid);    
    return result;
  }
  
}
