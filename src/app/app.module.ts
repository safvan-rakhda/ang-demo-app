import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesDemoComponent } from './directives/directives-demo/directives-demo.component';
import { PersonComponent } from './lifecycle/parent/person.component';
import { PersonListComponent } from './lifecycle/parent/person-list/person-list.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './viewContainer/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesDemoComponent,
    PersonComponent,
    PersonListComponent,
    HeaderComponent,
    ParentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
