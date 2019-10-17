import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CursosComponent } from './cursos/cursos.component';
import { ComprobantesComponent } from './comprobantes/comprobantes.component';
import { AuthorizatedGuard } from "./core/guards/authorizated.guard";

const routes: Routes = [
  { path: 'registro', component: FormularioRegistroComponent },
  { path: 'inicioSesion', component: InicioSesionComponent },
  { path: 'home', component: CursosComponent, canActivate: [ AuthorizatedGuard ]},
  { path: 'comprobantes', component: ComprobantesComponent },
  { path: 'cursos', component: CursosComponent },
  { path: '', redirectTo: '/cursos', pathMatch: 'full' },
  { path: '**', redirectTo: '/cursos'}
];

export const Routing = RouterModule.forRoot(routes);
