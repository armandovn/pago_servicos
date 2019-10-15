import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionUsuarioService {

  public usuarios: any = [{
    correo: "armandovn@outlook.com",
    contrasena: "123"
  }, {
    correo: "bety@live.com",
    contrasena: "123"
  }];

  constructor() { }

  changeStatus(status: Boolean): Boolean {
    return !status
  }

  login(correo, contrasena){
    if(correo == this.usuarios[0].correo){
      if(contrasena == this.usuarios[0].contrasena)
        return 1;
    }else if(correo == this.usuarios[1].correo){
      if(contrasena == this.usuarios[1].contrasena)
        return 2;
    }
  }
}
