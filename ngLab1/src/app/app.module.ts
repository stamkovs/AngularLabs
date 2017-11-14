import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IgracManagementService } from './igracManagement';
import { AppComponent } from './app.component';
import { igracListComponent } from './igrac-list.component';
import { IgracDetailsComponent } from './igrac-details/igrac-details.component';

import { RouterModule } from '@angular/router';
import { FormsModule }  from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    igracListComponent,
    IgracDetailsComponent
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
      }
    ])
  ],
  providers: [IgracManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
