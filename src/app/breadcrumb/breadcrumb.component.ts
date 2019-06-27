import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  urls = [];
  textosUrl = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.pathFromRoot.forEach(ruta => {
      if (ruta.data.titulo === undefined) {
        this.textosUrl.push('Inicio');
        this.urls.push('/');
      } else {
        this.textosUrl.push(ruta.data.titulo);
        this.urls.push(ruta.data.url);
      }
    });
  }

}
