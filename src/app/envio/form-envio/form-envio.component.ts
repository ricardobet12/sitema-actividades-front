import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TablaClienteService } from 'src/app/cliente/tabla-cliente/tabla-cliente.service';
import { FormEnvioService } from './form-envio.service';


@Component({
  selector: 'app-form-envio',
  templateUrl: './form-envio.component.html',
  styleUrls: ['./form-envio.component.css'],
  providers: [FormEnvioService,TablaClienteService]
})
export class FormEnvioComponent implements OnInit,OnChanges {

  public form: FormGroup;

  public activarF: boolean = false;

  @Output() datoUsuario = new EventEmitter<any>();

  @Input() editUsuario: any;

  public listaEmpleadosActivos: Array<any> = []

  constructor(private formBuilder: FormBuilder, public formService: FormEnvioService, public clienteService: TablaClienteService) { }
  ngOnInit(): void {
    this.consultarEmpleadosActivos()
    this.form = this.formBuilder.group({
      idActividad: new FormControl(''),
      fechaRegistro: new FormControl('', [Validators.required]),
      estado: new FormControl(''),
      descripcion: new FormControl(''),
      fkEmpleado: new FormControl('', [Validators.required]),
    });
  }

  ngOnChanges() {
    this.consultarEmpleadosActivos()
    if (this.editUsuario != undefined) {
      this.activarF = true;
      this.form = this.formBuilder.group({
        idActividad: new FormControl(this.editUsuario.idEnvio),
        fechaRegistro: new FormControl(this.editUsuario.fechaRegistro, [Validators.required]),
        estado: new FormControl(this.editUsuario.estado, [Validators.required]),
        descripcion: new FormControl(this.editUsuario.descripcion),
        fkEmpleado: new FormControl(this.editUsuario.fkEmpleado),
      });
    }
  }

  public consultarEmpleadosActivos():void {
    this.clienteService.getUsers().subscribe(res => {
      if (res != null) {
        this.listaEmpleadosActivos = res;
      }
    })
  }
 

  public actualizarUsuario(): void {
    this.formService.updateUser(this.editUsuario.idCliente,this.form.value).subscribe(res => {
      if (res != null) {
        this.editUsuario.bodegaEntrega = res.bodegaEntrega;
        this.editUsuario.placaVehiculo = res.placaVehiculo;
        this.editUsuario.tipoProducto = res.tipoProducto;
        this.editUsuario.cantidadProducto = res.cantidadProducto;
        this.editUsuario.idLogisticaMaritima = res.idLogisticaMaritima
        this.limpiarCampos();
      }
    }, error => {
      console.log(error.error.message)
    })
  }


  getErrorMessagePrecioEnvio() {
    if (this.form.controls['estado'].hasError('required')) {
      return 'Debes ingresar el precio';
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

  
  public guardarUsuario(): void {
    console.log(this.form.value)
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
