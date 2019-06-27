import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { VerClienteComponent } from './clientes/ver-cliente/ver-cliente.component';
import { SinAutorizacionComponent } from './sin-autorizacion/sin-autorizacion.component';
import { CompartidoModule } from './compartido/compartido.module';
import { VentasComponent } from './ventas/ventas.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    ListadoClientesComponent,
    BreadcrumbComponent,
    PaginaNoEncontradaComponent,
    VerClienteComponent,
    SinAutorizacionComponent,
    VentasComponent,
    PresupuestosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
