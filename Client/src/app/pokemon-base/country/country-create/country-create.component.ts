import { CategoryCreate } from 'src/app/models/category';
import { CountryCreate } from 'src/app/models/country';
import { CategoryService } from 'src/app/services/category.service';
import { CountryService } from 'src/app/services/country.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-create',
  templateUrl: './country-create.component.html',
  styleUrls: ['./country-create.component.css'],
})
export class CountryCreateComponent {
  // members
  form!: FormGroup;

  name?: string;

  constructor(private service: CountryService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
    });
  }

  onSubmit() {
    const newEntry: CountryCreate = {
      name: this.form.controls['name'].value,
    };

    this.service.create(newEntry).subscribe(
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
      this.router.navigate(['/country'], { skipLocationChange: true });
    }, 300);
  }
}
