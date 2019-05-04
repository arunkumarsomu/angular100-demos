import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonComponent } from './person/person.component';
import { ProductListComponent } from './products/product-list.component';
import { UserListComponent } from './users/user-list.component';
import { UserCardComponent } from './users/user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, PeopleListComponent, PersonComponent, ProductListComponent, UserListComponent, UserCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
