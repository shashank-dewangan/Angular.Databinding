import { ProductComponent } from './../product/product.component';
import { ProductService } from './product.service';
import { Resolve } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolver implements Resolve<any>{
    products:any;
    constructor(private svc:ProductService){

    }
    resolve() {
        this.svc.get().subscribe(
            result => this.products = result,
            err => console.log(err),
            ()=> console.log("Completed")
          );

        return this.products;
    }

}