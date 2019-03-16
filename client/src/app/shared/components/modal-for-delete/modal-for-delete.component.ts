import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal-for-delete',
  templateUrl: './modal-for-delete.component.html'
})
export class ModalForDeleteComponent {

  @Input() wordToDelete: string;

  @Output() deleteThisWord = new EventEmitter();
  deleteWord() {
    this.deleteThisWord.emit();
  }

}
