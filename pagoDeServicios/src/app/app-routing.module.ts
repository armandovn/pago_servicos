import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CursosComponent } from './cursos/cursos.component';
import { ComprobantesComponent } from './comprobantes/comprobantes.component';


const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'registro', component: FormularioRegistroComponent },
  { path: 'inicioSesion', component: InicioSesionComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'comprobantes', component: ComprobantesComponent },
  { path: '**', redirectTo: '/cursos'}
];

export const Routing = RouterModule.forRoot(routes);
