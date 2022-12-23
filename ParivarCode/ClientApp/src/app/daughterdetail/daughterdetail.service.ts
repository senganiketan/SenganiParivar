import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { DaughterDetail } from '../model/DaughterDetail'
import { Relation } from '../model/Relation';

@Injectable({
  providedIn: 'root'
})


export class DaughterDetailService {

 
  
  constructor(private http: HttpClient) {
  }

  //SELECT

  public getdaughterdetails(FamilyID?: number): Observable<DaughterDetail[]> {   
    return this.http.get<DaughterDetail[]>(`${environment.apiUrl}/DaughterDetail/GetDaughterDetail?FamilyID=` + FamilyID);
  }

  public getdaughterdetailbydaughterid(daughterdetailid: number): Observable<DaughterDetail> {       
    return this.http.get<DaughterDetail>(`${environment.apiUrl}/DaughterDetail/GetDaughterDetailByID/` + daughterdetailid);
  }

  //CREATE
  public createdaughterdetail(daughterdetail: DaughterDetail): Observable<DaughterDetail[]> {
    debugger;
    var result = this.http.post<DaughterDetail[]>(`${environment.apiUrl}/DaughterDetail/AddDaughterDetail`, daughterdetail);  
    return result;
  }

  public getrelation(): Observable<Relation[]> {
    return this.http.get<Relation[]>(`${environment.apiUrl}/Relation/GetRelation?UseTypeID=2`);
  }

  //UPDATE
  public updatedaughterdetail(daughterdetail: DaughterDetail): Observable<DaughterDetail> {  
    var result = this.http.put<DaughterDetail>(`${environment.apiUrl}/DaughterDetail/UpdateDaughterDetail`, daughterdetail);
    return result;
  }

  //DELETE
  public deletedaughterdetail(daughterdetailid?: number): Observable<any> {
    var result = this.http.delete<any>(`${environment.apiUrl}/DaughterDetail/DeleteDaughterDetail/?DaughterDetailID=` + daughterdetailid);    
    return result;
  }
 
}
