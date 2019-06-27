import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  titulo: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = this.route.snapshot.data.titulo;
  }

}
