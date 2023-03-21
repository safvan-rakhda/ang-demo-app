import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesDemoComponent } from './directives/directives-demo/directives-demo.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { LoginGuard } from './gaurds/login.guard';
import { HttpclientdemoComponent } from './httpclientdemo/httpclientdemo.component';
import { UserdetailsComponent } from './httpclientdemo/userdetails/userdetails.component';
import { PersonComponent } from './lifecycle/parent/person.component';
import { LogindemoComponent } from './logindemo/logindemo.component';
import { NotfountdemoComponent } from './notfountdemo/notfountdemo.component';
import { ParentComponent } from './viewContainer/parent/parent.component';

const routes: Routes = [
  { path: '', component: LogindemoComponent },
  { path: 'login', component: LogindemoComponent },
  {
    path: 'directives',
    component: DirectivesDemoComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'httpdemo',
    component: HttpclientdemoComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'httpdemo/user/:id',
    component: UserdetailsComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'viewcontainerdemo',
    component: ParentComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'componenetCommunicationdemo',
    component: PersonComponent,
    canActivate: [LoginGuard],
  },
  { path: 'formdemo', component: FormdemoComponent, canActivate: [LoginGuard] },
  { path: '**', component: NotfountdemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
