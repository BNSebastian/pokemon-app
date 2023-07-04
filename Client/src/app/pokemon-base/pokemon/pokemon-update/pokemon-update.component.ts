import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from '../../../models/pokemon';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-update',
  templateUrl: './pokemon-update.component.html',
  styleUrls: ['./pokemon-update.component.css'],
})
export class PokemonUpdateComponent {
  form!: FormGroup;

  id?: number;
  name?: string;
  birthDate?: string;

  constructor(
    private service: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      name: new FormControl(''),
      birthDate: new FormControl(''),
    });

    this.loadData();
  }

  loadData() {
    // retrieve the ID from the 'id' parameter
    var idParam = this.activatedRoute.snapshot.paramMap.get('id');
    var id = idParam ? +idParam : 0;

    // fetch the city from the server
    this.service.getById(id).subscribe((apiData) => {
      this.id = apiData.id;
      this.name = apiData.name;
      this.birthDate = apiData.birthDate;
      this.form.patchValue(apiData);
    });
  }

  onSubmit() {
    const entry: Pokemon = {
      id: +this.form.controls['id'].value,
      name: this.form.controls['name'].value,
      birthDate: this.form.controls['birthDate'].value,
    };

    this.service.update(entry).subscribe(
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
