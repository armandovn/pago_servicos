import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../servicios/autenticacion/authentication.service';
import { LoginObject } from "../servicios/autenticacion/login-object.model";
import { StorageService } from "../core/services/storage.service";
import { Session } from "../core/models/session.model";

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;

  constructor(private frmBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router, 
              private storageService: StorageService){ }

  ngOnInit() {
    this.loginForm = this.frmBuilder.group({
      correo:['',[Validators.required, Validators.pattern("[^@]*@[^@]*")]],
      contrasena:['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;
    this.error = null;
    if(this.loginForm.valid){
      //console.log(this.loginForm.value);
      this.authenticationService.login(new LoginObject(this.loginForm.value)).subscribe(
        data => this.correctLogin(data),
        error => {
          this.error = error;
        }
      )
    }
  }

  private correctLogin(data: Session){
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/home']);
  }
}
