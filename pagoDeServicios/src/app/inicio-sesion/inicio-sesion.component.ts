import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionUsuarioService } from '../servicios/sesion-usuario/sesion-usuario.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  formulario: FormGroup;

  constructor(private frmBuilder: FormBuilder, private router: Router, private sesionUsuario:SesionUsuarioService){
    this.formulario = this.frmBuilder.group({
      correo:["",[Validators.required, Validators.pattern("[^@]*@[^@]*")]],
      contrasena:["", Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(formulario){
    if(this.sesionUsuario.login(formulario.value.correo, formulario.value.contrasena) == 1){
      this.router.navigate(['/cursos']);
    }else if(this.sesionUsuario.login(formulario.value.correo, formulario.value.contrasena)){
      this.router.navigate(['/comprobantes']);
    }
    else{
      alert("Correo o contreseña incorrectos!");
    }
  }
}
