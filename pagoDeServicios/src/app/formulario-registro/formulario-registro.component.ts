import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private router: Router,private frmBuilder: FormBuilder){ }

  ngOnInit() {
    this.registerForm = this.frmBuilder.group({
      nombre:['', Validators.required],
      ap_paterno:['', Validators.required],
      ap_materno:['', Validators.required],
      correo:['',[Validators.required, Validators.pattern("[^@]*@[^@]*")]],
      contrasena:['', Validators.required],
      contrasena2:['', Validators.required],
      telefono:['', Validators.required],
      sexo:['', Validators.required]
    });
  }

  onSubmit(){
    alert("Registro realizado con exito!");
  }
  
}
