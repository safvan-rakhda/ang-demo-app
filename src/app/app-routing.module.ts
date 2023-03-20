import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesDemoComponent } from './directives/directives-demo/directives-demo.component';
import { HttpclientdemoComponent } from './httpclientdemo/httpclientdemo.component';
import { PersonComponent } from './lifecycle/parent/person.component';
import { ParentComponent } from './viewContainer/parent/parent.component';

const routes: Routes = [
  { path: 'directives', component: DirectivesDemoComponent },
  { path: 'httpdemo', component: HttpclientdemoComponent },
  { path: 'viewcontainerdemo', component: ParentComponent },
  { path: 'componenetCommunicationdemo', component: PersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
