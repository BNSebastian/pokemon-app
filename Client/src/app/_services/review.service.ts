import { catchError, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../_environments/environment';
import { Review, ReviewCreate } from '../_models/review';

const API_LINK = environment.reviewUrl;
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Review> {
    return this.http.get<Review>(`${API_LINK}/${id}`);
  }

  getAll(): Observable<Review[]> {
    return this.http.get<Review[]>(API_LINK);
  }

  create(
    reviewerId: number,
    pokeId: number,
    owner: ReviewCreate
  ): Observable<any> {
    const url = `${API_LINK}?reviewerId=${reviewerId}&pokeId=${pokeId}`;
    return this.http.post(url, owner).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  update(entity: Review): Observable<Review> {
    const url = `${API_LINK}/${entity.id}`;
    return this.http.put<Review>(url, entity).pipe(
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
