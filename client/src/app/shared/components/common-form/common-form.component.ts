import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrls: ['./common-form.component.css']
})
export class CommonFormComponent {

  @Input() isNew: boolean;
  @Input() form;
  @Input() prevLink;

  flag: boolean = true;


  changeFlag() {
    this.flag = false;
  }

  @Output() onDeleteWord = new EventEmitter();
    deleteWord() {
      this.onDeleteWord.emit();
    }

  @Output() onSaveWord = new EventEmitter();
  onSubmit() {
    this.onSaveWord.emit();
  }

}
