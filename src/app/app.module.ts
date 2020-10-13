import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewBai1Component } from './new-bai1/new-bai1.component';
import { NewBai2Component } from './new-bai2/new-bai2.component';
import { NewBai3Component } from './new-bai3/new-bai3.component';
import { NewBai4Component } from './new-bai4/new-bai4.component';
import { NewBai5Component } from './new-bai5/new-bai5.component';
import { NewBai6Component } from './new-bai6/new-bai6.component';
import { NewBai7Component } from './new-bai7/new-bai7.component';
import { NewBai8Component } from './new-bai8/new-bai8.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBai1Component,
    NewBai2Component,
    NewBai3Component,
    NewBai4Component,
    NewBai5Component,
    NewBai6Component,
    NewBai7Component,
    NewBai8Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
