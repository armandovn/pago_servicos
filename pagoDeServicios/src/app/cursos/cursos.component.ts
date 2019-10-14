import { Component, OnInit } from '@angular/core';
import { SesionUsuarioService } from '../servicios/sesion-usuario/sesion-usuario.service';
import { CursosService } from '../servicios/cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  protected estado: Boolean = false;
  public cursos: any;

  constructor(protected sesionUsuario: SesionUsuarioService, cursosSerive: CursosService) { 
    this.cursos = cursosSerive.obtenerTodosLosCursos();
  }

  ngOnInit() {
  }

  changeSession(){
    this.estado = this.sesionUsuario.changeStatus(this.estado);
    console.log('Estado sesion padre ', this.estado);
  }

}
