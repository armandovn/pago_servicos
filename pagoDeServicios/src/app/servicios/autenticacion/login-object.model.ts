export class LoginObject {

    public email: string;
    public password: string;
  
    constructor( object: any ){
      this.email = (object.correo) ? object.correo : null;
      this.password = (object.contrasena) ? object.contrasena : null;
    }
  }
  