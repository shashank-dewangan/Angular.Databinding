export class DatabaseLoggerService{

    warn(msg:any)
    {
        console.warn("database :",msg );
    }
    error(msg:any)
    {
        console.error("database : ",msg);
    }
    log(msg:any)
    {
        console.log("database :",msg);
    }
}