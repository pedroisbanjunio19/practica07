import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEmpleadosComponent } from './empleados/listado-empleados/listado-empleados.component';
import { NominasComponent } from './empleados/nominas/nominas.component';
import { Routes, RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CompartidoModule } from '../compartido/compartido.module';

const routes: Routes = [
  {path: '', component: ListadoEmpleadosComponent, data: {titulo: 'Empleados'}},
  {path: 'nominas', component: NominasComponent, data: {titulo: 'Nóminas'}},
];

@NgModule({
  declarations: [ListadoEmpleadosComponent, NominasComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CompartidoModule
  ]
})
export class RrhhModule { }
