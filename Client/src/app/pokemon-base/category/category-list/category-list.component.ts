import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_services/category.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  // members
  public data!: Category;
  public dataArray!: Category[];
  public columnsToDisplay: string[] = ['id', 'name', 'edit', 'delete']; // column headers

  //constructor
  constructor(private service: CategoryService, private router: Router) {}

  // methods
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe((apiData: Category[]) => {
      this.dataArray = apiData;
    });
  }

  editData(id: number) {
    this.router.navigate(['/category', id]);
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
      this.router.navigate(['/category'], { skipLocationChange: true });
    }, 300);
  }
}
