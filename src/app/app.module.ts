import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { SliderComponent } from './common/slider/slider.component';
import { QuoteComponent } from './common/quote/quote.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { ProductList2Component } from './common/product-list2/product-list2.component';
import { MaskListComponent } from './common/mask-list/mask-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SliderComponent,
    QuoteComponent,
    ProductListComponent,
    ProductList2Component,
    MaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
