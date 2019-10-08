import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { FormularioInscripcionCursoComponent } from './formulario-inscripcion-curso/formulario-inscripcion-curso.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { Routes, RouterModule } from '@angular/router';
import { InfounidadComponent } from './infounidad/infounidad.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { TarjetaCursoComponent } from './tarjeta-curso/tarjeta-curso.component';
import { CursosComponent } from './cursos/cursos.component';

// Services
import { SesionUsuarioService } from './servicios/sesion-usuario/sesion-usuario.service';

// Routes
const routes: Routes = [
  { path: 'registro', component: FormularioRegistroComponent },
  { path: 'inicioSesion', component: InicioSesionComponent },
  { path: 'cursos', component: CursosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    FormularioInscripcionCursoComponent,
    FormularioRegistroComponent,
    InfounidadComponent,
    InicioSesionComponent,
    TarjetaCursoComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SesionUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }