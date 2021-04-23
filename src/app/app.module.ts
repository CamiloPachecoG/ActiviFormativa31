import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';

//Definir Rutas
const routes: Routes = [
  {
    path: '',
    component:InicioComponent,
  },
  {
    path: 'inicio',
    component:InicioComponent,
  },
  {
    path: 'profesores',
    component:ProfesoresComponent,
  },
  {
    path: 'alumnos',
    component: FormAlumnoComponent,
  },
  {
    path: 'administrativos',
    component: AdministrativosComponent,
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    FormAlumnoComponent,
    AdministrativosComponent,
    ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
