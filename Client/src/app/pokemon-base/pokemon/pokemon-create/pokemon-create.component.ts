import { Owner } from 'src/app/_models/owner';
import { PokemonCreate } from 'src/app/_models/pokemon';
import { OwnerService } from 'src/app/_services/owner.service';
import { PokemonService } from 'src/app/_services/pokemon.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from '../../../_models/category';
import { CategoryService } from '../../../_services/category.service';

@Component({
  selector: 'app-pokemon-create',
  templateUrl: './pokemon-create.component.html',
  styleUrls: ['./pokemon-create.component.css'],
})
export class PokemonCreateComponent {
  // form
  form!: FormGroup;
  public owners!: Owner[];
  public categories!: Category[];
  // members
  name?: string;

  constructor(
    private service: PokemonService,
    private ownerService: OwnerService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      ownerId: new FormControl(''),
      catId: new FormControl(''),
    });
    this.loadCountryData();
  }

  loadCountryData() {
    this.ownerService.getAll().subscribe((apiData: Owner[]) => {
      this.owners = apiData;
    });
    this.categoryService.getAll().subscribe((apiData: Category[]) => {
      this.categories = apiData;
    });
  }

  onSubmit() {
    const newEntry: PokemonCreate = {
      name: this.form.controls['name'].value,
    };
    const ownerId = this.form.value.ownerId;
    const catId = this.form.value.catId;

    this.service.create(ownerId, catId, newEntry).subscribe(
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
