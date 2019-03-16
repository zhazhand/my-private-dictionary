import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Message, Word} from "../interfaces";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})

export class VocabularyService {
  constructor( private http: HttpClient) {}

  //Получить весь список
  fetch(): Observable<Word[]>{
    return this.http.get<Word[]>('/api/list')
  }

  //Получить одно слово (для редактирования или удаления)
  getById(id: string):  Observable<Word> {
    return this.http.get<Word>(`/api/list/${id}`)
  }

  create(name?: string, transcription?: string, translation?: string): Observable<Word> {
    const fd =
      // new FormData();
      {
      name,transcription,translation
    };

     // fd.append('name', name);
     // fd.append('transcription', transcription);
     // fd.append('translation', translation);

    return this.http.post<Word>('/api/list', fd)
  }

  update(id: string, name: string, transcription: string, translation: string, removable?: boolean): Observable<Word> {
    const fd = {name,transcription,translation,removable};

    return this.http.patch<Word>(`/api/list/${id}`, fd)
  }

  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/list/${id}`)
  }

}
