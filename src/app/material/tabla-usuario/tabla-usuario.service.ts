import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TablaUsuarioService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(environment.apiUrl + '/user');
  }

    public deleteUsers(id:number): Observable<Usuario> {
    return this.http.delete<Usuario>(environment.apiUrl + '/user/'+id);
  }

  public updateUser(id: number,usuario:Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(environment.apiUrl + '/user/'+id, usuario);
  }

}
