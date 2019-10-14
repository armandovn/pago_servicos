import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionUsuarioService {

  public usuarios: any = {
    correo: "armandovn@outlook.com",
    contrasena: "123"
  };

  constructor() { }

  changeStatus(status: Boolean): Boolean {
    return !status
  }

  login(correo, contrasena){
    if(correo == this.usuarios.correo){
      if(contrasena == this.usuarios.contrasena)
        this.usuarios.sesion = true;
        return true;
    }
  }
}
