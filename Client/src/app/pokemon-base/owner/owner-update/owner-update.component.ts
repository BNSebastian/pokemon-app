import { Owner } from 'src/app/_models/owner';
import { OwnerService } from 'src/app/_services/owner.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css'],
})
export class OwnerUpdateComponent {
  form!: FormGroup;

  id?: number;
  firstName?: string;
  lastName?: string;
  gym?: string;

  constructor(
    private service: OwnerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      gym: new FormControl(''),
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
      this.firstName = apiData.firstName;
      this.lastName = apiData.lastName;
      this.gym = apiData.gym;
      this.form.patchValue(apiData);
    });
  }

  onSubmit() {
    const entry: Owner = {
      id: +this.form.controls['id'].value,
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value,
      gym: this.form.controls['gym'].value,
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
      this.router.navigate(['/owner'], { skipLocationChange: true });
    }, 300);
  }
}
