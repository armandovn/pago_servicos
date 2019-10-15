import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicios/cursos/cursos.service';

@Component({
  selector: 'app-cursos-sin-log-in',
  templateUrl: './cursos-sin-log-in.component.html',
  styleUrls: ['./cursos-sin-log-in.component.css']
})
export class CursosSinLogInComponent implements OnInit {

  public cursos: any;

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.obtenerTodosLosCursos();
  }

}
