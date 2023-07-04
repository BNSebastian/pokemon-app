import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './_modules/angular-material.module';
import { AppRoutingModule } from './_modules/app-routing.module';
import { PokemonBaseModule } from './_modules/pokemon-base.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
    NavMenuComponent,
    RegisterComponent,
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    PokemonBaseModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
