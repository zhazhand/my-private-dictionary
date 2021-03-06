import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Irregular} from "../../interfaces";


@Injectable({
  providedIn: 'root'
})
export class DefaultIrregularService {

  constructor(private http: HttpClient) {
  }

  defaultList =
    [
      {
      "firstForm": "arise ",
      "firstFormTranscription": "[ə'raiz]",
      "secondForm": "arose ",
      "secondFormTranscription": "[ə'rəuz]",
      "thirdForm": "arisen ",
      "thirdFormTranscription": "[ə'riz(ə)n]",
      "translation": "возникать, появляться"
    }, {
      "firstForm": "awake ",
      "firstFormTranscription": "[ə'weik]",
      "secondForm": "awoke ",
      "secondFormTranscription": "[ə'wəuk]",
      "thirdForm": "awoken ",
      "thirdFormTranscription": "[ə'wəukən]",
      "translation": "будить"
    }, {
      "firstForm": "be ",
      "firstFormTranscription": "[bi:]",
      "secondForm": "was ",
      "secondFormTranscription": "[wɔz], were [wз:]",
      "thirdForm": "been ",
      "thirdFormTranscription": "[bi:n]",
      "translation": "быть"
    }, {
      "firstForm": "bear ",
      "firstFormTranscription": "[bɛə]",
      "secondForm": "bore ",
      "secondFormTranscription": "[bɔ:]",
      "thirdForm": "born ",
      "thirdFormTranscription": "[bɔ:n]",
      "translation": "носить"
    }, {
      "firstForm": "beat ",
      "firstFormTranscription": "[bi:t]",
      "secondForm": "beat ",
      "secondFormTranscription": "[bi:t]",
      "thirdForm": "beaten ",
      "thirdFormTranscription": "['bi:tn]",
      "translation": "бить"
    }, {
      "firstForm": "become ",
      "firstFormTranscription": "[bi:kʌm]",
      "secondForm": "became ",
      "secondFormTranscription": "[bi:keim]",
      "thirdForm": "become",
      "thirdFormTranscription": "[bi:kʌm]",
      "translation": "становиться"
    }, {
      "firstForm": "begin ",
      "firstFormTranscription": "[bi'gin] ",
      "secondForm": "began ",
      "secondFormTranscription": "[bi'gæn] ",
      "thirdForm": "begun ",
      "thirdFormTranscription": "[bi'gʌn] ",
      "translation": "начинать"
    }, {
      "firstForm": "bend ",
      "firstFormTranscription": "[bend] ",
      "secondForm": "bent ",
      "secondFormTranscription": "[bent] ",
      "thirdForm": "bent ",
      "thirdFormTranscription": "[bent] ",
      "translation": "сгибать; гнуть"
    }, {
      "firstForm": "bet ",
      "firstFormTranscription": "[bet] ",
      "secondForm": "bet ",
      "secondFormTranscription": "[bet]",
      "thirdForm": "bet ",
      "thirdFormTranscription": "[bet]",
      "translation": "держать пари"
    }, {
      "firstForm": "bind ",
      "firstFormTranscription": "[baind] ",
      "secondForm": "bound ",
      "secondFormTranscription": "[baund] ",
      "thirdForm": "bound ",
      "thirdFormTranscription": "[baund]",
      "translation": "вязать; связывать"
    }, {
      "firstForm": "bite ",
      "firstFormTranscription": "[bait] ",
      "secondForm": "bit ",
      "secondFormTranscription": "[bit] ",
      "thirdForm": "bitten ",
      "thirdFormTranscription": "['bitn] ",
      "translation": "кусать, жалить "
    }, {
      "firstForm": "bleed ",
      "firstFormTranscription": "[bli:d]",
      "secondForm": "bled ",
      "secondFormTranscription": "[bled]",
      "thirdForm": "bled ",
      "thirdFormTranscription": "[bled]",
      "translation": "кровоточить"
    }, {
      "firstForm": "blow ",
      "firstFormTranscription": "[blou]",
      "secondForm": "blew ",
      "secondFormTranscription": "[blu:]",
      "thirdForm": "blown ",
      "thirdFormTranscription": "[bloun]",
      "translation": "дуть"
    }, {
      "firstForm": "break ",
      "firstFormTranscription": "[breik]",
      "secondForm": "broke ",
      "secondFormTranscription": "[brouk]",
      "thirdForm": "broken ",
      "thirdFormTranscription": "['brouk(e)n]",
      "translation": "ломать"
    }, {
      "firstForm": "breed ",
      "firstFormTranscription": "[bri:d]",
      "secondForm": "bred ",
      "secondFormTranscription": "[bred] ",
      "thirdForm": "bred ",
      "thirdFormTranscription": "[bred]",
      "translation": "воспитывать, вынашивать "
    }, {
      "firstForm": "bring ",
      "firstFormTranscription": "[briŋ]",
      "secondForm": "brought ",
      "secondFormTranscription": "[brɔ:t]",
      "thirdForm": "brought ",
      "thirdFormTranscription": "[brɔ:t]",
      "translation": "приносить"
    }, {
      "firstForm": "broadcast ",
      "firstFormTranscription": "['brɔ:dka:st]",
      "secondForm": "broadcast ",
      "secondFormTranscription": "['brɔ:dka:st]",
      "thirdForm": "broadcast ",
      "thirdFormTranscription": "['brɔ:dka:st]",
      "translation": "вещать, транслировать"
    }, {
      "firstForm": "browbeat ",
      "firstFormTranscription": "['braubi:t] ",
      "secondForm": "browbeaten ",
      "secondFormTranscription": "['braubi:tn]",
      "thirdForm": "browbeaten ",
      "thirdFormTranscription": "['braubi:tn]",
      "translation": "запугивать, пугать"
    }, {
      "firstForm": "build ",
      "firstFormTranscription": "[bild]",
      "secondForm": "built ",
      "secondFormTranscription": "[bilt]",
      "thirdForm": "built ",
      "thirdFormTranscription": "[bilt]",
      "translation": "строить"
    }, {
      "firstForm": "burn ",
      "firstFormTranscription": "[bз:n] ",
      "secondForm": "burnt ",
      "secondFormTranscription": "[bз:nt] ",
      "thirdForm": "burnt ",
      "thirdFormTranscription": "[bз:nt] ",
      "translation": "гореть"
    }, {
      "firstForm": "burst ",
      "firstFormTranscription": "[bз:st] ",
      "secondForm": "burst ",
      "secondFormTranscription": "[bз:st]",
      "thirdForm": "burst ",
      "thirdFormTranscription": "[bз:st]",
      "translation": "разразиться"
    }, {
      "firstForm": "bust ",
      "firstFormTranscription": "[bʌst]",
      "secondForm": "bust ",
      "secondFormTranscription": "[bʌst]",
      "thirdForm": "bust ",
      "thirdFormTranscription": "[bʌst]",
      "translation": "сломать, разрушать "
    }, {
      "firstForm": "buy ",
      "firstFormTranscription": "[bai] ",
      "secondForm": "bought ",
      "secondFormTranscription": "[bɔ:t] ",
      "thirdForm": "bought ",
      "thirdFormTranscription": "[bɔ:t]",
      "translation": "покупать"
    }, {
      "firstForm": "catch ",
      "firstFormTranscription": "[kætʃ]",
      "secondForm": "caught ",
      "secondFormTranscription": "[kɔ:t]",
      "thirdForm": "caught ",
      "thirdFormTranscription": "[kɔ:t]",
      "translation": "ловить, хватать, успеть"
    }, {
      "firstForm": "choose ",
      "firstFormTranscription": "[tʃu:z]",
      "secondForm": "chose ",
      "secondFormTranscription": "[ʃəuz]",
      "thirdForm": "chosen ",
      "thirdFormTranscription": "[tʃəuz(ə)n]",
      "translation": "выбирать"
    }, {
      "firstForm": "come ",
      "firstFormTranscription": "[kʌm] ",
      "secondForm": "came ",
      "secondFormTranscription": "[keim] ",
      "thirdForm": "come ",
      "thirdFormTranscription": "[kʌm]",
      "translation": "приходить"
    }, {
      "firstForm": "cost ",
      "firstFormTranscription": "[cɔst]",
      "secondForm": "cost ",
      "secondFormTranscription": "[cɔst]",
      "thirdForm": "cost ",
      "thirdFormTranscription": "[cɔst]",
      "translation": "стоить"
    }, {
      "firstForm": "creep ",
      "firstFormTranscription": "[kri:p] ",
      "secondForm": "crept ",
      "secondFormTranscription": "[krept]",
      "thirdForm": "crept ",
      "thirdFormTranscription": "[krept]",
      "translation": "ползать"
    }, {
      "firstForm": "cut ",
      "firstFormTranscription": "[kʌt]",
      "secondForm": "cut ",
      "secondFormTranscription": "[kʌt]",
      "thirdForm": "cut ",
      "thirdFormTranscription": "[kʌt]",
      "translation": "резать"
    }, {
      "firstForm": "do ",
      "firstFormTranscription": "[du:]",
      "secondForm": "did ",
      "secondFormTranscription": "[did]",
      "thirdForm": "done ",
      "thirdFormTranscription": "[dʌn]",
      "translation": "делать"
    }, {
      "firstForm": "draw ",
      "firstFormTranscription": "[drɔ:] ",
      "secondForm": "drew ",
      "secondFormTranscription": "[dru:] ",
      "thirdForm": "drawn ",
      "thirdFormTranscription": "[drɔ:n] ",
      "translation": "рисовать, тащить"
    }, {
      "firstForm": "dream ",
      "firstFormTranscription": "[dri:m]",
      "secondForm": "dreamt ",
      "secondFormTranscription": "[dremt]",
      "thirdForm": "dreamt ",
      "thirdFormTranscription": "[dremt]",
      "translation": "мечтать, дремать"
    }, {
      "firstForm": "drink ",
      "firstFormTranscription": "[driŋk]",
      "secondForm": "drank ",
      "secondFormTranscription": "[dræŋk] ",
      "thirdForm": "drunk ",
      "thirdFormTranscription": "[drʌŋk] ",
      "translation": "пить"
    }, {
      "firstForm": "drive ",
      "firstFormTranscription": "[draiv]",
      "secondForm": "drove ",
      "secondFormTranscription": "[drouv]",
      "thirdForm": "driven ",
      "thirdFormTranscription": "['drivn]",
      "translation": "водить"
    }, {
      "firstForm": "eat ",
      "firstFormTranscription": "[i:t]",
      "secondForm": "ate ",
      "secondFormTranscription": "[et]",
      "thirdForm": "eaten ",
      "thirdFormTranscription": "['i:tn]",
      "translation": "есть"
    }, {
      "firstForm": "fall ",
      "firstFormTranscription": "[fɔ:l]",
      "secondForm": "fell ",
      "secondFormTranscription": "[fel] ",
      "thirdForm": "fallen ",
      "thirdFormTranscription": "['fɔ:lən] ",
      "translation": "падать"
    }, {
      "firstForm": "feed ",
      "firstFormTranscription": "[fi:d]",
      "secondForm": "fed ",
      "secondFormTranscription": "[fed]",
      "thirdForm": "fed ",
      "thirdFormTranscription": "[fed]",
      "translation": "кормить"
    }, {
      "firstForm": "feel ",
      "firstFormTranscription": "[fi:l]",
      "secondForm": "felt ",
      "secondFormTranscription": "[felt]",
      "thirdForm": "felt ",
      "thirdFormTranscription": "[felt]",
      "translation": "чувствовать"
    }, {
      "firstForm": "fight ",
      "firstFormTranscription": "[fait] ",
      "secondForm": "fought ",
      "secondFormTranscription": "[fɔ:t] ",
      "thirdForm": "fought ",
      "thirdFormTranscription": "[fɔ:t]",
      "translation": "бороться"
    }, {
      "firstForm": "find ",
      "firstFormTranscription": "[faind]",
      "secondForm": "found ",
      "secondFormTranscription": "[faund]",
      "thirdForm": "found ",
      "thirdFormTranscription": "[faund]",
      "translation": "находить"
    }, {
      "firstForm": "fit ",
      "firstFormTranscription": "[fit]",
      "secondForm": "fit ",
      "secondFormTranscription": "[fit]",
      "thirdForm": "fit ",
      "thirdFormTranscription": "[fit]",
      "translation": "подходить по размеру"
    }, {
      "firstForm": "fly ",
      "firstFormTranscription": "[flai]",
      "secondForm": "flew ",
      "secondFormTranscription": "[flu:]",
      "thirdForm": "flown ",
      "thirdFormTranscription": "[floun]",
      "translation": "летать"
    }, {
      "firstForm": "forget ",
      "firstFormTranscription": "[fə'get]",
      "secondForm": "forgot ",
      "secondFormTranscription": "[fə'gɔt]",
      "thirdForm": "forgotten ",
      "thirdFormTranscription": "[fə'gɔt(ə)n] ",
      "translation": "забывать"
    }, {
      "firstForm": "forgive ",
      "firstFormTranscription": "[fo'giv]",
      "secondForm": "forgave ",
      "secondFormTranscription": "[fo'geiv]",
      "thirdForm": "forgiven ",
      "thirdFormTranscription": "[fo'givn]",
      "translation": "прощать"
    }, {
      "firstForm": "freeze ",
      "firstFormTranscription": "[fri:z]",
      "secondForm": "froze ",
      "secondFormTranscription": "[frouz]",
      "thirdForm": "frozen ",
      "thirdFormTranscription": "['frouzn]",
      "translation": "замерзать"
    }, {
      "firstForm": "get ",
      "firstFormTranscription": "[ get ]",
      "secondForm": "got ",
      "secondFormTranscription": "[gɔt]",
      "thirdForm": "got ",
      "thirdFormTranscription": "[gɔt]",
      "translation": "получать"
    }, {
      "firstForm": "give ",
      "firstFormTranscription": "[giv]",
      "secondForm": "gave ",
      "secondFormTranscription": "[geiv]",
      "thirdForm": "given ",
      "thirdFormTranscription": "[givn]",
      "translation": "давать"
    }, {
      "firstForm": "go ",
      "firstFormTranscription": "[gou]",
      "secondForm": "went ",
      "secondFormTranscription": "[went]",
      "thirdForm": "gone ",
      "thirdFormTranscription": "[gɔn]",
      "translation": "идти"
    }, {
      "firstForm": "grow ",
      "firstFormTranscription": "[grou]",
      "secondForm": "grew ",
      "secondFormTranscription": "[gru:]",
      "thirdForm": "grown ",
      "thirdFormTranscription": "[groun]",
      "translation": "расти"
    }, {
      "firstForm": "hang ",
      "firstFormTranscription": "[hæŋ]",
      "secondForm": "hung ",
      "secondFormTranscription": "[hʌŋ]",
      "thirdForm": "hung ",
      "thirdFormTranscription": "[hʌŋ]",
      "translation": "висеть, развешивать "
    }, {
      "firstForm": "have ",
      "firstFormTranscription": "[hæv]",
      "secondForm": "had ",
      "secondFormTranscription": "[hæd]",
      "thirdForm": "had ",
      "thirdFormTranscription": "[hæd]",
      "translation": "иметь"
    }, {
      "firstForm": "hear ",
      "firstFormTranscription": "[hiə]",
      "secondForm": "heard ",
      "secondFormTranscription": "[hз:d] ",
      "thirdForm": "heard ",
      "thirdFormTranscription": "[hз:d]",
      "translation": "слышать"
    }, {
      "firstForm": "hide ",
      "firstFormTranscription": "[haid]",
      "secondForm": "hid ",
      "secondFormTranscription": "[hid]",
      "thirdForm": "hidden ",
      "thirdFormTranscription": "['hidn]",
      "translation": "прятать"
    }, {
      "firstForm": "hit ",
      "firstFormTranscription": "[hit]",
      "secondForm": "hit ",
      "secondFormTranscription": "[hit]",
      "thirdForm": "hit ",
      "thirdFormTranscription": "[hit]",
      "translation": "попадать в цель"
    }, {
      "firstForm": "hold ",
      "firstFormTranscription": "[hould]",
      "secondForm": "held ",
      "secondFormTranscription": "[held]",
      "thirdForm": "held ",
      "thirdFormTranscription": "[held]",
      "translation": "держать"
    }, {
      "firstForm": "hurt ",
      "firstFormTranscription": "[hз:t]",
      "secondForm": "hurt ",
      "secondFormTranscription": "[hз:t]",
      "thirdForm": "hurt ",
      "thirdFormTranscription": "[hз:t]",
      "translation": "ушибить"
    }, {
      "firstForm": "keep ",
      "firstFormTranscription": "[ki:p]",
      "secondForm": "kept ",
      "secondFormTranscription": "[kept]",
      "thirdForm": "kept ",
      "thirdFormTranscription": "[kept]",
      "translation": "содержать"
    }, {
      "firstForm": "kneel ",
      "firstFormTranscription": "[ni:l]",
      "secondForm": "knelt ",
      "secondFormTranscription": "[nelt]",
      "thirdForm": "knelt ",
      "thirdFormTranscription": "[nelt]",
      "translation": "стоять на коленях"
    }, {
      "firstForm": "know ",
      "firstFormTranscription": "[nou]",
      "secondForm": "knew ",
      "secondFormTranscription": "[nju:]",
      "thirdForm": "known ",
      "thirdFormTranscription": "[noun]",
      "translation": "знать"
    }, {
      "firstForm": "lay ",
      "firstFormTranscription": "[lei]",
      "secondForm": "laid ",
      "secondFormTranscription": "[leid]",
      "thirdForm": "laid ",
      "thirdFormTranscription": "[leid]",
      "translation": "класть"
    }, {
      "firstForm": "lead ",
      "firstFormTranscription": "[li:d]",
      "secondForm": "led ",
      "secondFormTranscription": "[led]",
      "thirdForm": "led ",
      "thirdFormTranscription": "[led]",
      "translation": "вести"
    }, {
      "firstForm": "lean ",
      "firstFormTranscription": "[li:n]",
      "secondForm": "leant ",
      "secondFormTranscription": "[lent]",
      "thirdForm": "leant ",
      "thirdFormTranscription": "[lent]",
      "translation": "наклоняться"
    }, {
      "firstForm": "learn ",
      "firstFormTranscription": "[lз:n]",
      "secondForm": "learnt ",
      "secondFormTranscription": "[lз:nt]",
      "thirdForm": "learnt ",
      "thirdFormTranscription": "[lз:nt]",
      "translation": "учить"
    }, {
      "firstForm": "leave ",
      "firstFormTranscription": "[li:v]",
      "secondForm": "left ",
      "secondFormTranscription": "[left]",
      "thirdForm": "left ",
      "thirdFormTranscription": "[left]",
      "translation": "оставлять"
    }, {
      "firstForm": "lend ",
      "firstFormTranscription": "[lend]",
      "secondForm": "lent ",
      "secondFormTranscription": "[lent]",
      "thirdForm": "lent ",
      "thirdFormTranscription": "[lent]",
      "translation": "занимать"
    }, {
      "firstForm": "let ",
      "firstFormTranscription": "[let]",
      "secondForm": "let ",
      "secondFormTranscription": "[let]",
      "thirdForm": "let ",
      "thirdFormTranscription": "[let]",
      "translation": "позволять"
    }, {
      "firstForm": "lie ",
      "firstFormTranscription": "[lai]",
      "secondForm": "lay ",
      "secondFormTranscription": "[lei]",
      "thirdForm": "lain ",
      "thirdFormTranscription": "[lein]",
      "translation": "лежать"
    }, {
      "firstForm": "light ",
      "firstFormTranscription": "[lait]",
      "secondForm": "lit ",
      "secondFormTranscription": "[lit]",
      "thirdForm": "lit ",
      "thirdFormTranscription": "[lit]",
      "translation": "освещать"
    }, {
      "firstForm": "lose ",
      "firstFormTranscription": "[lu:z]",
      "secondForm": "lost ",
      "secondFormTranscription": "[lɔst]",
      "thirdForm": "lost ",
      "thirdFormTranscription": "[lɔst]",
      "translation": "терять"
    }, {
      "firstForm": "make ",
      "firstFormTranscription": "[meik]",
      "secondForm": "made ",
      "secondFormTranscription": "[meid]",
      "thirdForm": "made ",
      "thirdFormTranscription": "[meid]",
      "translation": "производить"
    }, {
      "firstForm": "mean ",
      "firstFormTranscription": "[mi:n]",
      "secondForm": "meant ",
      "secondFormTranscription": "[ment]",
      "thirdForm": "meant ",
      "thirdFormTranscription": "[ment]",
      "translation": "значить"
    }, {
      "firstForm": "meet ",
      "firstFormTranscription": "[mi:t]",
      "secondForm": "met ",
      "secondFormTranscription": "[met]",
      "thirdForm": "met ",
      "thirdFormTranscription": "[met]",
      "translation": "встречать"
    }, {
      "firstForm": "mistake ",
      "firstFormTranscription": "[mis'teik]",
      "secondForm": "mistook ",
      "secondFormTranscription": "[mis'tuk]",
      "thirdForm": "mistaken ",
      "thirdFormTranscription": "[mis'teik(e)n]",
      "translation": "ошибаться"
    }, {
      "firstForm": "pay ",
      "firstFormTranscription": "[pei]",
      "secondForm": "paid ",
      "secondFormTranscription": "[peid]",
      "thirdForm": "paid ",
      "thirdFormTranscription": "[peid]",
      "translation": "платить"
    }, {
      "firstForm": "prove ",
      "firstFormTranscription": "[pru:v]",
      "secondForm": "proved ",
      "secondFormTranscription": "[pru:vd]",
      "thirdForm": "proven ",
      "thirdFormTranscription": "[pru:vn]",
      "translation": "доказывать"
    }, {
      "firstForm": "put ",
      "firstFormTranscription": "[put]",
      "secondForm": "put ",
      "secondFormTranscription": "[put]",
      "thirdForm": "put ",
      "thirdFormTranscription": "[put]",
      "translation": "положить"
    }, {
      "firstForm": "quit ",
      "firstFormTranscription": "[kwit]",
      "secondForm": "quit ",
      "secondFormTranscription": "[kwit]",
      "thirdForm": "quit ",
      "thirdFormTranscription": "[kwit]",
      "translation": "выходить"
    }, {
      "firstForm": "read ",
      "firstFormTranscription": "[ri:d]",
      "secondForm": "read ",
      "secondFormTranscription": "[red]",
      "thirdForm": "read ",
      "thirdFormTranscription": "[red]",
      "translation": "читать"
    }, {
      "firstForm": "ride ",
      "firstFormTranscription": "[raid]",
      "secondForm": "rode ",
      "secondFormTranscription": "[roud]",
      "thirdForm": "ridden ",
      "thirdFormTranscription": "['ridn]",
      "translation": "ездить верхом"
    }, {
      "firstForm": "ring ",
      "firstFormTranscription": "[riŋ]",
      "secondForm": "rang ",
      "secondFormTranscription": "[ræŋ]",
      "thirdForm": "rung ",
      "thirdFormTranscription": "[rʌŋ]",
      "translation": "звенеть"
    }, {
      "firstForm": "rise ",
      "firstFormTranscription": "[raiz]",
      "secondForm": "rose ",
      "secondFormTranscription": "[rouz]",
      "thirdForm": "risen ",
      "thirdFormTranscription": "['rizn]",
      "translation": "подниматься"
    }, {
      "firstForm": "run ",
      "firstFormTranscription": "[rʌŋ]",
      "secondForm": "ran ",
      "secondFormTranscription": "[ræŋ]",
      "thirdForm": "run ",
      "thirdFormTranscription": "[rʌŋ]",
      "translation": "бежать"
    }, {
      "firstForm": "say ",
      "firstFormTranscription": "[sei]",
      "secondForm": "said ",
      "secondFormTranscription": "[sed]",
      "thirdForm": "said ",
      "thirdFormTranscription": "[sed]",
      "translation": "говорить"
    }, {
      "firstForm": "see ",
      "firstFormTranscription": "[si:]",
      "secondForm": "saw ",
      "secondFormTranscription": "[sɔ:]",
      "thirdForm": "seen ",
      "thirdFormTranscription": "[si:n]",
      "translation": "видеть"
    }, {
      "firstForm": "seek ",
      "firstFormTranscription": "[si:k]",
      "secondForm": "sought ",
      "secondFormTranscription": "[sɔ:t]",
      "thirdForm": "sought ",
      "thirdFormTranscription": "[sɔ:t]",
      "translation": "искать"
    }, {
      "firstForm": "sell ",
      "firstFormTranscription": "[sel]",
      "secondForm": "sold ",
      "secondFormTranscription": "[sould]",
      "thirdForm": "sold ",
      "thirdFormTranscription": "[sould]",
      "translation": "продавать"
    }, {
      "firstForm": "send ",
      "firstFormTranscription": "[send]",
      "secondForm": "sent ",
      "secondFormTranscription": "[sent]",
      "thirdForm": "sent ",
      "thirdFormTranscription": "[sent]",
      "translation": "посылать"
    }, {
      "firstForm": "set ",
      "firstFormTranscription": "[set]",
      "secondForm": "set ",
      "secondFormTranscription": "[set]",
      "thirdForm": "set ",
      "thirdFormTranscription": "[set]",
      "translation": "ставить"
    }, {
      "firstForm": "sew ",
      "firstFormTranscription": "[sou]",
      "secondForm": "sewed ",
      "secondFormTranscription": "[soud]",
      "thirdForm": "sewn ",
      "thirdFormTranscription": "[soun]",
      "translation": "шить"
    }, {
      "firstForm": "shake ",
      "firstFormTranscription": "[ʃeik]",
      "secondForm": "shook ",
      "secondFormTranscription": "[ʃuk]",
      "thirdForm": "shaken ",
      "thirdFormTranscription": "['ʃeik(ə)n]",
      "translation": "встряхивать"
    }, {
      "firstForm": "show ",
      "firstFormTranscription": "[ʃəu]",
      "secondForm": "showed ",
      "secondFormTranscription": "[ʃəud]",
      "thirdForm": "shown ",
      "thirdFormTranscription": "[ʃəun]",
      "translation": "показывать"
    }, {
      "firstForm": "shrink ",
      "firstFormTranscription": "[ʃriŋk]",
      "secondForm": "shrank ",
      "secondFormTranscription": "[ʃræŋk] ",
      "thirdForm": "shrunk ",
      "thirdFormTranscription": "[ʃrʌŋk] ",
      "translation": "уменьшать"
    }, {
      "firstForm": "shut ",
      "firstFormTranscription": "[ʃʌt]",
      "secondForm": "shut ",
      "secondFormTranscription": "[ʃʌt]",
      "thirdForm": "shut ",
      "thirdFormTranscription": "[ʃʌt]",
      "translation": "закрывать"
    }, {
      "firstForm": "sing ",
      "firstFormTranscription": "[siŋ]",
      "secondForm": "sang ",
      "secondFormTranscription": "[sæŋ]",
      "thirdForm": "sung ",
      "thirdFormTranscription": "[sʌŋ]",
      "translation": "петь"
    }, {
      "firstForm": "sink ",
      "firstFormTranscription": "[siŋk]",
      "secondForm": "sank ",
      "secondFormTranscription": "[sæŋk], sunk [sʌŋk]",
      "thirdForm": "sunk ",
      "thirdFormTranscription": "[sʌŋk]",
      "translation": "тонуть"
    }, {
      "firstForm": "sit ",
      "firstFormTranscription": "[sit]",
      "secondForm": "sat ",
      "secondFormTranscription": "[sæt]",
      "thirdForm": "sat ",
      "thirdFormTranscription": "[sæt]",
      "translation": "сидеть"
    }, {
      "firstForm": "sleep ",
      "firstFormTranscription": "[sli:p]",
      "secondForm": "slept ",
      "secondFormTranscription": "[slept]",
      "thirdForm": "slept ",
      "thirdFormTranscription": "[slept]",
      "translation": "спать"
    }, {
      "firstForm": "slide ",
      "firstFormTranscription": "[slaid]",
      "secondForm": "slid ",
      "secondFormTranscription": "[slid]",
      "thirdForm": "slid ",
      "thirdFormTranscription": "[slid]",
      "translation": "скользить"
    }, {
      "firstForm": "sow ",
      "firstFormTranscription": "[sou]",
      "secondForm": "sowed ",
      "secondFormTranscription": "[soud]",
      "thirdForm": "sown ",
      "thirdFormTranscription": "[soun]",
      "translation": "сеять"
    }, {
      "firstForm": "speak ",
      "firstFormTranscription": "[spi:k]",
      "secondForm": "spoke ",
      "secondFormTranscription": "[spouk]",
      "thirdForm": "spoken ",
      "thirdFormTranscription": "['spouk(e)n]",
      "translation": "говорить"
    }, {
      "firstForm": "spell ",
      "firstFormTranscription": "[spel]",
      "secondForm": "spelt ",
      "secondFormTranscription": "[spelt]",
      "thirdForm": "spelt ",
      "thirdFormTranscription": "[spelt]",
      "translation": "произносить по буквам"
    }, {
      "firstForm": "spend ",
      "firstFormTranscription": "[spend]",
      "secondForm": "spent ",
      "secondFormTranscription": "[spent]",
      "thirdForm": "spent ",
      "thirdFormTranscription": "[spent]",
      "translation": "тратить"
    }, {
      "firstForm": "spill ",
      "firstFormTranscription": "[spil]",
      "secondForm": "spilt ",
      "secondFormTranscription": "[spilt]",
      "thirdForm": "spilt ",
      "thirdFormTranscription": "[spilt]",
      "translation": "проливать"
    }, {
      "firstForm": "spoil ",
      "firstFormTranscription": "[spɔil]",
      "secondForm": "spoilt ",
      "secondFormTranscription": "[spɔilt]",
      "thirdForm": "spoilt ",
      "thirdFormTranscription": "[spɔilt]",
      "translation": "портить"
    }, {
      "firstForm": "spread ",
      "firstFormTranscription": "[spred]",
      "secondForm": "spread ",
      "secondFormTranscription": "[spred]",
      "thirdForm": "spread ",
      "thirdFormTranscription": "[spred]",
      "translation": "расстилать"
    }, {
      "firstForm": "spring ",
      "firstFormTranscription": "[spriŋ]",
      "secondForm": "sprang ",
      "secondFormTranscription": "[spræŋ]",
      "thirdForm": "sprung ",
      "thirdFormTranscription": "[sprʌŋ]",
      "translation": "прыгать"
    }, {
      "firstForm": "stand ",
      "firstFormTranscription": "[stænd]",
      "secondForm": "stood ",
      "secondFormTranscription": "[stu:d]",
      "thirdForm": "stood ",
      "thirdFormTranscription": "[stu:d]",
      "translation": "стоять"
    }, {
      "firstForm": "steal ",
      "firstFormTranscription": "[sti:l]",
      "secondForm": "stole ",
      "secondFormTranscription": "[stoul]",
      "thirdForm": "stolen ",
      "thirdFormTranscription": "['stəulən]",
      "translation": "красть"
    }, {
      "firstForm": "stick ",
      "firstFormTranscription": "[stik]",
      "secondForm": "stuck ",
      "secondFormTranscription": "[stʌk]",
      "thirdForm": "stuck ",
      "thirdFormTranscription": "[stʌk]",
      "translation": "колоть"
    }, {
      "firstForm": "sting ",
      "firstFormTranscription": "[stiŋ]",
      "secondForm": "stung ",
      "secondFormTranscription": "[stʌŋ]",
      "thirdForm": "stung ",
      "thirdFormTranscription": "[stʌŋ]",
      "translation": "жалить"
    }, {
      "firstForm": "sweep ",
      "firstFormTranscription": "[swi:p]",
      "secondForm": "swept ",
      "secondFormTranscription": "[swept]",
      "thirdForm": "swept ",
      "thirdFormTranscription": "[swept]",
      "translation": "выметать"
    }, {
      "firstForm": "swell ",
      "firstFormTranscription": "[swel]",
      "secondForm": "swelled ",
      "secondFormTranscription": "[sweld]",
      "thirdForm": "swollen ",
      "thirdFormTranscription": "['swoul(e)n]",
      "translation": "разбухать"
    }, {
      "firstForm": "swim ",
      "firstFormTranscription": "[swim]",
      "secondForm": "swam ",
      "secondFormTranscription": "[swem]",
      "thirdForm": "swum ",
      "thirdFormTranscription": "[swʌm]",
      "translation": "плавать"
    }, {
      "firstForm": "swing ",
      "firstFormTranscription": "[swiŋ] ",
      "secondForm": "swung ",
      "secondFormTranscription": "[swʌŋ]",
      "thirdForm": "swung ",
      "thirdFormTranscription": "[swʌŋ]",
      "translation": "качать"
    }, {
      "firstForm": "take ",
      "firstFormTranscription": "[teik]",
      "secondForm": "took ",
      "secondFormTranscription": "[tuk]",
      "thirdForm": "taken ",
      "thirdFormTranscription": "['teik(ə)n]",
      "translation": "брать, взять"
    }, {
      "firstForm": "teach ",
      "firstFormTranscription": "[ti:tʃ]",
      "secondForm": "taught ",
      "secondFormTranscription": "[tɔ:t]",
      "thirdForm": "taught ",
      "thirdFormTranscription": "[tɔ:t]",
      "translation": "учить"
    }, {
      "firstForm": "tear ",
      "firstFormTranscription": "[tɛə]",
      "secondForm": "tore ",
      "secondFormTranscription": "[tɔ:]",
      "thirdForm": "torn ",
      "thirdFormTranscription": "[tɔ:n]",
      "translation": "рвать"
    }, {
      "firstForm": "tell ",
      "firstFormTranscription": "[tel]",
      "secondForm": "told ",
      "secondFormTranscription": "[tould]",
      "thirdForm": "told ",
      "thirdFormTranscription": "[tould]",
      "translation": "рассказывать"
    }, {
      "firstForm": "think ",
      "firstFormTranscription": "[θiŋk]",
      "secondForm": "thought ",
      "secondFormTranscription": "[θɔ:t]",
      "thirdForm": "thought ",
      "thirdFormTranscription": "[θɔ:t]",
      "translation": "думать"
    }, {
      "firstForm": "throw ",
      "firstFormTranscription": "[θrəu]",
      "secondForm": "threw ",
      "secondFormTranscription": "[θru:] ",
      "thirdForm": "thrown ",
      "thirdFormTranscription": "[θrəun]",
      "translation": "бросать"
    }, {
      "firstForm": "understand ",
      "firstFormTranscription": "[ʌndə'stænd]",
      "secondForm": "understood ",
      "secondFormTranscription": "[ʌndə'stud]",
      "thirdForm": "understood ",
      "thirdFormTranscription": "[ʌndə'stud]",
      "translation": "понимать"
    }, {
      "firstForm": "wake ",
      "firstFormTranscription": "[weik]",
      "secondForm": "woke ",
      "secondFormTranscription": "[wouk]",
      "thirdForm": "woken ",
      "thirdFormTranscription": "['wouk(e)n]",
      "translation": "просыпаться"
    }, {
      "firstForm": "wear ",
      "firstFormTranscription": "[wɛə]",
      "secondForm": "wore ",
      "secondFormTranscription": "[wɔ:] ",
      "thirdForm": "worn ",
      "thirdFormTranscription": "[wɔ:n]",
      "translation": "носить"
    }, {
      "firstForm": "weep ",
      "firstFormTranscription": "[wi:p]",
      "secondForm": "wept ",
      "secondFormTranscription": "[wept]",
      "thirdForm": "wept ",
      "thirdFormTranscription": "[wept]",
      "translation": "плакать"
    }, {
      "firstForm": "wet ",
      "firstFormTranscription": "[wet]",
      "secondForm": "wet ",
      "secondFormTranscription": "[wet]",
      "thirdForm": "wet ",
      "thirdFormTranscription": "[wet]",
      "translation": "мочить"
    }, {
      "firstForm": "win ",
      "firstFormTranscription": "[win]",
      "secondForm": "won ",
      "secondFormTranscription": "[wʌn]",
      "thirdForm": "won ",
      "thirdFormTranscription": "[wʌn]",
      "translation": "выигрывать"
    }, {
      "firstForm": "wind ",
      "firstFormTranscription": "[waind]",
      "secondForm": "wound ",
      "secondFormTranscription": "[waund]",
      "thirdForm": "wound ",
      "thirdFormTranscription": "[waund]",
      "translation": "извиваться"
    }, {
      "firstForm": "write ",
      "firstFormTranscription": "[rait]",
      "secondForm": "wrote ",
      "secondFormTranscription": "[rout]",
      "thirdForm": "written ",
      "thirdFormTranscription": "['ritn]",
      "translation": "писать"
    }
    ]

  downloadDefault(): Observable<Irregular[]> {

    return this.http.post<Irregular[]>('/api/irregular', this.defaultList);

  }

}
