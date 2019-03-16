import { Injectable } from '@angular/core';
import {Message, Infinitive} from "../interfaces";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InfinitiveService {
  constructor( private http: HttpClient) {}

  //Получить весь список
  fetch(): Observable<Infinitive[]>{
    return this.http.get<Infinitive[]>('/api/infinitive')
  }

  //Получить одно слово (для редактирования или удаления)
  getById(id: string):  Observable<Infinitive> {
    return this.http.get<Infinitive>(`/api/infinitive/${id}`)
  }

  create(name?: string, translation?: string): Observable<Infinitive> {
    const fd = {name,translation};


    return this.http.post<Infinitive>('/api/infinitive', fd)
  }

  update(id: string, name: string, translation: string, removable?: boolean): Observable<Infinitive> {
    const fd = {name,translation,removable};

    return this.http.patch<Infinitive>(`/api/infinitive/${id}`, fd)
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/infinitive/${id}`)
  }
}
