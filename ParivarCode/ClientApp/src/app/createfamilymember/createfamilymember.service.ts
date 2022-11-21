import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { FamilyMember } from '../model/FamilyMember';


@Injectable({
  providedIn: 'root'
})


export class CreateFamilyMemberService {

 
  
  constructor(private http: HttpClient) {
  }

  public getfamily(): Observable<FamilyMember[]> {
    return this.http.get<FamilyMember[]>(`${environment.apiUrl}/FamilyMember/GetFamilyMember`);    
  }



  public createfamilymember(familymember: FamilyMember) {       
    return this.http.post(`${environment.apiUrl}/FamilyMember/AddFamilyMember`, familymember);
  }




  //public updateHero(hero: SuperHero): Observable<SuperHero[]> {
  //  return this.http.put<SuperHero[]>(
  //    `${environment.apiUrl}/${this.url}`,
  //    hero
  //  );
  //}

  //public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
  //  return this.http.delete<SuperHero[]>(
  //    `${environment.apiUrl}/${this.url}/${hero.id}`
  //  );
  //}
}
