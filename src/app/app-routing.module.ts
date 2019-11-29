import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Component1Component } from './template-driven-form/component1.component';
import { Component2Component } from './reactive-form/component2.component';

const routes: Routes = [
  {path: "component1" , component: Component1Component},
  {path: "component2" , component: Component2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
