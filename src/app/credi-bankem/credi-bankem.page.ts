import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credi-bankem',
  templateUrl: './credi-bankem.page.html',
  styleUrls: ['./credi-bankem.page.scss'],
})
export class CrediBankemPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  Simulador(){
    this.router.navigate(['/simulador']);
  }

  Solicitud(){
    this.router.navigate(['/solicitud']);
  }

  Documentacion(){
    this.router.navigate(['/documentos']);
  }

  Notificacion() {
    this.router.navigate(['/notificacion']);
  }

  Dashboard() {
    this.router.navigate(['/dashboard']);
  }

  Historial() {
    this.router.navigate(['/historial']);
  }

}
