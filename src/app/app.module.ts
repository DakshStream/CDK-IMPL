import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { BidiModule } from "@angular/cdk/bidi";
import { ClipboardModule } from "@angular/cdk/clipboard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    A11yModule,
    CdkAccordionModule,
    BidiModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
