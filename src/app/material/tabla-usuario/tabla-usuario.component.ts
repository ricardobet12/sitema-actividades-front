import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Usuario } from 'src/app/model/Usuario';
import { TablaUsuarioService } from './tabla-usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.css'],
  providers: [TablaUsuarioService]
})
export class TablaUsuarioComponent implements OnInit, OnChanges {

  public listaUsuarios: Array<Usuario> = new Array<Usuario>();

  displayedColumns: string[] = ['id', 'username', 'name', 'email', 'opciones'];
  dataSource = new MatTableDataSource<Usuario>(this.listaUsuarios);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private tablaService: TablaUsuarioService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  @Input() datoUsuario: Usuario;

  @Output() editUsuario = new EventEmitter<Usuario>()

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.paginator._intl.itemsPerPageLabel = 'Filas por página'
  }

  ngOnChanges() {
    if (this.datoUsuario != null || this.datoUsuario != undefined) {
      this.agregarUsuario(this.datoUsuario);
    }
  }

  public agregarUsuario(u: Usuario): void {
    this.listaUsuarios.push(u)
    this.dataSource = new MatTableDataSource(this.listaUsuarios);
    this.dataSource.paginator = this.paginator;
    this.openSnackBar('Usuario guardado con exito', 'Exito')
  }

  public obtenerUsuarios(): void {
    this.tablaService.getUsers().subscribe(res => {
      if (res != null) {
        console.log(res);
        this.listaUsuarios = res
        this.dataSource = new MatTableDataSource(this.listaUsuarios);
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  confirmDialog(data: Usuario): void {
    const message = 'Estas seguro de eliminar al usuario ' + data.username + '?';

    const dialogData = new ConfirmDialogModel("Confirmar acción", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.eliminarUsuario(data.id);
      }
    });
  }

  public eliminarUsuario(id: number): void {
    this.tablaService.deleteUsers(id).subscribe(res => {
      if (res != null) {
        this.listaUsuarios.splice(this.listaUsuarios.indexOf(res), 1);
        this.dataSource = new MatTableDataSource(this.listaUsuarios);
        this.dataSource.paginator = this.paginator;
        this.openSnackBar('Usuario eliminado correctamente','Exito');
      }
    }, error => {
      console.log(error.error.message)
    })
  }

  public editarUsuario(data: Usuario): void {
    console.log(data)
    this.editUsuario.emit(data)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
