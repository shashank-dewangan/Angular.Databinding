import { LoggerService } from './Services/logger.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './Services/product.service';
import { FileLoggerService } from './Services/filelogger.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [ProductService,{provide:LoggerService,useClass:FileLoggerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
