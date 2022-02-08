import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeubleListComponent } from './meuble-list/meuble-list.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateMeubleComponent } from './create-meuble/create-meuble.component';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MeubleListComponent,
    CreateMeubleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]

})


export class AppModule { }
