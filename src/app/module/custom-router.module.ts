import { ProductReviewComponent } from './../product-review/product-review.component';
import { ProductSpecComponent } from './../product-spec/product-spec.component';
import { ProductNewComponent } from './../product-new/product-new.component';
import { ProductdetailComponent } from './../productdetail/productdetail.component';
import { ProductListComponent } from './../product-list/product-list.component';
import { ContactComponent } from './../contact/contact.component';
import { AboutComponent } from './../about/about.component';
import { HomeComponent } from './../home/home.component';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const CHILDREN : Route[] = [
    {path: 'specs', component: ProductSpecComponent},
    {path: 'reviews', component: ProductReviewComponent}];

const ROUTE: Route[] = [
    {path: '',component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'contact',component:ContactComponent},
    {path: 'products', component:ProductListComponent},
    {path: 'products/new', component:ProductNewComponent},
    {path: 'products/:id',component: ProductdetailComponent, children:CHILDREN}];
  
@NgModule({
   
    imports:[RouterModule.forRoot(ROUTE)],
    exports:[RouterModule]
})
export class CustomRouterModule{

}