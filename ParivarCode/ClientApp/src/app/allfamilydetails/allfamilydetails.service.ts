import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { FamilyMember } from '../model/FamilyMember';
import { DaughterDetail } from '../model/DaughterDetail'

@Injectable({
  providedIn: 'root'
})

export class AllFamilyDetailsService {

  constructor(private http: HttpClient) {
  }

  public getAllfamilymembers(): Observable<FamilyMember[]> {
    return this.http.get<FamilyMember[]>(`${environment.apiUrl}/FamilyMember/GetAllFamilyMember`);
  }
  public getAllDaughters(): Observable<DaughterDetail[]> {
    return this.http.get<DaughterDetail[]>(`${environment.apiUrl}/DaughterDetail/GetAllDaughterDetails`);
  }
}
