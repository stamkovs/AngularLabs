import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IgracManagementService } from './igracManagement';
import { AppComponent } from './app.component';
import { igracListComponent } from './igrac-list.component';
import { IgracDetailsComponent } from './igrac-details/igrac-details.component';

import { RouterModule } from '@angular/router';
import { FormsModule }  from '@angular/forms';
import {IgracCreateComponent} from "./create-igrac/new-igrac.component";


@NgModule({
  declarations: [
    AppComponent,
    igracListComponent,
    IgracDetailsComponent,
    IgracCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: '/list', pathMatch: 'full'
      },
      {
        path: 'list',
        component: igracListComponent
      },
      {
        path: 'details/:id',
        component: IgracDetailsComponent
      },
      {
        path: 'edit/:id',
        component: IgracCreateComponent
      },
      {
        path: 'new',
        component: IgracCreateComponent
      }
    ])
  ],
  providers: [IgracManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
