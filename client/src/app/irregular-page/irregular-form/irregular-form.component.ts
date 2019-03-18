import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IrregularService} from "../../shared/services/irregular.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Irregular} from "../../shared/interfaces";
import {MaterialService} from "../../shared/classes/material.service";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs/index";

@Component({
  selector: 'app-irregular-form',
  templateUrl: './irregular-form.component.html',
  styleUrls: ['./irregular-form.component.css']
})
export class IrregularFormComponent implements OnInit {

  form: FormGroup;
  isNew = true;
  isChange = false;
  word: Irregular;

  constructor(private route: ActivatedRoute,
              private  wordService: IrregularService,
              private router: Router) { }

  flag = true;

  ngOnInit() {
    this.form = new FormGroup({
      firstForm: new FormControl(null, Validators.required),
      firstFormTranscription: new FormControl(null, Validators.required),
      secondForm: new FormControl(null, Validators.required),
      secondFormTranscription: new FormControl(null, Validators.required),
      thirdForm: new FormControl(null, Validators.required),
      thirdFormTranscription: new FormControl(null, Validators.required),
      translation: new FormControl(null, Validators.required)
    });


    this.form.disable();

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false;
              return this.wordService.getById(params['id'])
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (word: Irregular) => {
          if (word) {
            this.word = word;
            this.form.patchValue({
              firstForm: word.firstForm,
              firstFormTranscription: word.firstFormTranscription,
              secondForm: word.secondForm,
              secondFormTranscription: word.secondFormTranscription,
              thirdForm: word.thirdForm,
              thirdFormTranscription: word.thirdFormTranscription,
              translation: word.translation
            })
          }
          this.form.enable()
        },
        error => MaterialService.toast(error.error.message)
      )


  }

  changeFlag() {
    this.flag = false;
  }

  return(){
    this.router.navigate(['/irregular'])
  }

  deleteWord() {

    this.wordService.delete(this.word._id)
      .subscribe(
        response => MaterialService.toast(response.message),
        error => MaterialService.toast(error.error.message),
        () => this.router.navigate(['/irregular'])
      )
  }

  onSubmit() {
    let obs$;
    this.form.disable();

    if (this.isNew) {
      obs$ = this.wordService.create(
        this.form.value.firstForm,
        this.form.value.firstFormTranscription,
        this.form.value.secondForm,
        this.form.value.secondFormTranscription,
        this.form.value.thirdForm,
        this.form.value.thirdFormTranscription,
        this.form.value.translation);
    } else {
      obs$ = this.wordService.update(
        this.word._id,
        this.form.value.firstForm,
        this.form.value.firstFormTranscription,
        this.form.value.secondForm,
        this.form.value.secondFormTranscription,
        this.form.value.thirdForm,
        this.form.value.thirdFormTranscription,
        this.form.value.translation);
    }

    obs$.subscribe(
      word => {
        this.word = word;
        MaterialService.toast('Изменения сохранены');
        this.form.enable()
      },
      error => {
        MaterialService.toast(error.error.message);
        this.form.enable()
      },
      () => this.router.navigate(['/irregular'])
    )
  }

  onChange(val1, val2) {
    if (val1 === val2) {
      this.isChange = false
    } else (
      this.isChange = true
    )
  }

}
