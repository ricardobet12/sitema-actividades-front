import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/model/Usuario';
import { FormClienteService } from './form-cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css'],
  providers: [FormClienteService]
})
export class FormClienteComponent implements OnInit,OnChanges {

  public form: FormGroup;

  public activarF: boolean = false;

  @Output() datoUsuario = new EventEmitter<Usuario>();

  @Input() editUsuario: Usuario;

  constructor(private formBuilder: FormBuilder, public formService: FormClienteService,private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idEmpleado: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnChanges() {
    if (this.editUsuario != undefined) {
      this.activarF = true;
      this.form = this.formBuilder.group({
        idEmpleado: new FormControl(this.editUsuario.idEmpleado),
        nombre: new FormControl(this.editUsuario.nombre, [Validators.required]),
        apellido: new FormControl(this.editUsuario.apellido, [Validators.required]),
        telefono: new FormControl(this.editUsuario.telefono, [Validators.required]),
        correo: new FormControl(this.editUsuario.correo, [Validators.required, Validators.email]),
      });
    }
  }

  getErrorMessageCorreo() {
    if (this.form.controls['correo'].hasError('required')) {
      return 'Debes ingresar un correo';
    }
    if (this.form.controls['correo'].hasError('email')) {
      return 'Correo no valido';
    }
  }

  getErrorMessageNombre() {
    if (this.form.controls['nombre'].hasError('required')) {
      return 'Debes ingresar el nombre del cliente';
    }
  }

  getErrorMessageApellido() {
    if (this.form.controls['apellido'].hasError('required')) {
      return 'Debes ingresar los apellidos del cliente';
    }


  }

  getErrorMessageTelefono() {
    if (this.form.controls['telefono'].hasError('required')) {
      return 'Debes ingresar un telefono';
    }
 
  }

  public limpiarCampos(): void {
    this.form.reset()
  }

  public prueba(): void {
    if (this.editUsuario != undefined) {
      this.actualizarUsuario();
    }else {
      this.guardarUsuario();
    }
  }

  public actualizarUsuario(): void {
    this.formService.updateUser(this.editUsuario.idEmpleado,this.form.value).subscribe(res => {
      if (res != null) {
        this.editUsuario.nombre = res.nombre;
        this.editUsuario.correo = res.correo;
        this.editUsuario.apellido = res.apellido;
        this.editUsuario.telefono = res.telefono;
        this.editUsuario.idEmpleado = res.idEmpleado;
        this.openSnackBar('Empleado editado correctamente','Exito');
        this.limpiarCampos();
      }
    }, error => {
      console.log(error.error.message)
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  public guardarUsuario(): void {
    this.formService.saveUser(this.form.value).subscribe(res => {
      if (res != null) {
        console.log(res)
        this.datoUsuario.emit(res);
        this.limpiarCampos();
      }
    }, error => {
      console.log(error.error.message)
    })
  }

  public activarForm(): void {
    this.form.reset();
    this.editUsuario = null;
    this.activarF = true;
  }



}

