import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Rutas
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from '../modules/menu/menu.component';
import { FooterComponent } from '../modules/footer/footer.component';
import { HomeComponent } from '../modules/home/home.component';
import { ContactComponent } from '../modules/contact/contact.component';
import { AddProductsComponent } from '../modules/add-products/addProducts.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AddProductsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],

  providers: [
  	appRoutingProviders
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
