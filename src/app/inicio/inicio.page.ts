import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  Ingresar() {
    this.router.navigate(['/dashboard']);
  }

  Registrar() {
    this.router.navigate(['/registrar']);
  }

  ResetPass() {
    this.router.navigate(['/reset-pass']);
  }

}
