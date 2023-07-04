import { Country } from 'src/app/_models/country';
import { CountryService } from 'src/app/_services/country.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-update',
  templateUrl: './country-update.component.html',
  styleUrls: ['./country-update.component.css'],
})
export class CountryUpdateComponent {
  form!: FormGroup;

  id?: number;
  name?: string;

  constructor(
    private service: CountryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      name: new FormControl(''),
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
      this.form.patchValue(apiData);
    });
  }

  onSubmit() {
    const entry: Country = {
      id: +this.form.controls['id'].value,
      name: this.form.controls['name'].value,
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
      this.router.navigate(['/country'], { skipLocationChange: true });
    }, 300);
  }
}
