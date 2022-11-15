import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Family } from './Family';

@Injectable({
  providedIn: 'root'
})


export class CreatefamilyService {

  private url = "Family"; //Controller Name
  
  constructor(private http: HttpClient) {
  }

  public getfamily(): Observable<Family[]> {
    return this.http.get<Family[]>(`${environment.apiUrl}/${this.url}/GetFamily`);    
  }
  //public createfamily(): Observable<Family[]> {
  //  return this.http.get<Family[]>(`${environment.apiUrl}/${this.url}/GetFamily`);
  //}

}
