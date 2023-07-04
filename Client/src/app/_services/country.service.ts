import { catchError, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../_environments/environment';
import { Country, CountryCreate } from '../_models/country';

const API_LINK = environment.countryUrl;

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Country> {
    return this.http.get<Country>(`${API_LINK}/${id}`);
  }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(API_LINK);
  }

  create(entity: CountryCreate): Observable<CountryCreate> {
    return this.http.post<CountryCreate>(API_LINK, entity).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  update(entity: Country): Observable<Country> {
    const url = `${API_LINK}/${entity.id}`;
    return this.http.put<Country>(url, entity).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  deleteById(id: number): Observable<void> {
    const url = `${API_LINK}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }
}
