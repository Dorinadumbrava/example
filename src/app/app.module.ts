import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { ProductComponent } from './component';

@NgModule({
  declarations: [
    // AppComponent
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [ProductComponent]
})
export class AppModule { }
