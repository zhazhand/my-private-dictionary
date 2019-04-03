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
  isChange = false;name:string;
  //name =this.form.value.name;
ngAfterViewInit(){
  this.name =this.form.value.name;console.log("this.form.value.name",this.form.value)
}
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

  onChange(val1, val2) {console.log("val1:",val1, "val2:",val2);console.log("555:",this.form.value.name)
    if (val1 === val2) {
      this.isChange = false
    } else (
      this.isChange = true
    )
  }

}
