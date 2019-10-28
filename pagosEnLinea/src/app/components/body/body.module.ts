import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CoursesComponent } from './courses/courses.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    CoursesComponent,
    VouchersComponent,
    NewCourseFormComponent,
    NewUserFormComponent,
    RegisterFormComponent,
    LoginFormComponent,
    CourseInfoComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BodyModule { }
