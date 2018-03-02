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

const ROUTE: Route[] = [
  {path: '',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'contact',component:ContactComponent},
{path: 'products', component:ProductListComponent}];

@NgModule({
  declarations: [AppComponent,
    ProductListComponent,
    ProductComponent, 
    HeaderComponent, 
    FooterComponent, 
    HomeComponent, 
    ContactComponent, 
    AboutComponent],
  imports: [BrowserModule,HttpClientModule,SharedModule,RouterModule.forRoot(ROUTE)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
