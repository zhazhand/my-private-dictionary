import {Component, OnInit} from '@angular/core';
import {ConnectComponentsService} from "../../services/connect-components.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

   deleteList(model: boolean){
     this.connectBetween.doClick(model);
   }

  changeChoice(){
    this.connectBetween.doClick();
  }

  constructor(private connectBetween: ConnectComponentsService) { }

  ngOnInit() {
  }

}
