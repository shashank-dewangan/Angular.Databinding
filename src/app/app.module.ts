import { SharedModule } from './module/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [AppComponent,ProductListComponent,ProductComponent],
  imports: [BrowserModule,HttpClientModule,SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
