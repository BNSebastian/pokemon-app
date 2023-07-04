import { catchError, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../_environments/environment';
import { Pokemon, PokemonCreate } from '../_models/pokemon';

const API_LINK = environment.pokemonUrl;
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${API_LINK}/${id}`);
  }

  getAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(API_LINK);
  }

  create(
    ownerId: number,
    catId: number,
    owner: PokemonCreate
  ): Observable<any> {
    const url = `${API_LINK}?ownerId=${ownerId}&catId=${catId}`;
    return this.http.post(url, owner).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  update(entity: Pokemon): Observable<Pokemon> {
    const url = `${API_LINK}/${entity.id}`;
    return this.http.put<Pokemon>(url, entity).pipe(
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
