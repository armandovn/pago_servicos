import { Component, OnInit, Input } from '@angular/core';
import { SesionUsuarioService } from '../servicios/sesion-usuario/sesion-usuario.service';
// Libreria utilizada para la generacion de PDF's
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-tarjeta-curso',
  templateUrl: './tarjeta-curso.component.html',
  styleUrls: ['./tarjeta-curso.component.css']
})
export class TarjetaCursoComponent implements OnInit {

  // "curso" es un objeto que recibe la data de cada curso.
  @Input() curso: any;
  @Input() inicio_sesion: Boolean;
  inscripcion: boolean = false;

  protected estado1: Boolean = false;

  constructor(protected sesionUsuario: SesionUsuarioService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.estado1 = this.sesionUsuario.changeStatus(this.estado1);
    console.log('Estado sesion hija ', this.estado1);
  }

  descargarFormatoInscripcion(){
    this.inscripcion = !this.inscripcion;
    const doc = new jsPDF({
      orientation: 'p',
      unit:'cm',
      format:'letter'
    });
    doc.setFont('times','italic');
    doc.text("Importante:" +
    "\nAntes de realizar el pago es necesario dar de alta en su banca el convenio CIE" +
    "\n01323369 con CLABE interbancaria 012 914 00201323369 0." + 
    "\n\nEl concepto de pago deberá incluir la Referencia (20 dígitos) y separado por un" +
    "\nespacio una palabra que describa lo que está pagando (5 – 25 caracteres)." +
    "\n\nTodos los datos deberán ser capturados en MAYÚSCULAS." +
    "\n\nNo se permiten caracteres especiales (acentos, comas, puntos, ñ, /, $, #, etc.)." +
    "\n\nEl depósito bancario referenciado deberá contener los datos siguientes:" +
    "\nBanco: BBVA BANCOMER" +
    "\nConvenio CIE Interbancario: 01323369" +
    "\nConvenio CIE BBVA Bancomer: 1407279" +
    "\nCLABE (18 dígitos): 012 914 00201323369 0" +
    "\nReferencia (20 dígitos)" +
    "\nMonto exacto" +
    "\n\nUna vez se haya realizado el pago se debera subir el comprobante del mismo al" +
    "\nboton que se habilito en el curso seleccionado.", 2, 2);
    doc.save('FormatoDePago.pdf');
  }

  descargarTemario(){
    const doc = new jsPDF({
      orientation: 'p',
      unit:'cm',
      format:'letter'
    });
    doc.setFont('times','italic');
    doc.text("Se describiran los temarios de cada curso!",6,3);
    doc.save('temario'+this.curso.titulo+'.pdf');
  }
}
