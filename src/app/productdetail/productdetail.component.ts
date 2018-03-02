import { ProductService } from './../Services/product.service';
import { Component } from '@angular/core';
import { LoggerService } from '../Services/logger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styles: []
})
export class ProductdetailComponent {
  product:any;
  constructor(private svc: ProductService,private logger:LoggerService, private router : ActivatedRoute )
  {
    let id = this.router.snapshot.params.id;
    svc.getById(id).subscribe(
      (result) => this.product = result,
      (err)=> logger.error(err),
      ()=>logger.log("Completed")
    )
  }
}
