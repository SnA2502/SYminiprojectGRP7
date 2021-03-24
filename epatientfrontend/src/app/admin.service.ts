import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Admin } from './admin';
import { Message } from './message';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:5000/api/admin';
  constructor(private http: HttpClient) { }


  /**
   * Do a posting Patient
   * @param doctor 
   */
   createAdmin(admin: Admin): Observable<Message> {
    return this.http.post<Message>(`${this.baseUrl}` + `/create`, admin)
                .pipe(
                  retry(3),
                  catchError(this.handleError)
                );
}
/** 
   getAdmin(admin: Admin): Observable<Message> {
     return this.http.get<Message>(`${this.baseUrl}` + `/all`, admin)
                 .pipe(
                   retry(3),
                   catchError(this.handleError)
                 );
                 }
*/
/*retrieveAllAdmin(admin: Admin): Observable<Message> {
  return this.http.post<Message>(`${this.baseUrl}` + `/all`, admin)
              .pipe(
                retry(3),
                catchError(this.handleError)
              );
}*/


private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

  
}
