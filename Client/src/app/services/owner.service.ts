import { catchError, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { Owner, OwnerCreate } from '../models/owner';

const API_LINK = environment.ownerUrl;

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Owner> {
    return this.http.get<Owner>(`${API_LINK}/${id}`);
  }

  getAll(): Observable<Owner[]> {
    return this.http.get<Owner[]>(API_LINK);
  }

  create(countryId: number, owner: OwnerCreate): Observable<any> {
    const url = `${API_LINK}?countryId=${countryId}`;
    return this.http.post(url, owner).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  update(entity: Owner): Observable<Owner> {
    const url = `${API_LINK}/${entity.id}`;
    return this.http.put<Owner>(url, entity).pipe(
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
