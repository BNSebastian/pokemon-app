import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Owner } from '../../../models/owner';
import { OwnerService } from '../../../services/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css'],
})
export class OwnerListComponent {
  public data!: Owner;
  public dataArray!: Owner[];
  public columnsToDisplay: string[] = [
    'id',
    'firstName',
    'lastName',
    'gym',
    'edit',
    'delete',
  ];

  constructor(private service: OwnerService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe((apiData: Owner[]) => {
      this.dataArray = apiData;
    });
  }

  editData(id: number) {
    this.router.navigate(['/owner', id]);
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
      this.router.navigate(['/owner'], { skipLocationChange: true });
    }, 150);
  }
}
