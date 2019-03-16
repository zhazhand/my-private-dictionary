import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {InfinitiveService} from "../../shared/services/infinitive.service";
import {of} from "rxjs/index";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {switchMap} from "rxjs/operators";
import {MaterialService} from "../../shared/classes/material.service";
import {Infinitive} from "../../shared/interfaces";


@Component({
  selector: 'app-infinitive-form',
  templateUrl: '../../shared/components/common-parent-form/common-parent-form.component.html'
})
export class InfinitiveFormComponent implements OnInit {

  exportIsNew: boolean = true;
  followLink: string = '/infinitive';
  exportForm: FormGroup;
  word: Infinitive;

  constructor(private route: ActivatedRoute,
              private  wordService: InfinitiveService,
              private router: Router) { }

  ngOnInit() {
    this.exportForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      translation: new FormControl(null, Validators.required)
    });


    this.exportForm.disable();

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.exportIsNew = false;
              return this.wordService.getById(params['id'])
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (word: Infinitive) => {
          if (word) {
            this.word = word;
            this.exportForm.patchValue({
              name: word.name,
              translation: word.translation
            })
          }
          this.exportForm.enable()
        },
        error => MaterialService.toast(error.error.message)
      )


  }

  return(){
    this.router.navigate([this.followLink])
  }
  deleteWord() {

    this.wordService.delete(this.word._id)
      .subscribe(
        response => MaterialService.toast(response.message),
        error => MaterialService.toast(error.error.message),
        () => this.router.navigate([this.followLink])
      )
  }

  onSubmit() {
    let obs$;
    this.exportForm.disable();

    if (this.exportIsNew) {
      obs$ = this.wordService.create(this.exportForm.value.name, this.exportForm.value.translation);
    } else {
      obs$ = this.wordService.update(this.word._id, this.exportForm.value.name, this.exportForm.value.translation)
    }

    obs$.subscribe(
      word => {
        this.word = word;
        MaterialService.toast('Изменения сохранены');
        this.exportForm.enable()
      },
      error => {
        MaterialService.toast(error.error.message);
        this.exportForm.enable()
      },
      () => this.router.navigate([this.followLink])
    )
  }
}
