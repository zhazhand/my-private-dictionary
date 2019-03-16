import { Component, OnInit } from '@angular/core';
import {MaterialService} from "../shared/classes/material.service";
import {Observable} from "rxjs/internal/Observable";
import {Separable} from "../shared/interfaces";
import {ConnectComponentsService} from "../shared/services/connect-components.service";
import {DefaultSeparableService} from "../shared/services/default/default.separable.service";
import {SeparableService} from "../shared/services/separable.service";


@Component({
  selector: 'app-separable-page',
  templateUrl: '../shared/components/common-additional-page/common-additional-page.component.html'
})
export class SeparablePageComponent implements OnInit {


  verbs$: Observable<Separable[]>;
  verb: Separable;

  constructor(private separableService: SeparableService,
              private connectBetween: ConnectComponentsService,
              private downloadDefault: DefaultSeparableService) {
    this.connectBetween.onClick.subscribe((model) => {
      if(model) {
        this.deleteList(model)
      }else {
        this.exportChoice = true
      }
    })
  }

  exportTitle: string = "Separable phrasal verbs";
  exportFollowTo: string = '/separable/new';
  exportlinkName: string = '/separable/';
  exportChoice: boolean = false;
  hideLoader: boolean = true;
  exportAbilityPush: boolean = false;
  selectedType: string = 'name';
  searchWord: string;
  exportTopic: string = 'разделяемые фразовые глаголы';exportParamSearch: string = 'name';

  ngOnInit() {
    this.getList();
  }


  getList() {
    this.verbs$ = this.separableService.fetch();
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
    this.separableService
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
        this.separableService.delete('5delete0all0list00000000')
          .subscribe(
            response => MaterialService.toast(response.message),
            error => MaterialService.toast(error.error.message),
            () => {
              this.exportChoice = false;
              this.getList();this.hideLoader = true;
            }
          )
      } else {
        this.separableService.delete('5delete0all0list0select0')
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
