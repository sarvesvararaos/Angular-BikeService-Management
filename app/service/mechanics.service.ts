import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Mechanics } from '../Models/mechanics';

@Injectable({
  providedIn: 'root'
})
export class MechanicsService {

  users:Mechanics[];
  private _baseUrl : string = "http://localhost:52869/api/BikeMechanics";
  constructor(private _http: HttpClient) { }
  getProduct(){
    return this._http.get(this._baseUrl).
    pipe(map(this.extractData),catchError(this.handleError<any>('Registration Get Failed')));//all records
  } 

    getSingle(Id:number){
      return this._http.get(this._baseUrl+"/"+Id).
     pipe(map(this.extractData),catchError(this.handleError<any>('Registration Get Failed')));//particular id
    } 

    
// getNew(ven:any){
// return this._http.get<any>(this._baseUrl+"/"+ven.MechaniclId).pipe(tap(ven).
// }
 
  extractData(res: Response)
{
  let body=res;
  console.log(body);
  return body || {};
}
AddProduct(users:any):Observable<any>{
  return this._http.post<any>(this._baseUrl,users).
  pipe(tap(users),catchError(this.handleError<any>('Product Add Failed')));
}
private handleError<T> (operation = 'operation' , result ?: T){
  return (error:any):Observable<T> =>{
    console.error(error);
    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  }
}
}
