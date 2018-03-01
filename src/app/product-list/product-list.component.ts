import { FileLoggerService } from './../Services/filelogger.service';
import { LoggerService } from './../Services/logger.service';
import { ProductService } from './../Services/product.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})

export class ProductListComponent  {
private products: any;

  constructor(private svc: ProductService,private logger : LoggerService) { 
    logger.error("custome error");
    logger.log("custom log");
    logger.warn("warning");
    
    svc.get().subscribe(
      result => this.products = result,
      err => console.log(err),
      ()=> console.log("Completed")
    );

    // this.products = [{Brand : "Nokia",Model:"X8",Price: 12000,InStock:true,LastUpdated:Date.now()},
    //                 {Brand : "Samsung",Model:"X8",Price: 32000,InStock:false,LastUpdated:Date.now()},
    //                 {Brand : "iPhone",Model:"X",Price: 60000,InStock:true,LastUpdated:Date.now()}]
  }

 
 

}
