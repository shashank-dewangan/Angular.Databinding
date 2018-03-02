import { ProductdetailComponent } from './../productdetail/productdetail.component';
import { ProductListComponent } from './../product-list/product-list.component';
import { ContactComponent } from './../contact/contact.component';
import { AboutComponent } from './../about/about.component';
import { HomeComponent } from './../home/home.component';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const ROUTE: Route[] = [
    {path: '',component: HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'contact',component:ContactComponent},
    {path: 'products', component:ProductListComponent},
    {path:'products/:id',component: ProductdetailComponent}];
  
@NgModule({
   
    imports:[RouterModule.forRoot(ROUTE)],
    exports:[RouterModule]
})
export class CustomRouterModule{

}