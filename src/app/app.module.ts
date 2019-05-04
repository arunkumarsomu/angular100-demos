import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SpecialPeopleComponent } from './special-people/special-people.component';
import { ObservablesExampleComponent } from './observables-example/observables-example.component';
import { EvensObservableComponent } from './observables/evens-observable/evens-observable.component';

@NgModule({
  declarations: [AppComponent, SpecialPeopleComponent, ObservablesExampleComponent, EvensObservableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
