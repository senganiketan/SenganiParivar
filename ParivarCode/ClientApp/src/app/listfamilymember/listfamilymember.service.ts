import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { FamilyMember } from '../model/FamilyMember';

@Injectable({
  providedIn: 'root'
})


export class ListFamilyMemberService {

  
  constructor(private http: HttpClient) {
  }

  public getfamilymember(): Observable<FamilyMember[]> {
 
    return this.http.get<FamilyMember[]>(`${environment.apiUrl}/FamilyMember/GetFamilyMember?id=` + 1);

     //public deleteHero(hero: SuperHero): Observable<SuperHero[]> {
  //  return this.http.delete<SuperHero[]>(
  //    `${environment.apiUrl}/${this.url}/${hero.id}`
  //  );
  //}
  }
  

}



