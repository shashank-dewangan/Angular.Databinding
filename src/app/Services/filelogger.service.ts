export class FileLoggerService{

    log(msg:any)
    {
        console.log("file : ", msg);
    }
    error(msg:any)
    {
        console.error("file : ",msg);
    }
    warn(msg:any)
    {
        console.warn("file :", msg);
    } 
}