import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './composants/acceuil/acceuil.component';
import { SuperPipe } from './super.pipe';
import { ListmaterielComponent } from './composants/informatique/listmateriel/listmateriel.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    SuperPipe,
    ListmaterielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
