import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  public datoUsuario: any;

  public editUsuario: any

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
