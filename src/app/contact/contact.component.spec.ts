import { ContactComponent } from './contact.component';

describe("Contact",()=>{

    let contact;
    let logger;
    beforeEach(()=>{
        logger = jasmine.createSpyObj("svc",["warn"]);
        contact = new ContactComponent(logger);
    });

    it("Should be calling logger.warn",()=>{
        contact.ngOnInit();
        expect(logger.warn).toHaveBeenCalled();
    });
    
    it("should be calling logger.warn with parameter",()=>{
        contact.ngOnInit();
        expect(logger.warn).toHaveBeenCalledWith("warn is called");
    });

    afterEach(()=>{
        contact = null;
        logger = null;
    })
})