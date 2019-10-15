import { Component, OnInit } from '@angular/core';
import { ComprobanteService } from '../servicios/comprobantes/comprobante.service';

@Component({
  selector: 'app-comprobantes',
  templateUrl: './comprobantes.component.html',
  styleUrls: ['./comprobantes.component.css']
})
export class ComprobantesComponent implements OnInit {
  public comprobantes: any;

  constructor(private comprobanteService: ComprobanteService) { 
    this.comprobantes = this.comprobanteService.obtenerTodosLosComprobantes();
   }

  ngOnInit() {
  }

}
