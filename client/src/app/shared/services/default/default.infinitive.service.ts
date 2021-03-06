import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {Infinitive} from "../../interfaces";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DefaultInfinitiveService {

  constructor(private http: HttpClient) {
  }

  defaultList = [
    {
      "name": "agree", "translation": "соглашаться"
    },
    {
      "name": "appear", "translation": "казаться, производить впечатление"
    },
    {
      "name": "arrange", "translation": "организовать, устроить, принимать меры"
    }, {
      "name": "ask", "translation": "просить, попросить"
    }, {
      "name": "begin", "translation": "начинать"
    }, {
      "name": "can't bear", "translation": "не выносить, не терпеть"
    }, {
      "name": "can't stand", "translation": "не выносить, не терпеть"
    }, {
      "name": "care", "translation": "иметь желание"
    }, {
      "name": "cease", "translation": "приостанавливать, прекращать"
    }, {
      "name": "choose", "translation": "решить, предпочитать"
    }, {
      "name": "claim", "translation": "утверждать, заявлять"
    }, {
      "name": "continue", "translation": "продолжать"
    }, {
      "name": "decide", "translation": "решить"
    }, {
      "name": "demand", "translation": "требовать"
    }, {
      "name": "deserve", "translation": "заслужить"
    }, {
      "name": "expect", "translation": "ожидать, рассчитывать, полагать"
    }, {
      "name": "fail", "translation": "не исполнить, не сделать, не суметь, не иметь успеха"
    }, {
      "name": "forget", "translation": "забывать сделать что-либо"
    }, {
      "name": "get (be allowed to)", "translation": "мочь, разрешаться, позволяться"
    }, {
      "name": "happen", "translation": "случаться, оказываться"
    }, {
      "name": "hate", "translation": "не любить, ненавидеть"
    }, {
      "name": "hesitate", "translation": "колебаться, не решаться"
    }, {
      "name": "hope", "translation": "надеяться"
    }, {
      "name": "intend", "translation": "намереваться, собираться"
    }, {
      "name": "learn", "translation": "научиться"
    }, {
      "name": "like", "translation": "любить, нравиться"
    }, {
      "name": "love", "translation": "любить, обожать"
    }, {
      "name": "manage", "translation": "получаться, удаваться"
    }, {
      "name": "need", "translation": "нуждаться, требоваться, иметь надобность"
    }, {
      "name": "neglect", "translation": "упускать, не делать чего-либо нужного"
    }, {
      "name": "offer", "translation": "предлагать, вызваться сделать что-либо"
    }, {
      "name": "plan", "translation": "планировать, намереваться"
    }, {
      "name": "prefer", "translation": "предпочитать"
    }, {
      "name": "prepare", "translation": "готовить, приготовить"
    }, {
      "name": "pretend", "translation": "притворяться, делать вид, прикидываться"
    }, {
      "name": "promise", "translation": "обещать"
    }, {
      "name": "propose ", "translation": "предлагать"
    }, {
      "name": "refuse", "translation": "отказывать, отказываться"
    }, {
      "name": "regret", "translation": "жалеть, сожалеть (о том, что говорящий собирается сказать)"
    }, {
      "name": "remember", "translation": "помнить, не забыть сделать что-либо"
    }, {
      "name": "seem", "translation": "казаться, выглядеть"
    }, {
      "name": "start", "translation": "начинать"
    }, {
      "name": "swear", "translation": "пообещать, поклясться"
    }, {
      "name": "tend", "translation": "иметь склонность к чему-либо"
    }, {
      "name": "threaten", "translation": "грозить, угрожать"
    }, {
      "name": "try", "translation": "пытаться, стараться"
    }, {
      "name": "wait", "translation": "ждать"
    }, {
      "name": "want ", "translation": "хотеть"
    }, {
      "name": "wish", "translation": "желать, хотеть"
    }, {
      "name": "would like", "translation": "желать, хотеть (обычно переводится с частицей “бы”)"
    }
  ];

  downloadDefault(): Observable<Infinitive[]> {

    return this.http.post<Infinitive[]>('/api/infinitive', this.defaultList);

  }
}
