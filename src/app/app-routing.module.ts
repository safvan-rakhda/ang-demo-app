import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesDemoComponent } from './directives/directives-demo/directives-demo.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { HttpclientdemoComponent } from './httpclientdemo/httpclientdemo.component';
import { UserdetailsComponent } from './httpclientdemo/userdetails/userdetails.component';
import { PersonComponent } from './lifecycle/parent/person.component';
import { NotfountdemoComponent } from './notfountdemo/notfountdemo.component';
import { ParentComponent } from './viewContainer/parent/parent.component';

const routes: Routes = [
  { path: '', component: DirectivesDemoComponent },
  { path: 'directives', component: DirectivesDemoComponent },
  { path: 'httpdemo', component: HttpclientdemoComponent },
  { path: 'httpdemo/user/:id', component: UserdetailsComponent },
  { path: 'viewcontainerdemo', component: ParentComponent },
  { path: 'componenetCommunicationdemo', component: PersonComponent },
  { path: 'formdemo', component: FormdemoComponent },
  { path: '**', component: NotfountdemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
