import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { InteresesYHabilidadesComponent } from './components/intereses-y-habilidades/intereses-y-habilidades.component';
import { TrayectoriaComponent } from './components/trayectoria/trayectoria.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescripcionComponent,
    InteresesYHabilidadesComponent,
    TrayectoriaComponent,
    ExperienciasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
