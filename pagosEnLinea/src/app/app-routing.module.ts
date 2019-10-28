import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/body/login-form/login-form.component';
import { RegisterFormComponent } from './components/body/register-form/register-form.component';
import { CoursesComponent } from './components/body/courses/courses.component';
import { NewCourseFormComponent } from './components/body/new-course-form/new-course-form.component';
import { VouchersComponent } from './components/body/vouchers/vouchers.component';
import { AuthorizatedGuard } from './guards/authorizated/authorizated.guard';

const routes: Routes = [
  { path: 'registro', component: RegisterFormComponent },
  { path: 'inicioSesion', component: LoginFormComponent },
  { path: 'home', component: CoursesComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'comprobantes', component: VouchersComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: 'nuevoCurso', component: NewCourseFormComponent },
  { path: '', redirectTo: '/cursos', pathMatch: 'full' },
  { path: '**', redirectTo: '/cursos'}
];

export const Routing = RouterModule.forRoot(routes);
