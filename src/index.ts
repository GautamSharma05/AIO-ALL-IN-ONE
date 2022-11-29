export class Aio{

    static successMessage(message:string):void{
        console.log(`%c ${message}`,'color:green');
    }

    static dangerMessage(message:string):void{
        console.log(`%c ${message}`,'color:red');
    }

    static infoMessage(message:string):void{
        console.log(`%c ${message}`,'color:black','background-color:yellow');
    }


    static emailValidation(email:string):boolean{
        
        return false;
    }

    static passwordVerification(password:string):boolean{
            
            return false;
    }


    
}