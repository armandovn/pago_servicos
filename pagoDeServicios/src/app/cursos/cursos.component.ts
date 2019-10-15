import { Component, OnInit } from '@angular/core';
import { SesionUsuarioService } from '../servicios/sesion-usuario/sesion-usuario.service';
import { CursosService } from '../servicios/cursos/cursos.service';
import {StorageService} from "../core/services/storage.service";
import {User} from "../core/models/user.model";
import { AuthenticationService } from '../servicios/autenticacion/authentication.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public user: User;
  public cursos: any;

  constructor(private cursosService: CursosService,
              private storageService: StorageService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.cursos = this.cursosService.obtenerTodosLosCursos();
    this.user = this.storageService.getCurrentUser();
  }

  logout(){
    this.authenticationService.logout().subscribe(
      response => {if(response) {this.storageService.logout();}}
    );
  }
}
