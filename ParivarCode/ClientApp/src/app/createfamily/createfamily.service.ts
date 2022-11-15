import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Family } from './Family';

@Injectable({
  providedIn: 'root'
})


export class CreatefamilyService {

  private url = "Family/GetFamily"; //Controller Name
  constructor(private http: HttpClient) {
  }

  public getfamily(): Observable<Family[]> {
    return this.http.get<Family[]>(`${environment.apiUrl}/${this.url}`);    
  }


  //public getfamily(): Family[] {
  //  let family = new Family();

  //  family.familyid = 1;
  //  family.originalvillage = "Vadodara";
  //  family.familyid = 2;
  //  family.originalvillage = "Surat";

  //  return [family];
  //}
}
