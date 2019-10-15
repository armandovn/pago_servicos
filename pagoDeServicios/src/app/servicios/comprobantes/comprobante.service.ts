import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {

  private comprobantes: any = [{
    nombre_curso: "Desarrollo de Páginas Web",
    nombre_usuario: "Tania",
    apellido_pat: "Aguilera",
    correo: "tanagromo@gmail.com",
    comprobante: "https://img.blogs.es/ennaranja/wp-content/uploads/2016/07/comprobante-cajero-450x385.jpg",
    estado: true
  }, {
    nombre_curso: "Excel",
    nombre_usuario: "Armando",
    apellido_pat: "Valderrama",
    correo: "armandoeloriginal@gmail.com",
    comprobante: "https://img.blogs.es/ennaranja/wp-content/uploads/2016/07/comprobante-cajero-450x385.jpg",
    estado: true
  }, {
    nombre_curso: "Fundamentos de programacion con C",
    nombre_usuario: "Zuriel",
    apellido_pat: "Uzai",
    correo: "ratitatraviesa@gmail.com",
    comprobante: "https://img.blogs.es/ennaranja/wp-content/uploads/2016/07/comprobante-cajero-450x385.jpg",
    estado: true
  }, {
    nombre_curso: "JAVA",
    nombre_usuario: "Pedro",
    apellido_pat: "Hernandez",
    correo: "pedrohernandez@gamil.com",
    comprobante: "https://img.blogs.es/ennaranja/wp-content/uploads/2016/07/comprobante-cajero-450x385.jpg",
    estado: true
  }, {
    nombre_curso: "Base de datos",
    nombre_usuario: "Sofia",
    apellido_pat: "Aguilera",
    correo: "sofigromo@gmail.com",
    comprobante: "https://img.blogs.es/ennaranja/wp-content/uploads/2016/07/comprobante-cajero-450x385.jpg",
    estado: true
  }, {
    nombre_curso: "Matlab",
    nombre_usuario: "Leticia",
    apellido_pat: "Romo",
    correo: "leticia@gmail.com",
    comprobante: "https://img.blogs.es/ennaranja/wp-content/uploads/2016/07/comprobante-cajero-450x385.jpg",
    estado: true
  }];

  constructor() { }

  obtenerTodosLosComprobantes(){
    return this.comprobantes;
  }
}
