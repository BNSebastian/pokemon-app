import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AngularMaterialModule } from '../angular-material.module';
import { PokemonService } from '../services/pokemon.service';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { CategoryComponent } from './category/category.component';
import { CountryCreateComponent } from './country/country-create/country-create.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryUpdateComponent } from './country/country-update/country-update.component';
import { CountryComponent } from './country/country.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerUpdateComponent } from './owner/owner-update/owner-update.component';
import { OwnerComponent } from './owner/owner.component';
import { PokemonCreateComponent } from './pokemon/pokemon-create/pokemon-create.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonUpdateComponent } from './pokemon/pokemon-update/pokemon-update.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ReviewerCreateComponent } from './reviewer/reviewer-create/reviewer-create.component';
import { ReviewerListComponent } from './reviewer/reviewer-list/reviewer-list.component';
import { ReviewerUpdateComponent } from './reviewer/reviewer-update/reviewer-update.component';
import { ReviewerComponent } from './reviewer/reviewer.component';

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
