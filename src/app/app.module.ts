import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesDemoComponent } from './directives/directives-demo/directives-demo.component';
import { PersonComponent } from './lifecycle/parent/person.component';
import { PersonListComponent } from './lifecycle/parent/person-list/person-list.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './viewContainer/parent/parent.component';
import { MY_TOKEN } from './injectiontoken/demo.token';
import { RxjsdemoComponent } from './rxjsdemo/rxjsdemo.component';
import { HttpclientdemoComponent } from './httpclientdemo/httpclientdemo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpReqInterceptorInterceptor } from './interceptors/http-req-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    PersonComponent,
    PersonListComponent,
    HeaderComponent,
    ParentComponent,
    RxjsdemoComponent,
    HttpclientdemoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: MY_TOKEN,
      useValue: 'My test vakue for token',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpReqInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
