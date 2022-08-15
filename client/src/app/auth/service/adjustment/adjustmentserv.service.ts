import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, throwError } from "rxjs";
import { Iadjustment } from "app/interfaces/iadjustment";
@Injectable({
  providedIn: 'root'
})
export class AdjustmentservService {
  host = environment.apiUrl + "/api/adjustments/";
 //params and headers
 headers: HttpHeaders;
 params: HttpParams;
  constructor(private _Http: HttpClient) { 
    this.params = new HttpParams();
    this.headers = new HttpHeaders({
      Accept: "application/json",
    });

  }
  getall() {
    return this._Http.get(`${this.host}`, { headers: this.headers, params: this.params })
  }

  store(data:Iadjustment): Observable<any> {
    return this._Http.post(`${this.host}`, data, { headers: this.headers })
  }
  destroy(id:number):Observable<any>{
    return this._Http.delete(`${this.host}${id}`, {headers:this.headers})

  }
  //update item by id
  update(id:number,data:Iadjustment): Observable<any> {
    return this._Http.put(`${this.host}${id}`, data, { headers: this.headers });
  }
  show(id:number): Observable<any>{
   return this._Http.get(`${this.host}${id}`,{headers:this.headers});
  }
  getAddjuestid(id: number): Observable<any> {
    return this._Http.get(`${this.host}${id}`);
  }
}
