import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication/authentication.service';
import { CoursesService } from './courses/courses.service';
import { StorageService } from './storage/storage.service';
import { VouchersService } from './vouchers/vouchers.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    CoursesService,
    StorageService,
    VouchersService
  ]
})
export class ServicesModule { }
