import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit, OnDestroy {

  constructor() { }
  now: any = new Date();
  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }


  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 527) {
      document.getElementById("toTop").style.display = "block";
    } else {
      document.getElementById("toTop").style.display = "none";
    }
  }

  onClick(){
    let x = document.querySelector("#theTop");
    if (x){
      x.scrollIntoView();
    }
  }
}
