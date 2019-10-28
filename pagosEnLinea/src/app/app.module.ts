import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// body components
import { BodyModule } from './components/body/body.module';

// header components
import { HeaderModule } from './components/header/header.module';

// footer components
import { FooterModule } from './components/footer/footer.module';

// services
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FooterModule,
    HeaderModule,
    BodyModule
  ],
  providers: [ServicesModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
