import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService{
    reviews: any[];
    constructor(private http : HttpClient){}

    get()
    {
        return this.http.get("http://localhost:3000/api/products");
    }
    getById(id:string)
    {
        return this.http.get("http://localhost:3000/api/products/" + id);
    }
}