import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { VerClienteComponent } from './clientes/ver-cliente/ver-cliente.component';
import { LoginGuard } from './login.guard';
import { SinAutorizacionComponent } from './sin-autorizacion/sin-autorizacion.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ventas', data: {titulo: 'Ventas', url: '/ventas'}, component: VentasComponent },
  {path: 'ventas', data: {titulo: 'Ventas', url: '/ventas'}, children: [
    {path: 'clientes', component: ListadoClientesComponent, data: {titulo: 'Clientes', url: '/ventas/clientes'}},
    {path: 'clientes', data: {titulo: 'Clientes', url: '/ventas/clientes'}, children: [
      { path: 'ver-cliente/:id',
        component: VerClienteComponent,
        data: {titulo: 'Ver cliente', url: '/ventas/clientes/ver-cliente'},
        canActivate: [LoginGuard]},
    ]},
    {path: 'presupuestos', component: ListadoClientesComponent, data: {titulo: 'Presupuestos', url: '/ventas/presupuestos'}}
  ]},
  {path: 'sin-autorizacion', component: SinAutorizacionComponent},
  {path: 'recursos-humanos', loadChildren: '../app/rrhh/rrhh.module#RrhhModule'},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
