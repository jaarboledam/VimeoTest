import { NgModule } from '@angular/core';
import { UIRouterModule, StateDeclaration } from '@uirouter/angular';

const states: StateDeclaration[] = [];

@NgModule({
  imports: [UIRouterModule.forRoot({ states })],
  exports: [UIRouterModule]
})
export class AppRoutingModule { }
