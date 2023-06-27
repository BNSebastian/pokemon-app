import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { PokemonTemplateFormComponent } from './pokemon-template-form/pokemon-template-form.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonTemplateFormComponent,
    NotfoundComponent,
    HomeComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, PokemonBaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
