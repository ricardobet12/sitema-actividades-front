import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormUsuarioService } from 'src/app/material/form-usuario/form-usuario.service';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css'],
  providers: [FormUsuarioService]
})
export class FormularioUsuarioComponent implements OnInit {

  public form: FormGroup;

  @Output() datoUsuario = new EventEmitter<Usuario>();

  public activarForm: boolean = false;

  constructor(private formBuilder: FormBuilder, public formService: FormUsuarioService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required,Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
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

    if (this.form.controls['password'].hasError('minLength')) {
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



  public activarUsuario(): void{
    this.activarForm = true;
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

}
