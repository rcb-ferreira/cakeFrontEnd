import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakesComponent } from './cakes/cakes.component';
import { AddComponent } from './cakes/add/add.component';
import { EditComponent } from './cakes/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CakesComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
