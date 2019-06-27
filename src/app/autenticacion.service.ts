import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor() { }

  getAdmin(): boolean {
    return JSON.parse(localStorage.getItem('user')).rol === 'admin';
  }

}
