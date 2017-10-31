import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IgracDetailsComponent } from './igrac-details/igrac-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IgracDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
