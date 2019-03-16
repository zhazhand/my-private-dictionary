import { Injectable } from '@angular/core';
import {Message, Gerund} from "../interfaces";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GerundService {
  constructor( private http: HttpClient) {}

  //Получить весь список
  fetch(): Observable<Gerund[]>{
    return this.http.get<Gerund[]>('/api/gerund')
  }

  //Получить одно слово (для редактирования или удаления)
  getById(id: string):  Observable<Gerund> {
    return this.http.get<Gerund>(`/api/gerund/${id}`)
  }

  create(name?: string, translation?: string): Observable<Gerund> {
    const fd = {name,translation};


    return this.http.post<Gerund>('/api/gerund', fd)
  }

  update(id: string, name: string, translation: string, removable?: boolean): Observable<Gerund> {
    const fd = {name,translation,removable};

    return this.http.patch<Gerund>(`/api/gerund/${id}`, fd)
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/gerund/${id}`)
  }
}
