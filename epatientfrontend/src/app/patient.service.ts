import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Patient } from './patient';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:5000/api/patient';
  constructor(private http: HttpClient) { }


  /**
   * Do a posting Patient
   * @param patient 
   */
  createPatient(patient: Patient): Observable<Message> {
    return this.http.post<Message>(`${this.baseUrl}` + `/create`, patient)
                .pipe(
                  retry(3),
                  catchError(this.handleError)
                );
}



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
