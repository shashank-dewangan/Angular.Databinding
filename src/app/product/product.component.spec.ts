import { ProductComponent } from './product.component';

xdescribe("Product",()=>{
    var prod;
    beforeEach(()=>{
        prod=new ProductComponent();
    });

    afterEach(()=>{
        prod = null;
    });
})