import { Injectable } from '@angular/core';
import {Message, Phrases} from "../interfaces";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {
  constructor( private http: HttpClient) {}

  //Получить весь список
  fetch(): Observable<Phrases[]>{
    return this.http.get<Phrases[]>('/api/phrases')
  }

  //Получить одно слово (для редактирования или удаления)
  getById(id: string):  Observable<Phrases> {
    return this.http.get<Phrases>(`/api/phrases/${id}`)
  }

  create(name?: string, translation?: string): Observable<Phrases> {
    const fd = {name,translation};


    return this.http.post<Phrases>('/api/phrases', fd)
  }

  update(id: string, name: string, translation: string, removable?: boolean): Observable<Phrases> {
    const fd = {name,translation,removable};

    return this.http.patch<Phrases>(`/api/phrases/${id}`, fd)
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/phrases/${id}`)
  }
}
