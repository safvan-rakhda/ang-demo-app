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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavDemoComponent } from './app-nav-demo/app-nav-demo.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfountdemoComponent } from './notfountdemo/notfountdemo.component';
import { UserdetailsComponent } from './httpclientdemo/userdetails/userdetails.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { FormsModule } from '@angular/forms';
import { DemohoverDirective } from './directives/directives-demo/custom/demohover.directive';

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
    AppNavDemoComponent,
    NotfountdemoComponent,
    UserdetailsComponent,
    FormdemoComponent,
    DemohoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
  ],
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
