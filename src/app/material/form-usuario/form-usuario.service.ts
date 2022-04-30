import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/model/Usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormUsuarioService {

  constructor(private http: HttpClient) { }

  public saveUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(environment.apiUrl + '/user/', usuario);
  }

  public updateUser(id: number,usuario:Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(environment.apiUrl + '/user/'+id, usuario);
  }
}
