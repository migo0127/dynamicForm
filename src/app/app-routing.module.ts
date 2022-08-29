import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as Component from './modules';

const routes: Routes = [
  { path: '', redirectTo: 'dynamic-form', pathMatch: 'full' },
  { path: 'dynamic-form', component: Component.DynamicFormComponent },
  { path: '**', redirectTo: 'dynamic-form' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
