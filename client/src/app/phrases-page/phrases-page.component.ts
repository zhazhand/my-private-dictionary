import { Component, OnInit } from '@angular/core';
import {ConnectComponentsService} from "../shared/services/connect-components.service";
import {MaterialService} from "../shared/classes/material.service";
import {Observable} from "rxjs/internal/Observable";
import {PhrasesService} from "../shared/services/phrases.service";
import {DefaultPhrasesService} from "../shared/services/default/default.phrases.service";
import {Phrases} from "../shared/interfaces";

@Component({
  selector: 'app-phrases-page',
  templateUrl: '../shared/components/common-additional-page/common-additional-page.component.html'
})
export class PhrasesPageComponent implements OnInit {
  verbs$: Observable<Phrases[]>;

  constructor(private phrasesService: PhrasesService,
              private connectBetween: ConnectComponentsService,
              private downloadDefault: DefaultPhrasesService) {
    this.connectBetween.onClick.subscribe((model) => {
      if(model) {
        this.deleteList(model)
      }else {
        this.exportChoice = true
      }
    })
  }

  exportTitle: string = "The Phrases";
  exportFollowTo: string = '/phrases/new';
  exportlinkName: string = '/phrases/';
  exportChoice: boolean = false;
  hideLoader: boolean = true;
  exportAbilityPush: boolean = false;
  selectedType: string = 'name';
  searchWord: string;
  exportTopic: string = 'часто употребляемые фразы';
  exportParamSearch: string = 'name';

  ngOnInit() {
    this.getList();
  }


  getList() {
    this.verbs$ = this.phrasesService.fetch();
  }

  onSearchWord(model: string) {
    this.searchWord = model;
  }

  changeOrderBy(model: string) {
    this.selectedType = model;
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

          this.getList();this.hideLoader = true;
        }
      )
  }

  saveChanges(item) {
    this.phrasesService
      .update(item._id, item.name,item.translation, item.removable)
      .subscribe(
        () => console.log('Updated!!'),
        error => MaterialService.toast(error.error.message)
      )
  }

  deleteList(par?: boolean) {
    this.hideLoader = true;
    if (this.exportChoice || par) {
      if (par) {
        this.phrasesService.delete('5delete0all0list00000000')
          .subscribe(
            response => MaterialService.toast(response.message),
            error => MaterialService.toast(error.error.message),
            () => {
              this.exportChoice = false;
              this.getList();this.hideLoader = true;
            }
          )
      } else {
        this.phrasesService.delete('5delete0all0list0select0')
          .subscribe(
            response => MaterialService.toast(response.message),
            error => MaterialService.toast(error.error.message),
            () => {
              this.exportChoice = false;
              this.getList();this.hideLoader = true;
            }
          )
      }
    }
  }
}
