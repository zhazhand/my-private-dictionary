import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MaterialService} from "../shared/classes/material.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  aSub: Subscription;//переменная отвечает за отсутствие утечки памяти

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
}

  ngOnDestroy(){//метод вызовется в случае уничтожения компонента login - мы переходим на новую страницу
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }

  ngOnInit() {
  this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl( null, [Validators.required, Validators.minLength(6)])
    });

    this.route.queryParams.subscribe((params: Params) => {
        if(params['registered']) {
          MaterialService.toast('Теперь вы можете зайти в систему, используя свои данные')
        } else if(params['accessDenied']) {
          MaterialService.toast('Для начала авторизуйтесь в системе')
        } else if(params['sessionFailed']) {
          MaterialService.toast('Пожалуйста, войдите в систему заново')
        }
    })
  }

  onSubmit(){
    this.form.disable();
    this.aSub = this.auth.login(this.form.value).subscribe(
    (res: any) => {
                        this.router.navigate(['/irregular']);
                        },
    error => {
      MaterialService.toast(error.error.message);
      this.form.enable()
    }
  )
  }

}
