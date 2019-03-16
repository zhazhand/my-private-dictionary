import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {VocabularyService} from "../../shared/services/vocabulary.service";
import {switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {MaterialService} from "../../shared/classes/material.service";
import {Word} from "../../shared/interfaces";

@Component({
  selector: 'app-vocabulary-form',
  templateUrl: './vocabulary-form.component.html',
  styleUrls: ['./vocabulary-form.component.css']
})
export class VocabularyFormComponent implements OnInit {

  form: FormGroup;
  isNew = true;
  title: string = 'удобный ресурс, на котором можно узнать английское или американское произношение (транскрипцию) слова';
  href: string = 'https://wooordhunt.ru/word/';
  strDefault = 'welcome';
  word: Word;

  constructor(private route: ActivatedRoute,
              private  wordService: VocabularyService,
              private router: Router) {
  }

  flag = true;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      transcription: new FormControl(null, Validators.required),
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
        (word: Word) => {
          if (word) {
            this.word = word;
            this.form.patchValue({
              name: word.name,
              transcription: word.transcription,
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
    this.router.navigate(['/vocabulary'])
  }
  deleteWord() {

    this.wordService.delete(this.word._id)
      .subscribe(
        response => MaterialService.toast(response.message),
        error => MaterialService.toast(error.error.message),
        () => this.router.navigate(['/vocabulary'])
      )
  }

  onSubmit() {
    let obs$;
    this.form.disable();

    if (this.isNew) {
      obs$ = this.wordService.create(this.form.value.name, this.form.value.transcription, this.form.value.translation);
    } else {
      obs$ = this.wordService.update(this.word._id, this.form.value.name, this.form.value.transcription, this.form.value.translation)
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
      () => this.router.navigate(['/vocabulary'])
    )
  }
}
