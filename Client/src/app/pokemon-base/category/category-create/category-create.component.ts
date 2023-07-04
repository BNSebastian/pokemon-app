import { Category, CategoryCreate } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
})
export class CategoryCreateComponent implements OnInit {
  // members
  form!: FormGroup;

  name?: string;

  constructor(private service: CategoryService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
    });
  }

  onSubmit() {
    const categoryCreate: CategoryCreate = {
      name: this.form.controls['name'].value,
    };

    this.service.create(categoryCreate).subscribe(
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
      this.router.navigate(['/category'], { skipLocationChange: true });
    }, 300);
  }
}
