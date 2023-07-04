import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from '../../../models/category';
import { Owner } from '../../../models/owner';
import { PokemonCreate } from '../../../models/pokemon';
import { CategoryService } from '../../../services/category.service';
import { OwnerService } from '../../../services/owner.service';
import { PokemonService } from '../../../services/pokemon.service';

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
