import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { FamilyMember } from '../model/FamilyMember'; 
import { Relation } from '../model/Relation';

@Injectable({
  providedIn: 'root'
})


export class FamilyMemberService {

 
  
  constructor(private http: HttpClient) {
  }

  //SELECT

  public getfamilymembers(FamilyID: number): Observable<FamilyMember[]> {   
    return this.http.get<FamilyMember[]>(`${environment.apiUrl}/FamilyMember/GetFamilyMember?Id=` + FamilyID);
  }

  public getfamilyMemberByMemberID(familymemberid: number): Observable<FamilyMember> {       
    return this.http.get<FamilyMember>(`${environment.apiUrl}/FamilyMember/GetFamilyMemberByMemberID/` + familymemberid);
  }

  //CREATE
  public createfamily(familymember: FamilyMember) {       
    return this.http.post(`${environment.apiUrl}/FamilyMember/AddFamilyMember`, familymember);
  }

  public getrelation(): Observable<Relation[]> {
    return this.http.get<Relation[]>(`${environment.apiUrl}/Relation/GetRelation?id=1`);
  }

  //UPDATE
  public updatefamily(familymember: FamilyMember): Observable<FamilyMember> {
    var result = this.http.put<FamilyMember>(`${environment.apiUrl}/FamilyMember/UpdateFamilyMember`, familymember);
    return result;
  }

  //DELETE
  public deletefamily(familyid: number): Observable<any> {
    var result = this.http.delete<any>(`${environment.apiUrl}/FamilyMember/DeleteFamilyMember/?id=` + familyid);    
    return result;
  }
 
}
