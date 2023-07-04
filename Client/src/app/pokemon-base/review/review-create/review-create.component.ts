import { Pokemon } from 'src/app/_models/pokemon';
import { ReviewCreate } from 'src/app/_models/review';
import { Reviewer } from 'src/app/_models/reviewer';
import { PokemonService } from 'src/app/_services/pokemon.service';
import { ReviewService } from 'src/app/_services/review.service';
import { ReviewerService } from 'src/app/_services/reviewer.service';

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.css'],
})
export class ReviewCreateComponent {
  // form
  form!: FormGroup;
  public reviewers!: Reviewer[];
  public pokemons!: Pokemon[];
  // members
  title?: string;
  text?: string;
  rating?: number;

  constructor(
    private service: ReviewService,
    private reviewerService: ReviewerService,
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(''),
      text: new FormControl(''),
      rating: new FormControl(''),
      reviewerId: new FormControl(''),
      pokeId: new FormControl(''),
    });
    this.loadCountryData();
  }

  loadCountryData() {
    this.reviewerService.getAll().subscribe((apiData: Reviewer[]) => {
      this.reviewers = apiData;
    });
    this.pokemonService.getAll().subscribe((apiData: Pokemon[]) => {
      this.pokemons = apiData;
    });
  }

  onSubmit() {
    const newEntry: ReviewCreate = {
      title: this.form.controls['title'].value,
      text: this.form.controls['text'].value,
      rating: +this.form.controls['rating'].value,
    };

    const reviewerId = this.form.value.reviewerId;
    const pokeId = this.form.value.pokeId;

    this.service.create(reviewerId, pokeId, newEntry).subscribe(
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
