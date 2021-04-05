import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { PageTest3Component } from './test/page-test3/page-test3.component';
import { PageTest4Component } from './test/page-test4/page-test4.component';
import { ScriptTagComponent } from './script-tag/script-tag.component';
import { PageHomeComponent } from './page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageTest3Component,
    PageTest4Component,
    ScriptTagComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
