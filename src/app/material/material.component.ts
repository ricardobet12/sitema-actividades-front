import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

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
