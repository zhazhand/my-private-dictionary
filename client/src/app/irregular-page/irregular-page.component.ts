import {Component, OnInit} from '@angular/core';
import {Irregular} from "../shared/interfaces";
import {Observable} from "rxjs/internal/Observable";
import {IrregularService} from "../shared/services/irregular.service";
import {MaterialService} from "../shared/classes/material.service";
import {DefaultIrregularService} from "../shared/services/default/default.irregular.service";
import {ConnectComponentsService} from "../shared/services/connect-components.service";

@Component({
  selector: 'app-overview-page',
  templateUrl: './irregular-page.component.html',
  styleUrls: ['./irregular-page.component.css']
})
export class IrregularPageComponent implements OnInit {

  verbs$: Observable<Irregular[]>;


  constructor(private irregularService: IrregularService,
              private connectBetween: ConnectComponentsService,
              private downloadDefault: DefaultIrregularService) {
    this.connectBetween.onClick.subscribe((model) => {
      if(model) {
        this.deleteList(model)
      }else {
        this.exportChoice = true
      }
    })
  }

  exportTitle = "Irregular verbs";
  exportFollowTo = '/irregular/new';
  exportChoice: boolean = false;
  hideLoader: boolean = true;
  exportAbilityPush: boolean = false;
  selectedType: string = 'firstForm';
  searchWord: string;

  ngOnInit() {
    this.getList();
  }


  getList() {
    this.verbs$ = this.irregularService.fetch();
  }

  onSearchWord(model: string) {
    this.searchWord = model;
  }

  changeOrderBy(model: string) {
    this.selectedType = (model === 'name') ? 'firstForm' : model;
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

  saveChanges(item, removable) {
    this.irregularService
      .update(item._id, item.firstForm, item.firstFormTranscription,
        item.secondForm, item.secondFormTranscription, item.thirdForm,
        item.thirdFormTranscription, item.translation, removable)
      .subscribe(
        () => console.log('Updated!!'),
        error => MaterialService.toast(error.error.message)
      )
  }

  deleteList(par?: boolean) {
    this.hideLoader = true;
    if (this.exportChoice || par) {
      if (par) {
        this.irregularService.delete('5delete0all0list00000000')
          .subscribe(
            response => MaterialService.toast(response.message),
            error => MaterialService.toast(error.error.message),
            () => {
              this.exportChoice = false;
              this.getList();this.hideLoader = true;
            }
          )
      } else {
        this.irregularService.delete('5delete0all0list0select0')
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
