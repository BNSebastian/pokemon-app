import { Country } from 'src/app/_models/country';
import { OwnerCreate } from 'src/app/_models/owner';
import { CountryService } from 'src/app/_services/country.service';
import { OwnerService } from 'src/app/_services/owner.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.css'],
})
export class OwnerCreateComponent {
  // form
  form!: FormGroup;
  public countries!: Country[];
  // members
  firstName?: string;
  lastName?: string;
  gym?: string;

  constructor(
    private service: OwnerService,
    private countryService: CountryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      gym: new FormControl(''),
      countryId: new FormControl(''),
    });
    this.loadCountryData();
  }

  loadCountryData() {
    this.countryService.getAll().subscribe((apiData: Country[]) => {
      this.countries = apiData;
    });
  }

  onSubmit() {
    const newEntry: OwnerCreate = {
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value,
      gym: this.form.controls['gym'].value,
    };

    const countryId = this.form.value.countryId;

    this.service.create(countryId, newEntry).subscribe(
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
      this.router.navigate(['/owner'], { skipLocationChange: true });
    }, 300);
  }
}
