import { ProductService } from './../Services/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
})
export class ProductReviewComponent {
  reviews:any[];
  constructor(private svc: ProductService){
this.reviews = svc.reviews;
  }
}
