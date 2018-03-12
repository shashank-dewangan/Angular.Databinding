import { ProductdetailComponent } from './productdetail.component';
import { Observable } from 'rxjs/Observable';

describe("Product Detail",()=>{

    let product;
    let svc;
    let logger;
    let router;

    beforeEach(()=>{
    svc= jasmine.createSpyObj("svc",["getById"]);
    var observer = new Observable(obs => {
        obs.next(10),
        obs.next(20)
    });
    svc.getById = jasmine.createSpy("getById").and.returnValue(observer);
    router = {
        snapshot:{
            params :{
                id: 1
            }
    }};
    logger = jasmine.createSpyObj("logger",["error","log"]);

    product = new ProductdetailComponent(svc,logger,router);
    });

    it("should call svc.getById",()=>{
        product.ngOnInit();
        expect(svc.getById).toHaveBeenCalled();
    });
    afterEach(()=>{

    });
})