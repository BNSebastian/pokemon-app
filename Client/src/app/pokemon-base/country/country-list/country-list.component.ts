import { Country } from 'src/app/models/country';
import { CountryService } from 'src/app/services/country.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent {
  // members
  public data!: Country;
  public dataArray!: Country[];
  public columnsToDisplay: string[] = ['id', 'name', 'edit', 'delete']; // column headers

  //constructor
  constructor(private service: CountryService, private router: Router) {}

  // methods
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAll().subscribe((apiData: Country[]) => {
      this.dataArray = apiData;
    });
  }

  editData(id: number) {
    this.router.navigate(['/country', id]);
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
      this.router.navigate(['/country'], { skipLocationChange: true });
    }, 300);
  }
}
