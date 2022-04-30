import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public datoUsuario: Usuario;

  public editUsuario: Usuario

  constructor() { }

  ngOnInit(): void {
  }

  enviarUsuario(event): void {
    this.datoUsuario = event;
  }

  editarUsuario(event): void {
    this.editUsuario = event;
  }


}
