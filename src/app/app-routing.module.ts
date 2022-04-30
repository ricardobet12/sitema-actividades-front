
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EnvioComponent } from './envio/envio.component';



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'empleado', component: ClienteComponent },
  { path: 'actividades', component: EnvioComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
