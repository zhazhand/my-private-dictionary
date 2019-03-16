import { Component, OnInit } from '@angular/core';
import {ConnectComponentsService} from "../shared/services/connect-components.service";
import {DefaultInfinitiveService} from "../shared/services/default/default.infinitive.service";
import {InfinitiveService} from "../shared/services/infinitive.service";
import {MaterialService} from "../shared/classes/material.service";
import {Observable} from "rxjs/internal/Observable";
import {Infinitive} from "../shared/interfaces";


@Component({
  selector: 'app-infinitive-page',
  templateUrl: '../shared/components/common-additional-page/common-additional-page.component.html'
})
export class InfinitivePageComponent implements OnInit {
  verbs$: Observable<Infinitive[]>;

  constructor(private infinitiveService: InfinitiveService,
              private connectBetween: ConnectComponentsService,
              private downloadDefault: DefaultInfinitiveService) {
    this.connectBetween.onClick.subscribe((model) => {
      if(model) {
        this.deleteList(model)
      }else {
        this.exportChoice = true
      }
    })
  }

  exportTitle: string = "The Infinitive";
  exportFollowTo: string = '/infinitive/new';
  exportlinkName: string = '/infinitive/';
  exportChoice: boolean = false;
  hideLoader: boolean = true;
  exportAbilityPush: boolean = false;
  selectedType: string = 'name';
  searchWord: string;
  exportTopic: string = 'глаголы, требующие после себя инфинитив';
  exportParamSearch: string = 'name';

  ngOnInit() {
    this.getList();
  }


  getList() {
    this.verbs$ = this.infinitiveService.fetch();
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
    this.infinitiveService
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
        this.infinitiveService.delete('5delete0all0list00000000')
          .subscribe(
            response => MaterialService.toast(response.message),
            error => MaterialService.toast(error.error.message),
            () => {
              this.exportChoice = false;
              this.getList();this.hideLoader = true;
            }
          )
      } else {
        this.infinitiveService.delete('5delete0all0list0select0')
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
