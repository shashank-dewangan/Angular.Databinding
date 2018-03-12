import { HomeComponent } from './home.component';

describe("Home",()=>{
    var home;
    
    beforeEach(()=>{
        home = new HomeComponent();
    });

    it("counter should be defined",()=>{
        expect(home.counter).toBeDefined();
    });

    it("should be initialized with value 10",()=>{
        expect(home.counter).toBe(10);
    });

    afterEach(()=>{
        home = null;
    })

})