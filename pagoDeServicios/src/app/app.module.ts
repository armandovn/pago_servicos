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

// Routing
import { Routing } from './app-routing.module';
import { ComprobantesComponent } from './comprobantes/comprobantes.component';
import { ComprobanteComponent } from './comprobante/comprobante.component';

// Core
import {CoreModule} from "./core/core.module";

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
    ComprobanteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    Routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }