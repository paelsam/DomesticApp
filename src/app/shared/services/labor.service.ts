import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LaboresResponse } from '../interfaces/labores-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LaborService {

  public http = inject(HttpClient);

  private url = environment.baseUrl

  public getLabores(): Observable<LaboresResponse> {
    return this.http.get<LaboresResponse>(`${this.url}/register/trabajador`)
      .pipe(
        map( response => response ),
        catchError((error) => throwError(console.error))
      )
  }



}
