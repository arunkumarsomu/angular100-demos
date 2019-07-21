import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
//import { ObservablesModule } from './observables/observables.module';
// import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent],
  imports: [BrowserModule,
    AppRoutingModule, HttpClientModule,
    //ObservablesModule, //Having a Module here prevents it form being lazy loaded
     UsersModule,
    //  ProductsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

