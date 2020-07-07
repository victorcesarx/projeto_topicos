import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }
  getGrupo() : Observable<any>
  {
    return this.http.get('https://localhost:5002/api/grupos/1/100');
  }
}

