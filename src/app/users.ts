export class User{
    username:string;
    password:string;
    company:string;
    address:string;
    email:string;
    firstName:string;
    lastName:string;

    init(){
        this.username='';
        this.password='';
        this.company='';
        this.address='';
        this.email='';
        this.firstName='';
        this.lastName='';
    }
    verifyUsername():boolean{
        if (this.username=='') return false;
        return true;
    }
    verifyPassword():boolean{
        if(this.password=='') return false;
        return true;
    }
}