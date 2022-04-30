import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TablaClienteService {

  clienteURL = environment.clienteURL;
  
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Usuario[]> {
    return this.http.get<any[]>(this.clienteURL);
  }

    public deleteUsers(id:number): Observable<Usuario> {
    return this.http.delete<Usuario>(this.clienteURL + 'eliminar/'+id);
  }

  public updateUser(id: number,usuario:Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.clienteURL +id, usuario);
  }

}
