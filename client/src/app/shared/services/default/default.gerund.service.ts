import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {Gerund} from "../../interfaces";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DefaultGerundService {

  constructor(private http: HttpClient) {
  }

  defaultList = [
    {
      "name": "admit", "translation": "признавать"
    },
    {
      "name": "advise", "translation": "советовать"
    },
    {
      "name": "allow", "translation": "позволять, разрешать"
    }, {
    "name": "anticipate", "translation": "ожидать, рассчитывать"
    }, {
      "name": "appreciate", "translation": "ценить, быть благодарным"
    }, {
    "name": "avoid", "translation": "избегать"
    }, {
    "name": "begin", "translation": "начинать"
    }, {
      "name": "can't bear", "translation": "не выносить, не терпеть"
    }, {
    "name": "can't help", "translation": "не избежать, не удержаться"
    }, {
      "name": "can't stand", "translation": "не выносить, не терпеть"
    }, {
    "name": "cease", "translation": "приостанавливать, прекращать"
    }, {
      "name": "complete", "translation": "заканчивать, завершать"
    }, {
    "name": "consider", "translation": "рассматривать, обдумывать"
    }, {
      "name": "continue", "translation": "продолжать"
    }, {
    "name": "delay", "translation": "задерживать"
    }, {
      "name": "deny", "translation": "отрицать"
    }, {
    "name": "despise", "translation": "не терпеть, ненавидеть"
    }, {
      "name": "discuss", "translation": "обсуждать"
    }, {
    "name": "dislike", "translation": "не любить, не нравиться"
    }, {
      "name": "don't mind", "translation": "не возражать, быть не против"
    }, {
    "name": "encourage", "translation": "поощрять, одобрять"
    }, {
      "name": "enjoy", "translation": "получать удовольствие, наслаждаться"
    }, {
    "name": "finish", "translation": "заканчивать, завершать"
    }, {
      "name": "forget", "translation": "забывать что-либо уже совершенное, сделанное"
    }, {
    "name": "hate", "translation": "не любить, ненавидеть"
    }, {
      "name": "involve", "translation": "подразумевать, предполагать"
    }, {
    "name": "keep", "translation": "продолжать делать, не останавливаться"
    }, {
      "name": "like ", "translation": "любить, нравиться"
    }, {
    "name": "love", "translation": "любить, обожать"
    }, {
      "name": "mention", "translation": "упоминать"
    }, {
    "name": "mind", "translation": "возражать, быть против"
    }, {
      "name": "miss", "translation": "скучать"
    }, {
    "name": "need ", "translation": "нуждаться, требоваться"
    }, {
    "name": "neglect ", "translation": "упускать, не делать чего-либо нужного"
    }, {
      "name": "permit", "translation": "разрешать, позволять"
    }, {
      "name": "postpone", "translation": "отложить (до будущих времен), перенести"
    }, {
      "name": "practice", "translation": "практиковаться, упражняться"
    }, {
      "name": "prefer", "translation": "предпочитать"
    }, {
      "name": "propose", "translation": "предлагать"
    }, {
      "name": "quit", "translation": "переставать, прекращать, бросать"
    }, {
      "name": "recall", "translation": "вспоминать, воскрешать (в памяти)"
    }, {
      "name": "recollect", "translation": "вспоминать, припоминать"
    }, {
      "name": "recommend", "translation": "рекомендовать, советовать"
    }, {
      "name": "regret", "translation": "жалеть, сожалеть (о чем-либо содеянном)"
    }, {
      "name": "remember", "translation": "помнить, вспоминать (о том, что уже произошло)"
    }, {
      "name": "require", "translation": "требовать, требоваться, быть необходимым"
    }, {
      "name": "resent", "translation": "негодовать, возмущаться"
    }, {
      "name": "resist", "translation": "воздержаться"
    }, {
      "name": "risk", "translation": "рисковать"
    }, {
      "name": "start", "translation": "начинать"
    }, {
      "name": "stop", "translation": "прекращать, заканчивать, завершать"
    }, {
      "name": "suggest", "translation": "предлагать"
    }, {
      "name": "try", "translation": "пробовать, попробовать, пытаться"
    }, {
      "name": "understand", "translation": "понимать"
    }
  ];

  downloadDefault(): Observable<Gerund[]> {

    return this.http.post<Gerund[]>('/api/gerund', this.defaultList);

  }
}
