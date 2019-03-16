import { Component, OnInit } from '@angular/core';
import {MaterialService} from "../shared/classes/material.service";
import {Observable} from "rxjs/internal/Observable";
import {Gerund} from "../shared/interfaces";
import {ConnectComponentsService} from "../shared/services/connect-components.service";
import {DefaultGerundService} from "../shared/services/default/default.gerund.service";
import {GerundService} from "../shared/services/gerund.service";



@Component({
  selector: 'app-gerund-page',
  templateUrl: '../shared/components/common-additional-page/common-additional-page.component.html'
})
export class GerundPageComponent implements OnInit {


  verbs$: Observable<Gerund[]>;
  verb: Gerund;

  constructor(private gerundService: GerundService,
              private connectBetween: ConnectComponentsService,
              private downloadDefault: DefaultGerundService) {
    this.connectBetween.onClick.subscribe((model) => {
      if(model) {
        this.deleteList(model)
      }else {
        this.exportChoice = true
      }
    })
  }

  exportTitle: string = "The Gerund";
  exportFollowTo: string = '/gerund/new';
  exportlinkName: string = '/gerund/';
  exportChoice: boolean = false;
  hideLoader: boolean = true;
  exportAbilityPush: boolean = false;
  selectedType: string = 'name';
  searchWord: string;
  exportTopic: string = 'глаголы, требующие после себя герундий';
  exportParamSearch: string = 'name';

  ngOnInit() {
    this.getList();
  }


  getList() {
    this.verbs$ = this.gerundService.fetch();
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
    this.gerundService
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
        this.gerundService.delete('5delete0all0list00000000')
          .subscribe(
            response => MaterialService.toast(response.message),
            error => MaterialService.toast(error.error.message),
            () => {
              this.exportChoice = false;
              this.getList();this.hideLoader = true;
            }
          )
      } else {
        this.gerundService.delete('5delete0all0list0select0')
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

