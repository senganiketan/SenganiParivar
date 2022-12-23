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

  public getfamilymembers(FamilyID?: number): Observable<FamilyMember[]> {   
    return this.http.get<FamilyMember[]>(`${environment.apiUrl}/FamilyMember/GetFamilyMember?Id=` + FamilyID);
  }

  public getfamilyMemberByMemberID(familymemberid: number): Observable<FamilyMember> {       
    return this.http.get<FamilyMember>(`${environment.apiUrl}/FamilyMember/GetFamilyMemberByMemberID/` + familymemberid);
  }

  //CREATE
  public createfamilyMember(familymember: FamilyMember): Observable<FamilyMember[]> {
    debugger;
    var result = this.http.post<FamilyMember[]>(`${environment.apiUrl}/FamilyMember/AddFamilyMember`, familymember);  
    return result;
  }

  public getrelation(): Observable<Relation[]> {
    return this.http.get<Relation[]>(`${environment.apiUrl}/Relation/GetRelation?UseTypeID=1`);
  }

  //UPDATE
  public updatefamilyMember(familymember: FamilyMember): Observable<FamilyMember> {  
    var result = this.http.put<FamilyMember>(`${environment.apiUrl}/FamilyMember/UpdateFamilyMember`, familymember);
    return result;
  }

  //DELETE
  public deletefamilyMember(familyid?: number): Observable<any> {
    var result = this.http.delete<any>(`${environment.apiUrl}/FamilyMember/DeleteFamilyMember/?id=` + familyid);    
    return result;
  }
 
}
