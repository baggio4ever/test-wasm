import { PageTest4Component } from './test/page-test4/page-test4.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { PageTest3Component } from './test/page-test3/page-test3.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:PageTest3Component},
  {path:'test3',component:PageTest3Component},
  {path:'test4',component:PageTest4Component},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
