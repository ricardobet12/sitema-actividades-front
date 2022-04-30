import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormUsuarioService } from './form-usuario.service';
import { Usuario } from 'src/app/model/Usuario';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
  providers: [FormUsuarioService]
})
export class FormUsuarioComponent implements OnInit,OnChanges {

  public form: FormGroup;

  public activarF: boolean = false;

  @Output() datoUsuario = new EventEmitter<Usuario>();

  @Input() editUsuario: Usuario;

  constructor(private formBuilder: FormBuilder, public formService: FormUsuarioService) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnChanges() {
    if (this.editUsuario != undefined) {
      this.activarF = true;
      this.form = this.formBuilder.group({
        id: new FormControl(this.editUsuario.id),
        name: new FormControl(this.editUsuario.name, [Validators.required]),
        username: new FormControl(this.editUsuario.username, [Validators.required, Validators.minLength(6)]),
        password: new FormControl(this.editUsuario.password, [Validators.minLength(5)]),
        email: new FormControl(this.editUsuario.email, [Validators.required, Validators.email]),
      });
    }
  }

  getErrorMessageCorreo() {
    if (this.form.controls['email'].hasError('required')) {
      return 'Debes ingresar un correo';
    }
    if (this.form.controls['email'].hasError('email')) {
      return 'Correo no valido';
    }
  }

  getErrorMessageNombre() {
    if (this.form.controls['name'].hasError('required')) {
      return 'Debes ingresar el nombre del usuario';
    }
  }

  getErrorMessageClave() {
    if (this.form.controls['password'].hasError('required')) {
      return 'Debes ingresar una contraseña';
    }

    if (!this.form.controls['password'].hasError('minLength')) {
      return 'Debes ingresar minimo 6 digitos';
    }

  }

  getErrorMessageUsuario() {
    if (this.form.controls['username'].hasError('required')) {
      return 'Debes ingresar un nombre de usuario';
    }
    if (!this.form.controls['username'].hasError['minLength']) {
      return 'Debes ingresar minimo 6 digitos';
    }
  }

  public limpiarCampos(): void {
    this.form.reset()
  }

  public prueba(): void {
    if (this.form.controls['id'] != undefined) {
      this.actualizarUsuario();
    }else {
      this.guardarUsuario();
    }
  }

  public actualizarUsuario(): void {
    this.formService.updateUser(this.editUsuario.id,this.form.value).subscribe(res => {
      if (res != null) {
        console.log(res)
        this.editUsuario.username = res.username;
        this.editUsuario.email = res.email;
        this.editUsuario.name = res.name;
        this.editUsuario.password = res.password;
        this.editUsuario.id = res.id
        this.limpiarCampos();
      }
    }, error => {
      console.log(error.error.message)
    })
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

