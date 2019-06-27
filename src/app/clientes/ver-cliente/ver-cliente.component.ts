import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {

  id: number | string;
  cliente: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientesService: ClientesService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.id = this.route.snapshot.params['id'];
    this.cliente = this.clientesService.getCliente(this.id);
    setTimeout(() => {
      // this.router.navigate(['/clientes']);
    }, 3000);
  }

}
