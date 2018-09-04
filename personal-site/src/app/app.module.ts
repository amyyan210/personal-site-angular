import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{component: AppComponent, path: ''}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
