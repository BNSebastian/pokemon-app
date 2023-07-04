import { Review } from 'src/app/_models/review';
import { ReviewService } from 'src/app/_services/review.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css'],
})
export class ReviewListComponent {
  public data!: Review;
  public dataArray!: Review[];
  public columnsToDisplay: string[] = [
    'id',
    'title',
    'text',
    'rating',
    'edit',
    'delete',
  ];

  constructor(private service: ReviewService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe((apiData: Review[]) => {
      this.dataArray = apiData;
      console.log(this.dataArray);
    });
  }

  editData(id: number) {
    this.router.navigate(['/review', id]);
  }

  deleteData(id: number) {
    this.service.deleteById(id).subscribe(
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
