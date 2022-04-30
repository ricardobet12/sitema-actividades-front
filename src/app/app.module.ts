import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormClienteComponent } from './cliente/form-cliente/form-cliente.component';
import { TablaClienteComponent } from './cliente/tabla-cliente/tabla-cliente.component';
import { MaterialModule } from './material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EnvioComponent } from './envio/envio.component';
import { FormEnvioComponent } from './envio/form-envio/form-envio.component';
import { TablaEnvioComponent } from './envio/tabla-envio/tabla-envio.component';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    MenuComponent,
    IndexComponent,
    ClienteComponent,
    FormClienteComponent,
    TablaClienteComponent,
    ConfirmDialogComponent,
    EnvioComponent,
    FormEnvioComponent,
    TablaEnvioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
