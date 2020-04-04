export class User
{
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
    verify():boolean // aici trebuie sa verificam daca utilizatorul
    {               // indeplineste conditiile pentru a crea un cont nou!
        return true;
    }
    verifyLogin():boolean // aici verificam daca in baza de date se afla username-ul
    {                     // si parola
      return true;
    }
   
   
    
    verifyUsername():boolean{
        if (this.username=='') return false;
        return true;
    }
    verifyPassword():boolean{
        if(this.password=='') return false;
        return true;
    }
    verifyCompany():boolean{
      if (this.company=='') return false;
      return true;
    }
    verifyAddress():boolean{
      if(this.address=='') return false;
      return true;
    }
    verifyEmail():boolean{
      if(this.email=='') return false;
      return true;
    }
    verifyFirstName():boolean{
      if(this.firstName=='') return false;
      return true;
    }
    verifyLastName():boolean{
      if(this.lastName=='') return false;
      return true;
    }
    isOk():boolean{
      if(this.verifyUsername() && this.verifyPassword() && this.verifyLastName() 
        && this.verifyFirstName() && this.verifyEmail() && this.verifyCompany() && this.verifyAddress())
          return true;
      return false;
    }
}