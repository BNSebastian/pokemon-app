import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../../../models/pokemon';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  public data!: Pokemon;
  public dataArray!: Pokemon[];
  public columnsToDisplay: string[] = [
    'id',
    'name',
    'birthDate',
    'edit',
    'delete',
  ];

  constructor(private service: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe((apiData: Pokemon[]) => {
      this.dataArray = apiData;
    });
  }

  editData(id: number) {
    this.router.navigate(['/pokemon', id]);
  }

  deleteData(id: number) {
    this.service.deleteById(id).subscribe(
      (response) => {
        console.log('API response:', response);
        console.log('Response body:', response);
      },
      (error) => {
        console.log('API error:', error);
        console.log('An error occurred');
      }
    );
    setTimeout(() => {
      this.router.navigate(['/pokemon'], { skipLocationChange: true });
    }, 300);
  }
}
