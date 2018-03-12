import { ProductService } from './../Services/product.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
})
export class ProductReviewComponent implements OnInit {
  
  reviews:any[];
  constructor(private svc: ProductService){
  }

  ngOnInit(): void {
    this.reviews = this.svc.reviews;
  }
}
