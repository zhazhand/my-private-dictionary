import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-control-block',
  templateUrl: './control-block.component.html',
  styleUrls: ['./control-block.component.css']
})
export class ControlBlockComponent implements OnInit {

  @Input() blockTitle: string;
  @Input() list;

  @Input() followTo;
  @Input() choice;
  @Input() abilityPush;

  searchWord: string;
  category = [{value: 'date', type: 'date'}, {value: 'name', type: 'alphabet'}];
  selectedCategory = 'name';


  @Output() takeWord = new EventEmitter<string>();
  onFieldChange(model: string) {
    this.searchWord = model;
    this.takeWord.emit(model);
  }

  @Output() takeType = new EventEmitter<string>();
  onSelect(model: string) {
    this.selectedCategory = model;
    this.takeType.emit(model);
  }

  @Output() delList = new EventEmitter<string>();
  deleteList() {
    this.delList.emit();
  }

  ngOnInit() {
  }

  clearField() {
    this.onFieldChange(null)
  }

}
