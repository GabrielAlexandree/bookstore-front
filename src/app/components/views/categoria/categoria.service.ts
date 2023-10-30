import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseURl: String = environment.baseUrl;

  constructor(private http: HttpClient) {
   }
  
  findAll(): Observable<Categoria[]>{
    const url = `${this.baseURl}/categorias`
    return this.http.get<Categoria[]>(url)
  }
}
