import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  titulo: string;

  clientes: Array<any>;

  constructor(private route: ActivatedRoute,
              private clientesService: ClientesService) { }

  ngOnInit() {
    this.titulo = this.route.snapshot.data.titulo;
    this.clientes = this.clientesService.getClientes();
  }

}
