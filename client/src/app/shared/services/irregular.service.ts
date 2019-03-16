import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Message, Irregular} from "../interfaces";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})

export class IrregularService {
  constructor(private http: HttpClient) {
  }

  //Получить весь список
  fetch(): Observable<Irregular[]> {
    return this.http.get<Irregular[]>('/api/irregular')
  }

  //Получить одно слово (для редактирования или удаления)
  getById(id: string): Observable<Irregular> {
    return this.http.get<Irregular>(`/api/irregular/${id}`)
  }

  create(firstForm?: string, firstFormTranscription?: string,
         secondForm?: string, secondFormTranscription?: string,
         thirdForm?: string, thirdFormTranscription?: string,
         translation?: string): Observable<Irregular> {
    const fd =
      {
        firstForm,
        firstFormTranscription,
        secondForm,
        secondFormTranscription,
        thirdForm,
        thirdFormTranscription,
        translation
      };

    return this.http.post<Irregular>('/api/irregular', fd)
  }
///////////////////////////////////////////////////////////////////////////////////////////
  update(id: string, firstForm: string, firstFormTranscription: string,
         secondForm: string, secondFormTranscription: string,
         thirdForm: string, thirdFormTranscription: string,
         translation: string, removable?: boolean): Observable<Irregular> {
    const fd = {
      firstForm,
      firstFormTranscription,
      secondForm,
      secondFormTranscription,
      thirdForm,
      thirdFormTranscription,
      translation,
      removable
    };

    return this.http.patch<Irregular>(`/api/irregular/${id}`, fd)
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
  delete(id: string): Observable<Message> {
    return this.http.delete<Message>(`/api/irregular/${id}`)
  }

}
