import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {

  public datoUsuario: Usuario;


  constructor() { }

  ngOnInit(): void {
  }

  enviarUsuario(event): void {
    console.log('enro')
    this.datoUsuario = event;
  }


}
