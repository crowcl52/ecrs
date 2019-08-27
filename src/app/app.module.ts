import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OficinaComponent } from './oficina/oficina.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HeaderComponent } from './header/header.component';
import { ProyectoDetalleComponent } from './proyecto-detalle/proyecto-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OficinaComponent,
    ProyectosComponent,
    ServiciosComponent,
    HeaderComponent,
    ProyectoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
