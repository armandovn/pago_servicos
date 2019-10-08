import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionUsuarioService {

  constructor() { }

  changeStatus(status: Boolean): Boolean{
    return !status
  }
}
