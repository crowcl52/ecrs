import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OficinaComponent } from './oficina/oficina.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'oficina', component: OficinaComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'servicios', component: ServiciosComponent},
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
