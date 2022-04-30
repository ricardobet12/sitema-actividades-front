import { Component, OnInit, Input } from '@angular/core';
import { TablaUsuarioService } from 'src/app/material/tabla-usuario/tabla-usuario.service';
import { Usuario } from 'src/app/model/Usuario';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css'],
  providers:[TablaUsuarioService,ConfirmationService,MessageService,]
})
export class TableUserComponent implements OnInit {

  @Input() datoUsuario: Usuario;

  public cars:Array<Usuario> = new Array<Usuario>();

  constructor(private tablaService:TablaUsuarioService,private confirmationService: ConfirmationService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  ngOnChanges() {
    console.log(this.datoUsuario)
    if (this.datoUsuario != null || this.datoUsuario != undefined) {
      this.agregarUsuario();
    }
  }

  public agregarUsuario(): void {
    console.log('entro')
    let cars = [...this.cars];
    if (this.datoUsuario != null)
        cars.push(this.datoUsuario);
        this.messageService.add({severity:'success', summary: 'Exito', detail:'Usuario agregado con exito'});
    this.cars = cars;
  }


  public obtenerUsuarios(): void {
    this.tablaService.getUsers().subscribe(res => {
      if (res != null) {
        console.log(res);
        this.cars = res;
      }
    })
  }


  onRowEditSave(car: Usuario) {
    this.tablaService.updateUser(car.id,car).subscribe(res => {
      if (res != null) {
        console.log(res)
        this.messageService.add({severity:'success', summary: 'Exito', detail:'Usuario editado con exito'});
      }
    })
}

onRowEditCancel(car: Usuario, index: number) {
    console.log(car)
}


onRowEditInit(car: Usuario) {
  console.log(car)
}

eliminarUsuario(data:Usuario) {
  this.confirmationService.confirm({
      message: 'Estas seguro de eliminar al usuario '+data.username+'?',
      header: 'Eliminar usuario',
      icon: 'pi pi-info-circle',
      
      accept: () => {
          this.tablaService.deleteUsers(data.id).subscribe(res => {
            if (res != null) {
              this.cars.splice(this.cars.indexOf(res),1);
              this.messageService.add({severity:'success', summary: 'Exito', detail:'Usuario eliminado con exito'});
            }
          })
      },
      reject: () => {
      }
  });
}



}
