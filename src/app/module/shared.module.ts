import { DatabaseLoggerService } from './../Services/databaselogger.service';
import { LoggerService } from './../Services/logger.service';
import { ProductService } from './../Services/product.service';
import { NgModule } from '@angular/core';

@NgModule({
    declarations :[],
    providers:[ProductService,{provide:LoggerService,useClass:DatabaseLoggerService}]
})
export class SharedModule{

}