import { Component, OnInit } from '@angular/core';
import { StorageService } from "../../../services/storage/storage.service";
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { User } from "../../../models/user.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public user: User;

  constructor(private storageService: StorageService,
              private authenticationService: AuthenticationService) { }

  // Observables
  // enventos
  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }

}
