import {Component, OnInit} from '@angular/core';
import {VocabularyService} from "../shared/services/vocabulary.service";
import {Word} from "../shared/interfaces";
import {Observable} from "rxjs/internal/Observable";
import {MaterialService} from "../shared/classes/material.service";
import {DefaultVocabularyService} from "../shared/services/default/default.vocabulary.service";
import {ConnectComponentsService} from "../shared/services/connect-components.service";

@Component({
  selector: 'app-vocabulary-page',
  templateUrl: './vocabulary-page.component.html',
  styleUrls: ['./vocabulary-page.component.css']
})
export class VocabularyPageComponent implements OnInit {

  words$: Observable<Word[]>;
  word: Word;

  constructor(private vocabularyService: VocabularyService,
              private connectBetween: ConnectComponentsService,
              private downloadDefault: DefaultVocabularyService) {
    this.connectBetween.onClick.subscribe((model) => {
      if(model) {
        this.deleteList(model)
      }else {
        this.exportChoice = true
      }
    })
  }

  exportTitle = "My vocabulary";
  exportFollowTo = '/vocabulary/new';
  exportChoice: boolean = false;
  hideLoader: boolean = true;
  exportAbilityPush: boolean = false;
  selectedType: string = 'name';
  searchWord: string;

  ngOnInit() {
    this.words$ = this.vocabularyService.fetch()
  }

  onSearchWord(model: string) {
    this.searchWord = model;
  }

  changeOrderBy(model: string) {
    this.selectedType = model;
  }

  saveChanges(item: Word, removable) {
    this.vocabularyService.update(item._id, item.name, item.transcription, item.translation, removable)
      .subscribe(
        () => console.log('Обновлено'),
        error => MaterialService.toast(error.error.message)
      )
  }

  deleteList(par?: boolean) {
    this.hideLoader = true;
    if (this.exportChoice || par) {
      if (par) {
        this.vocabularyService.delete('5delete0all0list00000000')
          .subscribe(
            response => MaterialService.toast(response.message),
            error => MaterialService.toast(error.error.message),
            () => {
              this.exportChoice = false;
              this.words$ = this.vocabularyService.fetch();
            }
          )
      } else {
        this.vocabularyService.delete('5delete0all0list0select0')
          .subscribe(
            response => MaterialService.toast(response.message),
            error => MaterialService.toast(error.error.message),
            () => {
              this.exportChoice = false;
              this.words$ = this.vocabularyService.fetch();
            }
          )
      }
    }
  }

  addDefault() {
    this.hideLoader = false;
    this.exportAbilityPush = true;
    this.downloadDefault.downloadDefault()
      .subscribe(
        () => {
          MaterialService.toast('Список загружен');
          this.exportAbilityPush = false;
        },
        error => MaterialService.toast(error.error.message),
        () => {

          this.words$ = this.vocabularyService.fetch();
        }
      )
  }

}
