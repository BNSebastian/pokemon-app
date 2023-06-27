import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

const POKEMON_API = 'https://localhost:7046/api/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${POKEMON_API}/1`);
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(POKEMON_API);
  }
}
