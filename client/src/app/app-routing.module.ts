import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {GuidePageComponent} from "./guide-page/guide-page.component";
import {AuthGuard} from "./shared/classes/auth.guard";
import {IrregularPageComponent} from "./irregular-page/irregular-page.component";
import {VocabularyPageComponent} from "./vocabulary-page/vocabulary-page.component";
import {SeparablePageComponent} from "./separable-page/separable-page.component";
import {GerundPageComponent} from "./gerund-page/gerund-page.component";
import {PhrasesPageComponent} from "./phrases-page/phrases-page.component";
import {AssistPageComponent} from "./assist-page/assist-page.component";
import {VocabularyFormComponent} from "./vocabulary-page/vocabulary-form/vocabulary-form.component";
import {IrregularFormComponent} from "./irregular-page/irregular-form/irregular-form.component";
import {SeparableFormComponent} from "./separable-page/separable-form/separable-form.component";
import {GerundFormComponent} from "./gerund-page/gerund-form/gerund-form.component";
import {InfinitivePageComponent} from "./infinitive-page/infinitive-page.component";
import {InfinitiveFormComponent} from "./infinitive-page/infinitive-form/infinitive-form.component";
import {PhrasesFormComponent} from "./phrases-page/phrases-form/phrases-form.component";


const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/guide', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
      {path: 'guide', component: GuidePageComponent}
    ]
  },
  {
    path: '', component: SiteLayoutComponent,canActivate: [AuthGuard] , children: [
      {path: 'irregular', component: IrregularPageComponent},
      {path: 'vocabulary', component: VocabularyPageComponent},
      {path: 'separable', component: SeparablePageComponent},
      {path: 'gerund', component: GerundPageComponent},
      {path: 'infinitive', component: InfinitivePageComponent},
      {path: 'phrases', component: PhrasesPageComponent},
      {path: 'assistance', component: AssistPageComponent},
      {path: 'vocabulary/new', component: VocabularyFormComponent},
      {path: 'vocabulary/:id', component: VocabularyFormComponent},
      {path: 'irregular/new', component: IrregularFormComponent},
      {path: 'irregular/:id', component: IrregularFormComponent},
      {path: 'separable/new', component: SeparableFormComponent},
      {path: 'separable/:id', component: SeparableFormComponent},
      {path: 'gerund/new', component: GerundFormComponent},
      {path: 'gerund/:id', component: GerundFormComponent},
      {path: 'infinitive/new', component: InfinitiveFormComponent},
      {path: 'infinitive/:id', component: InfinitiveFormComponent},
      {path: 'phrases/new', component: PhrasesFormComponent},
      {path: 'phrases/:id', component: PhrasesFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
