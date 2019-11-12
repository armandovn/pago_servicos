import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { LoginObject } from "../../../models/login-object.model";
import { StorageService } from "../../../services/storage/storage.service";
import { Session } from "../../../models/session.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;

  constructor(private frmBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private storageService: StorageService) { }

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
