import { Reviewer } from 'src/app/_models/reviewer';
import { ReviewerService } from 'src/app/_services/reviewer.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviewer-list',
  templateUrl: './reviewer-list.component.html',
  styleUrls: ['./reviewer-list.component.css'],
})
export class ReviewerListComponent {
  // members
  public data!: Reviewer;
  public dataArray!: Reviewer[];
  public columnsToDisplay: string[] = [
    'id',
    'firstName',
    'lastName',
    'edit',
    'delete',
  ];

  //constructor
  constructor(private service: ReviewerService, private router: Router) {}

  // methods
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe((apiData: Reviewer[]) => {
      this.dataArray = apiData;
    });
  }

  editData(id: number) {
    this.router.navigate(['/reviewer', id]);
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
      this.router.navigate(['/reviewer'], { skipLocationChange: true });
    }, 300);
  }
}
