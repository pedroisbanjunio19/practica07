import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  ruta: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.ruta = this.route.snapshot.data.titulo;
  }

}
