import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormEnvioService {

  envioURL = environment.envioURL;

  constructor(private http: HttpClient) { }

  public saveUser(usuario: any): Observable<any> {
    return this.http.post<any>(this.envioURL, usuario);
  }

  public updateUser(id: number,usuario:any): Observable<any> {
    return this.http.put<any>(this.envioURL +id, usuario);
  }
}