import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Word} from "../../interfaces";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})

export class DefaultVocabularyService {
  constructor(private http: HttpClient) {
  }

  defaultList =
    [
      {
        "name": "(to) argue",
        "transcription": "ˈɑːrɡjuː",
        "translation": "спорить, доказывать, аргументировать, обсуждать, убеждать, разубеждать"
      }, {
      "name": "conclusion",
      "transcription": "kənˈkluːʒn",
      "translation": "заключение, вывод, завершение, окончание, результат, умозаключение, исход"
    }, {
      "name": "except",
      "transcription": "ɪkˈsept",
      "translation": "кроме, за исключением, если не, исключать, возражать"
    }, {"name": "heart attack",
      "transcription": "hɑːrt əˈtæk",
      "translation": "сердечный приступ"
    }, {
      "name": "humor",
      "transcription": "ˈhjumər",
      "translation": "юмор, настроение, чувство юмора, нрав, потакать, ублажать, уважить"
    }, {"name": "irritated",
      "transcription": "ˈɪrɪteɪtɪd",
      "translation": "раздраженный"
    }, {
      "name": "stork",
      "transcription": "stɔːrk",
      "translation": "аист"
    }, {
      "name": "(to) develop",
      "transcription": "dɪˈveləp",
      "translation": "развиваться, развивать, разрабатывать, совершенствовать, совершенствоваться"
    },{
      "name": "(to) earn",
      "transcription": "ɜːrn",
      "translation": "зарабатывать, заслуживать, наработать, приносить доход"
    }, {
      "name": "(to) enroll",
      "transcription": "ɪnˈroʊl",
      "translation": "регистрировать, записываться, вербовать, поступать на военную службу"
    }, {
      "name": "(to) reach goals",
      "transcription": "riːtʃ ɡəʊlz",
      "translation": "достигать /добиваться/ целей"
    }, {
      "name": "unlucky",
      "transcription": "ʌnˈlʌki",
      "translation": "неудачный, несчастливый"
    }, {
      "name": "(to) behave",
      "transcription": "bɪˈheɪv",
      "translation": "вести себя, поступать, работать"
    }, {
      "name": "crime",
      "transcription": "kraɪm",
      "translation": "преступление, преступность, криминал"
    }, {"name": "(to) fine",
      "transcription": "faɪn",
      "translation": "штрафовать"
    }, {
      "name": "illegal",
      "transcription": "ɪˈliːɡl",
      "translation": "незаконный, нелегальный, беззаконный"
    }, {"name": "inch",
      "transcription": "ɪntʃ",
      "translation": "дюйм"
    }, {
      "name": "kidnapping",
      "transcription": "ˈkɪdnæpɪŋ",
      "translation": "похищение людей"
    }, {
      "name": "(to) mistreat",
      "transcription": "ˌmɪsˈtriːt",
      "translation": "плохо обращаться, жестоко обращаться"
    }, {
      "name": "(to) obey",
      "transcription": "əˈbeɪ",
      "translation": "подчиняться, повиноваться, слушаться, выполнять приказание"
    }, {
      "name": "(to) protect",
      "transcription": "prəˈtekt",
      "translation": "защищать, охранять, беречь, оберегать, предохранять, ограждать"
    }, {
      "name": "(to) whistle",
      "transcription": "ˈwɪsl",
      "translation": "свистеть, насвистывать, посвистывать"
    }, {
      "name": "average",
      "transcription": "ˈævərɪdʒ",
      "translation": "средний, обычный, среднее число"
    }, {
      "name": "(to) break into",
      "transcription": "breɪk ˈɪntə",
      "translation": "проникнуть в помещение, вломиться, взломать"
    }, {
      "name": "cereal",
      "transcription": "ˈsɪriəl",
      "translation": "зерновой, злаковый, изделия из дроблёного зерна (кукурузные хлопья и т. п.), каша"
    }, {
      "name": "depressed",
      "transcription": "dɪˈprest",
      "translation": "подавленный, угнетённый; унылый"
    }, {"name": "(to) divorce", "transcription": "dɪˈvɔːrs", "translation": " разводиться"}, {
      "name": "obsession",
      "transcription": "əbˈseʃn",
      "translation": "одержимость, навязчивая идея"
    }, {
      "name": "passion",
      "transcription": "ˈpæʃn",
      "translation": "страсть, увлечение, азарт, страстность"
    }, {"name": "(to) sneeze", "transcription": "sniːz", "translation": "чихать"}, {
      "name": "tiny",
      "transcription": "ˈtaɪni",
      "translation": "крошечный, крохотный, малюсенький"
    }, {
      "name": "argument",
      "transcription": "ˈɑːrɡjumənt",
      "translation": "ссора, аргумент, довод, спор"
    }, {
      "name": "awake",
      "transcription": "əˈweɪk",
      "translation": "бодрствующий, проснувшийся"
    }, {"name": "a bar of soap", "transcription": "soʊp", "translation": "кусок мыла"}, {
      "name": "dentist appointment",
      "transcription": "ˈdentɪst əˈpɔɪntmənt",
      "translation": "прием у зубного врача"
    }, {
      "name": "(to) expect",
      "transcription": "ɪkˈspekt",
      "translation": "ожидать, рассчитывать, ждать, надеяться, предполагать"
    }, {"name": "(to) fall out of love", "transcription": "--", "translation": "разлюбить"}, {
      "name": "guilty",
      "transcription": "ˈɡɪlti",
      "translation": "виновный, виноватый"
    },{"name": "maid", "transcription": "meɪd", "translation": "горничная, служанка, прислуга"}, {
      "name": "razor",
      "transcription": "ˈreɪzər",
      "translation": "бритва"
    }, {"name": "rose bush", "transcription": "roʊz bʊʃ", "translation": "куст роз"}, {
      "name": "among",
      "transcription": "əˈmʌŋ",
      "translation": "среди, между, у, из, в числе, из числа, посреди"
    }, {"name": "noble", "transcription": "ˈnoʊbl", "translation": "благородный, знатный"}, {
      "name": "advantage",
      "transcription": "ədˈvæntɪdʒ",
      "translation": "преимущество"
    }, {
      "name": "couch potato",
      "transcription": "kaʊtʃ pəˈteɪtoʊ",
      "translation": "домосед, вялый человек, лежебока"
    }, {
      "name": "culture vulture",
      "transcription": "ˈkʌltʃər ˈvʌltʃər",
      "translation": "любящий культурный досуг: посещение музеев, театров, выставок"
    }, {
      "name": "disadvantage",
      "transcription": "ˌdɪsədˈvæntɪdʒ",
      "translation": "невыгодное положение, неудобство"
    }, {"name": "deck", "transcription": "dek", "translation": "палуба, колода, настил"}, {
      "name": "party animal",
      "transcription": "ˈpɑːrti ˈænɪml",
      "translation": "человек, который любит участвовать в празднествах; завсегдатай вечеринок"
    }, {
      "name": "aloud",
      "transcription": "əˈlaʊd",
      "translation": "вслух, громко, ощутимо, громким голосом, заметно, сильно"
    }, {"name": "(to) gossip", "transcription": "ˈɡɑːsɪp", "translation": "сплетничать"}, {
      "name": "on schedule",
      "transcription": "on ˈskedʒuːl",
      "translation": "точно по расписанию, вовремя"
    }, {"name": "till", "transcription": "tɪl", "translation": "до, пока, не раньше"}, {
      "name": "thread",
      "transcription": "θred",
      "translation": "нитка, нить"
    }, {"name": "needle", "transcription": "ˈniːdl", "translation": "игла, иголка, спица"}, {
      "name": "attorney",
      "transcription": "əˈtɜːrni",
      "translation": "адвокат, поверенный"
    }, {
      "name": "court",
      "transcription": "kɔːrt",
      "translation": "суд, судья, корт, двор, площадка"
    }, {
      "name": "(to) represent",
      "transcription": "ˌreprɪˈzent",
      "translation": "представлять, изображать, отражать"
    }, {"name": "ceiling", "transcription": "ˈsiːlɪŋ", "translation": "потолок"}, {
      "name": "partition",
      "transcription": "pɑːrˈtɪʃn",
      "translation": "перегородка"
    }, {
      "name": "(to) demand",
      "transcription": "dɪˈmænd",
      "translation": "требовать, запрашивать"
    }, {
      "name": "isolated",
      "transcription": "ˈaɪsəleɪtɪd",
      "translation": "изолированный, отделённый, оторванный (от чего-л.)"
    }, {
      "name": "(to) deny",
      "transcription": "dɪˈnaɪ",
      "translation": "отрицать, отказывать, отказываться, отвергать, отрекаться, отпираться"
    }, {"name": "cave", "transcription": "keɪv", "translation": "пещера, полость, впадина"}, {
      "name": "(to) appear",
      "transcription": "əˈpɪr",
      "translation": "появляться, оказаться, казаться, предстать, проявляться"
    }, {
      "name": "alive",
      "transcription": "əˈlaɪv",
      "translation": "живой, в живых, действующий"
    }, {
      "name": "traffic jam",
      "transcription": "ˈtræfɪk dʒæm",
      "translation": "«пробка», затор (в уличном движении)"
    }, {"name": "rash hour", "transcription": "rʌʃ ˈaʊər", "translation": "час-пик"}, {
      "name": "entertainment",
      "transcription": "ˌentərˈteɪnmənt",
      "translation": "развлечение, развлечения"
    }, {
      "name": "national cuisine",
      "transcription": "ˈnæʃnəl kwɪˈziːn",
      "translation": "национальная кухня"
    }, {"name": "sights", "transcription": "ˈsaɪts", "translation": "достопримечательности "}, {
      "name": "aisle seat",
      "transcription": "aɪl siːt",
      "translation": "место у самого прохода"
    }, {"name": "snacks", "transcription": "ˈsnæks", "translation": "закуски "}, {
      "name": "noway",
      "transcription": "ˈnoʊˌweɪ",
      "translation": "ни в коем случае, никоим образом, вовсе нет"
    }, {
      "name": "whereabouts",
      "transcription": "ˈwerəbaʊts",
      "translation": "местонахождение, где, куда"
    }, {"name": "shore", "transcription": "ʃɔːr", "translation": "побережье"}, {
      "name": "shovel",
      "transcription": "ˈʃʌvl",
      "translation": "лопата"
    }, {
      "name": "occasion",
      "transcription": "əˈkeɪʒn",
      "translation": "случай, повод, раз, возможность, событие"
    }, {
      "name": "obvious",
      "transcription": "ˈɑːbviəs",
      "translation": "очевидный, ясный, явный, банальный, понятный, тривиальный"
    }, {
      "name": "(to) pour",
      "transcription": "pɔːr",
      "translation": "полить, лить, литься, наливать, вливаться"
    }, {
      "name": "(to) refuse",
      "transcription": "rɪˈfjuːz",
      "translation": "отказывать, отвергать, отказаться"
    }, {
      "name": "(to) nominate",
      "transcription": "ˈnɑːmɪneɪt",
      "translation": "назначать, выставлять, выдвигать кандидата"
    }, {
      "name": "permission",
      "transcription": "pərˈmɪʃn",
      "translation": "разрешение, позволение"
    }, {
      "name": "(to) rob",
      "transcription": "rɑːb",
      "translation": "грабить, обкрадывать, разбойничать"
    }, {"name": "sack", "transcription": "sæk", "translation": "мешок"}
    ];

  downloadDefault(): Observable<Word[]> {

    return this.http.post<Word[]>('/api/list', this.defaultList);

  }

}

