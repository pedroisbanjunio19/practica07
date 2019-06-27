import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private autenticacionService: AutenticacionService,
              private router: Router) {}

  canActivate(): boolean {
    if (this.autenticacionService.getAdmin()) {
      return true;
    } else {
      this.router.navigate(['/sin-autorizacion']);
      return false;
    }
  }

}
