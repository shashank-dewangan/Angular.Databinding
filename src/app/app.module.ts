import { ProductdetailComponent } from './productdetail/productdetail.component';
import { SharedModule } from './module/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CustomRouterModule } from './module/custom-router.module';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ProductReviewComponent } from './product-review/product-review.component';


@NgModule({
  declarations: [AppComponent,
    ProductListComponent,
    ProductComponent, 
    HeaderComponent, 
    FooterComponent, 
    HomeComponent, 
    ContactComponent, 
    AboutComponent, ProductdetailComponent, ProductNewComponent, ProductSpecComponent, ProductReviewComponent],
  imports: [BrowserModule,HttpClientModule,SharedModule,CustomRouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
