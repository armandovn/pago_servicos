import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-curso-sin-log-in',
  templateUrl: './tarjeta-curso-sin-log-in.component.html',
  styleUrls: ['./tarjeta-curso-sin-log-in.component.css']
})
export class TarjetaCursoSinLogInComponent implements OnInit {

  @Input() curso: any;

  constructor() { }

  ngOnInit() {
  }

}
