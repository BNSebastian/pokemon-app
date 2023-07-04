import { catchError, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../_environments/environment';
import { Category, CategoryCreate } from '../_models/category';

const API_LINK = environment.categoryUrl;

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Category> {
    return this.http.get<Category>(`${API_LINK}/${id}`);
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(API_LINK);
  }

  create(entity: CategoryCreate): Observable<CategoryCreate> {
    return this.http.post<CategoryCreate>(API_LINK, entity).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  update(entity: Category): Observable<Category> {
    const url = `${API_LINK}/${entity.id}`;
    return this.http.put<Category>(url, entity).pipe(
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
