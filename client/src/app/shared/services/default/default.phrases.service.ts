import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {Phrases} from "../../interfaces";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DefaultPhrasesService {

  constructor(private http: HttpClient) {
  }

  defaultList = [
    {
      "name": "Can you offer me something for a good price?", "translation": "Можете предложить мне что-то по хорошей цене?"
    },
    {
      "name": "Meanwhile, don't leave the city.", "translation": "Тем временем, не уезжайте из города"
    },
    {
      "name": "I take my job very seriously.", "translation": "Я воспринимаю свою работу очень серьёзно."
    }, {
      "name": "As you wish, but you're missing out on all the fun.", "translation": "Как пожелаешь, но ты пропускаешь всё самое весёлое."
    }, {
      "name": "You're a wonderful dinner host.", "translation": "Ты прекрасный(-ая) хозяин/хозяйка вечера."
    }, {
      "name": "Quite a lot. Iam glad to say.", "translation": "Довольно много. Я рад(а) сообщить."
    }, {
      "name": "Very few/little. I'm afraid.", "translation": "Очень мало (и недостаточно), к сожалению."
    }, {
      "name": "No news is a good news.", "translation": "Никаких новостей - это хорошая новость."
    }, {
      "name": "He hasn't taken any time off to stay home and rest.", "translation": "Он не взял отгул, чтобы побыть дома и отдохнуть."
    }, {
      "name": "Were's she at?", "translation": "Где она?"
    }, {
      "name": "You are open to everything new.", "translation": "Вы открыты всему новому."
    }, {
      "name": "Hope you are doing great!", "translation": "Надеюсь, у Вас/тебя все хорошо!"
    }, {
      "name": "Really?", "translation": "В самом деле?"
    }, {
      "name": "Se you at the party then.", "translation": "Тогда увидимся на вечеринке."
    }, {
      "name": "Maybe some other time?", "translation": "Может в другой раз?"
    }, {
      "name": "Talk to you later.", "translation": "Поговорим позже."
    }, {
      "name": "What are your thoughts about...?", "translation": "нКакие у вас есть мысли о...?"
    }, {
      "name": "It wasn't me.", "translation": "Это был не я."
    }, {
      "name": "I guess I made a mistake.", "translation": "Полагаю, я допустил ошибку."
    }, {
      "name": "That is great!", "translation": "Отлично! Прекрасно!"
    }, {
      "name": "I'm not happy with your work.", "translation": "Я не доволен Вашей работой."
    }, {
      "name": "It's time to party!", "translation": "Пришло время вечеринки!"
    }, {
      "name": "Can I offer some advice?", "translation": "Могу ли я предложить совет?"
    }, {
      "name": "Go for it!", "translation": "Давай! Так держать!"
    }, {
      "name": "I'm about to make a very important decision.", "translation": "Я собираюсь принять очень важное решение."
    }, {
      "name": "That will be super!", "translation": "Это будет супер!"
    }, {
      "name": "How have you been?", "translation": "Как твои дела?"
    }, {
      "name": "I have some good news.", "translation": "У меня хорошие новости."
    }, {
      "name": "Good things can come from bad situation.", "translation": "Что-то хорошее может получиться из плохих ситуаций."
    }, {
      "name": "How many times...?", "translation": "Сколько раз...?"
    }, {
      "name": "I bet...", "translation": "Бьюсь об заклад..."
    }, {
      "name": "I didn't get the joke.", "translation": "Я не понял шутку."
    }, {
      "name": "I'm 100% sure.", "translation": "Я на 100% уверен."
    }, {
      "name": "It's like that with accents.", "translation": "Так бывает с акцентами."
    }, {
      "name": "Sometimes you want something new in your life.", "translation": "Иногда вы хотите чего-то нового в своей жизни."
    }, {
      "name": "You're kidding!", "translation": "Ты шутишь!"
    }, {
      "name": "I had that experience the other day. ", "translation": "ЯУ меня был такой опыт на днях."
    }, {
      "name": "I'm sorry to hear that.", "translation": "Мне жаль это слышать."
    }, {
      "name": "Are you kidding me?", "translation": "Ты шутишь, что ли?"
    }, {
      "name": "I disagree.", "translation": "Я не согласен."
    }
  ];

  downloadDefault(): Observable<Phrases[]> {

    return this.http.post<Phrases[]>('/api/phrases', this.defaultList);

  }
}
