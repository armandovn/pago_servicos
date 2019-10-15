import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { InfounidadComponent } from './infounidad/infounidad.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { TarjetaCursoComponent } from './tarjeta-curso/tarjeta-curso.component';
import { CursosComponent } from './cursos/cursos.component';

// Services
import { SesionUsuarioService } from './servicios/sesion-usuario/sesion-usuario.service';

// Routing
import { Routing } from './app-routing.module';
import { ComprobantesComponent } from './comprobantes/comprobantes.component';
import { ComprobanteComponent } from './comprobante/comprobante.component';

// Core
import {CoreModule} from "./core/core.module";
import { CursosSinLogInComponent } from './cursos-sin-log-in/cursos-sin-log-in.component';
import { TarjetaCursoSinLogInComponent } from './tarjeta-curso-sin-log-in/tarjeta-curso-sin-log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    FormularioRegistroComponent,
    InfounidadComponent,
    InicioSesionComponent,
    TarjetaCursoComponent,
    CursosComponent,
    ComprobantesComponent,
    ComprobanteComponent,
    CursosSinLogInComponent,
    TarjetaCursoSinLogInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [SesionUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }