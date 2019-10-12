import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cake } from './cake';

const apiUrl = 'http://localhost:4000/api/v1/cakes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(readonly http: HttpClient) {}

  getCakes(): Observable<Cake[]> {
    return this.http.get<Cake[]>(apiUrl, httpOptions);
  }

  getCake(id): Observable<Cake[]> {
    return this.http.get<Cake[]>(`${apiUrl}/${id}`, httpOptions);
  }

  addCakes(data): Observable<Cake> {
    return this.http.post<Cake>(data, httpOptions);
  }

  updateCake(id, data): Observable<any> {
    return this.http.put(`${apiUrl}/${id}`, data, httpOptions);
  }

  deleteCake(id): Observable<Cake> {
    return this.http.delete<Cake>(`${apiUrl}/${id}`, httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
