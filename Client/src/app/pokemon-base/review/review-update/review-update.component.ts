import { Review } from 'src/app/_models/review';
import { ReviewService } from 'src/app/_services/review.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review-update',
  templateUrl: './review-update.component.html',
  styleUrls: ['./review-update.component.css'],
})
export class ReviewUpdateComponent {
  form!: FormGroup;

  id?: number;
  title?: string;
  text?: string;
  rating?: number;

  constructor(
    private service: ReviewService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl({ value: '', disabled: true }),
      title: new FormControl(''),
      text: new FormControl(''),
      rating: new FormControl(''),
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
      this.title = apiData.title;
      this.text = apiData.text;
      this.rating = apiData.rating;
      this.form.patchValue(apiData);
    });
  }

  onSubmit() {
    const entry: Review = {
      id: +this.form.controls['id'].value,
      title: this.form.controls['title'].value,
      text: this.form.controls['text'].value,
      rating: +this.form.controls['rating'].value,
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
      this.router.navigate(['/review'], { skipLocationChange: true });
    }, 300);
  }
}
