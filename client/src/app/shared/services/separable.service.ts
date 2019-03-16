import { Injectable } from '@angular/core';
import {Message, Separable} from "../interfaces";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SeparableService {
  constructor( private http: HttpClient) {}

  //Получить весь список
  fetch(): Observable<Separable[]>{
    return this.http.get<Separable[]>('/api/separable')
  }

  //Получить одно слово (для редактирования или удаления)
  getById(id: string):  Observable<Separable> {
    return this.http.get<Separable>(`/api/separable/${id}`)
  }

  create(name?: string, translation?: string): Observable<Separable> {
    const fd = {name,translation};


    return this.http.post<Separable>('/api/separable', fd)
  }

  update(id: string, name: string, translation: string, removable?: boolean): Observable<Separable> {
    const fd = {name,translation,removable};

    return this.http.patch<Separable>(`/api/separable/${id}`, fd)
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/separable/${id}`)
  }
}
