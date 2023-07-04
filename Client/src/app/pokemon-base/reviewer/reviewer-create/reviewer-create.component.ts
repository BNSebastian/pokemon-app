import { ReviewerCreate } from 'src/app/_models/reviewer';
import { ReviewerService } from 'src/app/_services/reviewer.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviewer-create',
  templateUrl: './reviewer-create.component.html',
  styleUrls: ['./reviewer-create.component.css'],
})
export class ReviewerCreateComponent {
  // members
  form!: FormGroup;

  firstName?: string;
  lastName?: string;

  constructor(private service: ReviewerService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
    });
  }

  onSubmit() {
    const newEntry: ReviewerCreate = {
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value,
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
      this.router.navigate(['/reviewer'], { skipLocationChange: true });
    }, 300);
  }
}
