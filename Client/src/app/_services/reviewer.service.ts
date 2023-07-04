import { catchError, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../_environments/environment';
import { Reviewer, ReviewerCreate } from '../_models/reviewer';

const API_LINK = environment.reviewerUrl;

@Injectable({
  providedIn: 'root',
})
export class ReviewerService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Reviewer> {
    return this.http.get<Reviewer>(`${API_LINK}/${id}`);
  }

  getAll(): Observable<Reviewer[]> {
    return this.http.get<Reviewer[]>(API_LINK);
  }

  create(entity: ReviewerCreate): Observable<ReviewerCreate> {
    return this.http.post<ReviewerCreate>(API_LINK, entity).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  update(entity: Reviewer): Observable<Reviewer> {
    const url = `${API_LINK}/${entity.id}`;
    return this.http.put<Reviewer>(url, entity).pipe(
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
