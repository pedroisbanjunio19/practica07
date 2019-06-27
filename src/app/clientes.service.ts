import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<any> = [
    {id: '1', nombre: 'Iberdrola', cif: 'A123456778'},
    {id: '2', nombre: 'Vodafone', cif: 'A87654321'},
    {id: '3', nombre: 'Gas Natural', cif: 'A10010000'},
  ];

  constructor() { }

  getClientes() {
    return this.clientes;
  }

  getCliente(id) {
    const clienteSel = this.clientes.find( cliente => {
      return cliente.id === id;
    });

    return clienteSel;
  }

  getDato() {
    return 'Listado de Clientes "desde el servicio"';
  }
}
