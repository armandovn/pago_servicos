import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  formulario: FormGroup;

  constructor(private frmBuilder: FormBuilder){
    this.formulario = this.frmBuilder.group({
      correo:["",[Validators.required, Validators.pattern("[^@]*@[^@]*")]],
      contrasena:["", Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(formulario){
    if(formulario.value.correo == "armandovn@outlook.com"){
      if(formulario.value.contrasena == "123")
        alert("Ingresaste con exito!");
    }
  }
}
