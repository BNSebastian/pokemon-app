import { Reviewer } from 'src/app/_models/reviewer';
import { ReviewerService } from 'src/app/_services/reviewer.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reviewer-update',
  templateUrl: './reviewer-update.component.html',
  styleUrls: ['./reviewer-update.component.css'],
})
export class ReviewerUpdateComponent {
  form!: FormGroup;

  id?: number;
  firstName?: string;
  lastName?: string;

  constructor(
    private service: ReviewerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
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
      this.lastName = apiData.firstName;
      this.form.patchValue(apiData);
    });
  }

  onSubmit() {
    const entry: Reviewer = {
      id: +this.form.controls['id'].value,
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value,
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
      this.router.navigate(['/reviewer'], { skipLocationChange: true });
    }, 300);
  }
}
