import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../_guards/auth.guard';
import { LoginComponent } from '../account/login/login.component';
import { RegisterComponent } from '../account/register/register.component';
import { NotfoundComponent } from '../errors/notfound/notfound.component';
import { HomeComponent } from '../home/home.component';
import { CategoryCreateComponent } from '../pokemon-base/category/category-create/category-create.component';
import { CategoryUpdateComponent } from '../pokemon-base/category/category-update/category-update.component';
import { CategoryComponent } from '../pokemon-base/category/category.component';
import { CountryCreateComponent } from '../pokemon-base/country/country-create/country-create.component';
import { CountryUpdateComponent } from '../pokemon-base/country/country-update/country-update.component';
import { CountryComponent } from '../pokemon-base/country/country.component';
import { OwnerCreateComponent } from '../pokemon-base/owner/owner-create/owner-create.component';
import { OwnerUpdateComponent } from '../pokemon-base/owner/owner-update/owner-update.component';
import { OwnerComponent } from '../pokemon-base/owner/owner.component';
import { PokemonCreateComponent } from '../pokemon-base/pokemon/pokemon-create/pokemon-create.component';
import { PokemonUpdateComponent } from '../pokemon-base/pokemon/pokemon-update/pokemon-update.component';
import { PokemonComponent } from '../pokemon-base/pokemon/pokemon.component';
import { ReviewCreateComponent } from '../pokemon-base/review/review-create/review-create.component';
import { ReviewUpdateComponent } from '../pokemon-base/review/review-update/review-update.component';
import { ReviewComponent } from '../pokemon-base/review/review.component';
import { ReviewerCreateComponent } from '../pokemon-base/reviewer/reviewer-create/reviewer-create.component';
import { ReviewerUpdateComponent } from '../pokemon-base/reviewer/reviewer-update/reviewer-update.component';
import { ReviewerComponent } from '../pokemon-base/reviewer/reviewer.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'category', component: CategoryComponent },
      { path: 'category/create', component: CategoryCreateComponent },
      { path: 'category/:id', component: CategoryUpdateComponent },
      { path: 'country', component: CountryComponent },
      { path: 'country/create', component: CountryCreateComponent },
      { path: 'country/:id', component: CountryUpdateComponent },
      { path: 'owner', component: OwnerComponent },
      { path: 'owner/create', component: OwnerCreateComponent },
      { path: 'owner/:id', component: OwnerUpdateComponent },
      { path: 'pokemon', component: PokemonComponent },
      { path: 'pokemon/create', component: PokemonCreateComponent },
      { path: 'pokemon/:id', component: PokemonUpdateComponent },
      { path: 'review', component: ReviewComponent },
      { path: 'review/create', component: ReviewCreateComponent },
      { path: 'review/:id', component: ReviewUpdateComponent },
      { path: 'reviewer', component: ReviewerComponent },
      { path: 'reviewer/create', component: ReviewerCreateComponent },
      { path: 'reviewer/:id', component: ReviewerUpdateComponent },
    ],
  },

  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
