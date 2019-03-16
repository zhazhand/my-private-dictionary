import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-common-block-output',
  templateUrl: './common-block-output.component.html',
  styleUrls: ['./common-block-output.component.css']
})
export class CommonBlockOutputComponent implements OnInit {

  @Input() list;
  @Input() topic;
  @Input() choice;
  @Input() hideLoader;
  @Input() linkName;
  @Input() search;
  @Input() paramSearch;
  @Input() selectedType;

  constructor() {
  }

  ngOnInit() {
  }

  @Output() downloadDf = new EventEmitter<string>();

  addDefault() {
    this.downloadDf.emit();
  }

  @Output() changeRemovable = new EventEmitter<any>();

  saveChanges(item, rmabl: boolean) {
    item.removable = rmabl;
    this.changeRemovable.emit(item);
  }

}
