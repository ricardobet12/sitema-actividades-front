import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TablaEnvioService {

  envioURL = environment.envioURL;
  
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.envioURL);
  }

    public deleteUsers(id:number): Observable<any> {
    return this.http.delete<any>(this.envioURL + 'eliminar/'+id);
  }

  public updateUser(id: number,usuario:any): Observable<any> {
    return this.http.put<any>(this.envioURL +id, usuario);
  }

}
