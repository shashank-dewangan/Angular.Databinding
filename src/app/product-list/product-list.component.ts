import { FileLoggerService } from './../Services/filelogger.service';
import { LoggerService } from './../Services/logger.service';
import { ProductService } from './../Services/product.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})

export class ProductListComponent implements OnInit  {

  private products: any;

  constructor(private svc: ProductService,private logger : LoggerService) { 
  }

  ngOnInit(): void {
    this.svc.get().subscribe(
      result => this.products = result,
      err => console.log(err),
      ()=> console.log("Completed")
    );
  }

 
 

}
