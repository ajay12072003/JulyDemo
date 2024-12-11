import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WebApiTab{
  Id:number;
  Name:string;
  Age:number;
  Mark:number;
}
const endpoint = 'http://localhost:54431/api/API/';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  addWebApiTab(student:any): Observable<any>{
    return this.http.post(endpoint+'postwebapitab',student);
  }
  getAllWebApiTabs(): Observable<any>{
    return this.http.get<WebApiTab>(endpoint+'getwebapitabs');
  }
  deleteWebApiTab(id:number): Observable<any> {
    return this.http.delete<WebApiTab>(endpoint+'deletewebapitab/'+id);
  }
  getWebApiTabs( id: number): Observable<any>{
    return this.http.get<WebApiTab>(endpoint+'getwebapitab/'+id);
  }
  updateWebApiTab(id:number, product: WebApiTab): Observable<any> {
    return this.http.put<WebApiTab>(endpoint+'putwebapitab/'+id, product);
  }
}
