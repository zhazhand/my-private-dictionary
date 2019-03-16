import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { GuidePageComponent } from './guide-page/guide-page.component';
import { TokenInterceptor } from "./shared/classes/token.interceptor";
import { IrregularPageComponent } from './irregular-page/irregular-page.component';
import { VocabularyPageComponent } from './vocabulary-page/vocabulary-page.component';
import { AditionalyPageComponent } from './aditionaly-page/aditionaly-page.component';
import { SeparablePageComponent } from './separable-page/separable-page.component';
import { GerundPageComponent } from './gerund-page/gerund-page.component';
import { PhrasesPageComponent } from './phrases-page/phrases-page.component';
import { AssistPageComponent } from './assist-page/assist-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { VocabularyFormComponent } from './vocabulary-page/vocabulary-form/vocabulary-form.component';
import { AppOrderByPipe } from './shared/pipes/app-order-by.pipe';
import { DusterIconComponent } from './shared/components/duster-icon/duster-icon.component';
import { ListFilterPipe } from './shared/pipes/list-filter.pipe';
import { ControlBlockComponent } from './shared/components/control-block/control-block.component';
import { IrregularFormComponent } from './irregular-page/irregular-form/irregular-form.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalForDeleteComponent } from './shared/components/modal-for-delete/modal-for-delete.component';
import { CommonBlockOutputComponent } from './shared/components/common-block-output/common-block-output.component';
import { SeparableFormComponent } from './separable-page/separable-form/separable-form.component';
import { CommonFormComponent } from './shared/components/common-form/common-form.component';
import {GerundFormComponent} from "./gerund-page/gerund-form/gerund-form.component";
import { CommonParentFormComponent } from './shared/components/common-parent-form/common-parent-form.component';
import { InfinitivePageComponent } from './infinitive-page/infinitive-page.component';
import { InfinitiveFormComponent } from './infinitive-page/infinitive-form/infinitive-form.component';
import { CommonAdditionalPageComponent } from './shared/components/common-additional-page/common-additional-page.component';
import { PhrasesFormComponent } from './phrases-page/phrases-form/phrases-form.component';
import { CommonGuidePageComponent } from './shared/components/common-guide-page/common-guide-page.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    GuidePageComponent,
    IrregularPageComponent,
    VocabularyPageComponent,
    AditionalyPageComponent,
    SeparablePageComponent,
    GerundPageComponent,
    PhrasesPageComponent,
    AssistPageComponent,
    LoaderComponent,
    VocabularyFormComponent,
    AppOrderByPipe,
    DusterIconComponent,
    ListFilterPipe,
    ControlBlockComponent,
    IrregularFormComponent,
    ModalComponent,
    ModalForDeleteComponent,
    CommonBlockOutputComponent,
    SeparableFormComponent,
    CommonFormComponent,
    GerundFormComponent,
    CommonParentFormComponent,
    InfinitivePageComponent,
    InfinitiveFormComponent,
    CommonAdditionalPageComponent,
    PhrasesFormComponent,
    CommonGuidePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: TokenInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
