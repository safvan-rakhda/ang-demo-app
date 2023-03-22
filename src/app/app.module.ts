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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemohoverDirective } from './directives/custom/demohover.directive';
import { LogindemoComponent } from './logindemo/logindemo.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    LogindemoComponent,
    ReactiveformComponent,
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
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSnackBarModule,
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
