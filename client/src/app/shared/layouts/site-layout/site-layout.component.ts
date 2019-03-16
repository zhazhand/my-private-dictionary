import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit, OnDestroy {
  links = [
    {url: '/irregular', name: 'Irregular verbs'},
    {url: '/vocabulary', name: 'Private vocabulary'},
    {
      url: '/additionally', name: 'Additionally', children: [
        {url: '/separable', name: 'Separable'},
        {url: '/gerund', name: 'Gerund'},
        {url: '/infinitive', name: 'Infinitive'},
        {url: '/phrases', name: 'Phrases'},
      ]
    },
    {url: '/assistance', name: 'Guide'}
  ];

  @ViewChild('toggleButton') butRef: ElementRef

  constructor(private auth: AuthService,
              private router: Router) {
  }

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

  logout(event: Event) {
    event.preventDefault();
    this.auth.logOut();
    this.router.navigate(['/login'])
  }

  triggerClick(children: boolean=false) {
    if(!children) {
      this.butRef.nativeElement.click()
    }
  }

  onClick(){
    let x = document.querySelector("#theTop");
    if (x){
      x.scrollIntoView();
    }
  }

}
