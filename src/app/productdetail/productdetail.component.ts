import { ProductService } from './../Services/product.service';
import { Component } from '@angular/core';
import { LoggerService } from '../Services/logger.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styles: []
})
export class ProductdetailComponent implements OnInit {
 
  product:any;
  constructor(private svc: ProductService,private logger:LoggerService, private router : ActivatedRoute )
  {
    
  }

  ngOnInit(): void {
    let id = this.router.snapshot.params.id;
    this.svc.getById(id).subscribe(
      (result) => {
        this.svc.reviews = result["Reviews"];
        this.product = result},
      (err)=> this.logger.error(err),
      ()=>this.logger.log("Completed")
    )
  }

}
