import { ProductReviewComponent } from './product-review.component';

describe("Product Review",()=>{
    var productReview;
    var productService;
    beforeEach(()=>{
        productService = {
            reviews:
            []
        };
        productReview = new ProductReviewComponent(productService);
    });

    it("parameter reviews should be defined",()=>{
        expect(productReview.reviews).toBeUndefined();
    });

    afterEach(()=>{
        productReview = null;
    });

})