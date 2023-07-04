import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { PokemonService } from '../_services/pokemon.service';
import { CategoryCreateComponent } from '../pokemon-base/category/category-create/category-create.component';
import { CategoryListComponent } from '../pokemon-base/category/category-list/category-list.component';
import { CategoryUpdateComponent } from '../pokemon-base/category/category-update/category-update.component';
import { CategoryComponent } from '../pokemon-base/category/category.component';
import { CountryCreateComponent } from '../pokemon-base/country/country-create/country-create.component';
import { CountryListComponent } from '../pokemon-base/country/country-list/country-list.component';
import { CountryUpdateComponent } from '../pokemon-base/country/country-update/country-update.component';
import { CountryComponent } from '../pokemon-base/country/country.component';
import { OwnerCreateComponent } from '../pokemon-base/owner/owner-create/owner-create.component';
import { OwnerListComponent } from '../pokemon-base/owner/owner-list/owner-list.component';
import { OwnerUpdateComponent } from '../pokemon-base/owner/owner-update/owner-update.component';
import { OwnerComponent } from '../pokemon-base/owner/owner.component';
import { PokemonCreateComponent } from '../pokemon-base/pokemon/pokemon-create/pokemon-create.component';
import { PokemonListComponent } from '../pokemon-base/pokemon/pokemon-list/pokemon-list.component';
import { PokemonUpdateComponent } from '../pokemon-base/pokemon/pokemon-update/pokemon-update.component';
import { PokemonComponent } from '../pokemon-base/pokemon/pokemon.component';
import { ReviewCreateComponent } from '../pokemon-base/review/review-create/review-create.component';
import { ReviewListComponent } from '../pokemon-base/review/review-list/review-list.component';
import { ReviewUpdateComponent } from '../pokemon-base/review/review-update/review-update.component';
import { ReviewComponent } from '../pokemon-base/review/review.component';
import { ReviewerCreateComponent } from '../pokemon-base/reviewer/reviewer-create/reviewer-create.component';
import { ReviewerListComponent } from '../pokemon-base/reviewer/reviewer-list/reviewer-list.component';
import { ReviewerUpdateComponent } from '../pokemon-base/reviewer/reviewer-update/reviewer-update.component';
import { ReviewerComponent } from '../pokemon-base/reviewer/reviewer.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryComponent,
    CategoryUpdateComponent,
    CountryComponent,
    CountryListComponent,
    CountryUpdateComponent,
    CountryCreateComponent,
    OwnerComponent,
    OwnerListComponent,
    OwnerCreateComponent,
    OwnerUpdateComponent,
    PokemonListComponent,
    PokemonCreateComponent,
    PokemonUpdateComponent,
    PokemonComponent,
    ReviewerComponent,
    ReviewerListComponent,
    ReviewerUpdateComponent,
    ReviewerCreateComponent,
    ReviewComponent,
    ReviewListComponent,
    ReviewCreateComponent,
    ReviewUpdateComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports: [],
  providers: [PokemonService],
})
export class PokemonBaseModule {}
