import { Component, OnInit } from '@angular/core';
import { StorageService } from "../core/services/storage.service";
import { AuthenticationService } from '../servicios/autenticacion/authentication.service';
import { User } from "../core/models/user.model";

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})

export class BarraNavegacionComponent implements OnInit {
  
  public user: User;

  constructor(private storageService: StorageService,
              private authenticationService: AuthenticationService) { }

  // Observables
  // enventos
  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }
}



